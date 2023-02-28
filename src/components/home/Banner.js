import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/chequito.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    width: 360,
    height: 230,
    borderRadius: 15,
  },
});
