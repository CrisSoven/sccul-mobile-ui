import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import Swiper from "react-native-swiper";

const images = [
  require("../../../assets/img/redbull.jpg"),
  require("../../../assets/img/leclerc.jpg"),
  require("../../../assets/img/banner.jpg"),
];

export default function Banner() {
  return (
    <View style={styles.container}>
      <Swiper autoplay={true} autoplayTimeout={5} showsPagination={false}>
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
    padding: "3%",
    height: 270,
  },
  image: {
    width: "99%",
    height: 230,
    borderRadius: 10,
    marginHorizontal: "1%",
  },
});
