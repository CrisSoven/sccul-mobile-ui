import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, StyleSheet, Text, RefreshControl, ScrollView } from "react-native";
import { Video } from "expo-av";
import Goback from "../../../components/common/Goback";
import ContentComponent from "../../../components/common/ContentComponent";
import FeedbackComponent from "../../../components/course/FeedbackComponent";
import { useNavigation } from "@react-navigation/native";
import Splash from "../../sccul/SplashScreen";
import { getUser, setPercentageInscription } from "../../../utils/Axios";
import { getCourseById } from "../../../utils/Axios";

export default function CourseScreen(props) {
  const { course } = props.route.params;
  const [status, setStatus] = React.useState({});
  const video = useRef(null);
  const navigation = useNavigation();
  const [resumenVideo, setResumenVideo] = useState(0);
  const [videosWatchedCount, setVideosWatchedCount] = useState(0);
  const [percentage, setPercentage] = useState(null);
  const [continueVideo, setContinueVideo] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [reload, setReload] = useState(false);

  const fetchCourse = async () => {
    const userId = Number(await getUser());
    const response = await getCourseById(course.id);
    const userInscription = response.inscriptions.filter(
      (inscription) => inscription.user.user.id === userId
    );
    setPercentage(userInscription[0].fullPercentage);
  };

  useEffect(() => {
    fetchCourse();
  }, [reload]);

  useEffect(() => {
    if (percentage !== null) {
      const sectionWatched = percentage.split(",");

      const sectionWatchedId = sectionWatched
        .filter((section) => section !== "")
        .map((section) => parseInt(section));

      const videoMissed = course.sections.filter(
        (section) => !percentage?.includes(section.id)
      );

      if (videoMissed.length > 0) {
        const videoMissedPosition = course.sections.findIndex(
          (section) => section.id === videoMissed[0].id
        );
        setContinueVideo(videoMissedPosition);
      } else {
        const firstVideoPosition = course.sections.findIndex(
          (section) => section.id === course.sections[0].id
        );
        setContinueVideo(firstVideoPosition);
      }

      setVideosWatchedCount(sectionWatchedId.length);
    }
  }, [percentage]);

  useEffect(() => {
    if (status.didJustFinish) {
      if (!percentage?.includes(course.sections[resumenVideo].id)) {
        setVideosWatchedCount((prevState) => prevState + 1);
        setPercentageInscription(course.id, course.sections[resumenVideo].id);
      }
    }
  }, [status, reload]);

  const handleSectionPress = (sectionId) => {
    setResumenVideo(sectionId);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourse();
    setRefreshing(false);
  }, []);

  const allVideosWatched = videosWatchedCount === course.sections.length;
  return !course.id ? (
    <Splash />
  ) : (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
      <Text style={styles.nameSection}>
        {course.sections[resumenVideo].name}
      </Text>
      <ContentComponent
        continueVideo={continueVideo}
        course={course}
        disable={false}
        onSectionPress={handleSectionPress}
        navigation={navigation}
        disableSurvey={allVideosWatched}
        setReload={setReload}
        reload={reload}
        percentage={percentage}
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
  nameSection: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
