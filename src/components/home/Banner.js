import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import Swiper from "react-native-swiper";

const images = [
  require("../../../assets/img/redbull.jpg"),
  require("../../../assets/img/leclerc.jpg"),
  require("../../../assets/img/redbull.jpg"),
];

export default function Banner() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={{
          delay: 10000,
        }}
      >
        {images.map((image, index) => (
          <View key={index}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    height: 270,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
});
