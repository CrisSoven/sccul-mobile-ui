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
    <ScrollView>
       <View style={styles.container}>
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
        <ContentComponent/>
        <FeedbackComponent/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    resizeMode: "contain",
    
   },

});
