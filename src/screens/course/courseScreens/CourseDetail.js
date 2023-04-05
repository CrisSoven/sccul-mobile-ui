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

export default function CourseScreen(props) {
  const { course, secondsDuration } = props.route.params;
  const [status, setStatus] = React.useState({})
  const video = useRef(null);
  const navigation = useNavigation();
  const [resumenVideo, setResumenVideo] = useState(0);
  const [videoWatched, setVideoWatched] = useState(false);
  const [progress, setProgress] = useState({
    video: resumenVideo,
    watched: videoWatched,
  });

  console.log(course.inscriptions);

  useEffect(() => {
    if (status.didJustFinish) { // if (status.didJustFinish || status.positionMillis >= (status.durationMillis / 100 * 80)) {
      setVideoWatched(true);
      console.log("Video terminado");
      const segunds = Math.floor(status.positionMillis / 1000);
      console.log(segunds);

      //sacar la relacion entre segundsDuration y segunds
      const percentage = (segunds * 100) / secondsDuration;
      setProgress({
        video: resumenVideo,
        watched: videoWatched,
      });
      console.log(progress);
    }
  }, [status]);

  const handleSectionPress = (sectionId) => {
    setResumenVideo(sectionId);
  };

  return (
    !course.id ?
      <Splash /> : (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Goback title={course.name} />
            <View style={styles.videoContainer}>
              <Video
                style={styles.video}
                ref={video}
                source={{ uri: course.sections[resumenVideo].video }}
                shouldPlay={true}
                resizeMode="contain"
                useNativeControls
                // onPlaybackStatusUpdate={calculatedStatus}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
            </View>
            <ContentComponent
              course={course}
              disable={false}
              onSectionPress={handleSectionPress}
              videoWatched={videoWatched}
              navigation={navigation}
            />
            <FeedbackComponent />
        </ScrollView>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
  }
});