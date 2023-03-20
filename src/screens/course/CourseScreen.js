import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";
import Goback from "../../components/common/Goback";
import ContentComponent from "../../components/course/ContentComponent";
import { ScrollView } from "react-native-gesture-handler";
import FeedbackComponent from "../../components/course/FeedbackComponent";

export default function CourseScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView style={styles.container}>
      <Goback title="Fundamentos de JavaScript" />
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../../../assets/video/lavine.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <ContentComponent />
      <FeedbackComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: "90%",
    height: 215,
    alignSelf: "center",
    marginBottom: 20,
  },
  video: {
    height: "100%",
    borderRadius: 20,
  },
});
