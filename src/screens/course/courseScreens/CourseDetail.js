import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Video } from "expo-av";
import Goback from "../../../components/common/Goback";
import ContentComponent from "../../../components/common/ContentComponent";
import { ScrollView } from "react-native-gesture-handler";
import FeedbackComponent from "../../../components/course/FeedbackComponent";
import { useNavigation } from "@react-navigation/native";
import Splash from "../../sccul/SplashScreen";

export default function CourseScreen(props) {
  const { course } = props.route.params;
  const video = useRef(null);
  const navigation = useNavigation();
  const [resumenVideo, setResumenVideo] = useState(0);
  const [videoWatched, setVideoWatched] = useState(false);
  const [resumen, setResumen] = useState({
    video: resumenVideo,
    watched: videoWatched,
  });

  // useEffect(() => {
  //   setResumen({
  //     video: resumenVideo,
  //     watched: videoWatched,
  //   });
  //   console.log(resumen);
  // }, [videoWatched]);

  const calculatedStatus = (status) => {
    if (status.didJustFinish || (status.positionMillis >= status.playableDurationMillis * 0.90)) {
      setVideoWatched(true);
      console.log("Video terminado");
    }
  };


  return (
    !course.id ?
      <Splash /> : (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Goback title={course.name} />
          <View style={styles.content}>
            <View style={styles.videoContainer}>
              <Video
                style={styles.video}
                ref={video}
                source={{ uri: course.sections[`${resumenVideo}`].video }}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={calculatedStatus}
              />
            </View>
            <ContentComponent course={course} disable={false} />
            <FeedbackComponent />
            <Button
              title="Ir a la encuesta"
              onPress={() => navigation.navigate("Survey")}
            />
          </View>
        </ScrollView>
      )
  );
}

const styles = StyleSheet.create({
  content: {
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
  },
});