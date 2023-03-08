import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

const VideoComponenet = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  return (
    
    <View>
      <Video
          ref={video}
          style={styles.video}
          source={require("../../../assets/video/lavine.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
    </View>
  )
}

export default VideoComponenet

const styles = StyleSheet.create({})