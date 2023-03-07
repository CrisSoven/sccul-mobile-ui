// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Goback from '../../components/common/Goback'

// export default function CourseScreen() {
//   return (
//     <View>
//      <Goback
//      title='Fundamentos'
//      />
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Goback from "../../components/common/Goback";

export default function CourseScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      <View>
        <Goback title="Conejo Puto" />
      </View>
      <View style={styles.container}>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
