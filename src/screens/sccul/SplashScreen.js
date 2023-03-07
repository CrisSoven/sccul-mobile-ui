import { StyleSheet, ActivityIndicator, View } from "react-native";
import { Image } from "react-native-elements";
import Colors from "../../utils/Colors.js";
import React from "react";

export default function SplashScreen() {
  return (
    <View style={styles.bg}>
      <Image
        source={require("../../../assets/img/sccullogo.png")}
        style={styles.logo}
      />
      <ActivityIndicator size="large" color={Colors.PalleteBluePrimary} />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: Colors.PalleteGreenBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
