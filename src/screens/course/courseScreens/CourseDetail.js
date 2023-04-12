import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Video } from "expo-av";
import Goback from "../../../components/common/Goback";
import ContentComponent from "../../../components/common/ContentComponent";
import { ScrollView } from "react-native-gesture-handler";
import FeedbackComponent from "../../../components/course/FeedbackComponent";
import { useNavigation } from "@react-navigation/native";
import Splash from "../../sccul/SplashScreen";
import { setPercentageInscription } from "../../../utils/Axios";
import { getCourseById } from "../../../utils/Axios";

export default function CourseScreen(props) {
  const { course } = props.route.params;
  const [courseOne, setCourse] = useState(course);
  const [status, setStatus] = React.useState({});
  const video = useRef(null);
  const navigation = useNavigation();
  const [resumenVideo, setResumenVideo] = useState(0);
  const [videoWatched, setVideoWatched] = useState({
    sections: course.sections.map((section) => ({
      id: section.id,
      watched: false,
    })),
  });
  const [videosWatchedCount, setVideosWatchedCount] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedCourse = await getCourseById(course.id);
      setCourse(fetchedCourse);
    };
    fetchCourse();
  }, []);

  useEffect(() => {
    if (courseOne.inscriptions[0].fullPercentage !== null) {
      const sectionWatched = courseOne.inscriptions[0].fullPercentage.split(",");

      const sectionWatchedId = sectionWatched
        .filter((section) => section !== "")
        .map((section) => parseInt(section));

      const updatedSections = videoWatched.sections.map((section) => {
        if (sectionWatchedId.includes(section.id)) {
          return { ...section, watched: true };
        } else {
          return section;
        }
      });

      setVideoWatched((prevState) => ({
        ...prevState,
        sections: updatedSections,
      }));

      setVideosWatchedCount(sectionWatchedId.length);
    }
  }, []);

  // console.log("videoWatched", videoWatched);
  // console.log("el video ya visto", videoWatched.sections[resumenVideo].watched);

  useEffect(() => {
    if (status.didJustFinish) {
      if (!videoWatched.sections[resumenVideo].watched) {
        setVideosWatchedCount((prevState) => prevState + 1);
        setPercentageInscription(course.id, course.sections[resumenVideo].id);
      }
      const updatedSections = [...videoWatched.sections];
      updatedSections[resumenVideo].watched = true;
      setVideoWatched((prevState) => ({
        ...prevState,
        sections: updatedSections,
      }));
    }
  }, [status]);

  const handleSectionPress = (sectionId) => {
    setResumenVideo(sectionId);
  };

  const allVideosWatched = videosWatchedCount === course.sections.length;

  return !course.id ? (
    <Splash />
  ) : (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Goback title={course.name} />
      <View style={styles.videoContainer}>
        <Video
          style={styles.video}
          ref={video}
          source={{ uri: course.sections[resumenVideo].video }}
          shouldPlay={false}
          resizeMode="contain"
          useNativeControls
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <ContentComponent
        course={course}
        disable={false}
        onSectionPress={handleSectionPress}
        navigation={navigation}
        disableSurvey={allVideosWatched}
      />
      <FeedbackComponent courseId={course.id} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  videoContainer: {
    width: "100%",
    height: 215,
    alignSelf: "center",
    marginBottom: 20,
  },
  video: {
    height: "100%",
    borderRadius: 20,
  },
});
