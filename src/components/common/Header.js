import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../../assets/img/sccullogo.png")}
        style={styles.logo}
      /> */}
      <Text style={styles.text}>SIOCU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PalleteBluePrimary,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "10%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PalleteWhite,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
  },
});
