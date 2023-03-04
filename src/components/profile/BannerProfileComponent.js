import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function BannerProfileComponent() {
  return (
    <>
      <View {...styles.banner}>
        <View style={styles.iconProfile}>
          <Text style={styles.textProfile}>CS</Text>
        </View>
      </View>
      <Text style={styles.textName}>Cristopher Soto Ventura</Text>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 150,
    backgroundColor: Colors.PalleteBlueSecundary,
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: "20%",
  },
  iconProfile: {
    backgroundColor: Colors.PalleteWhite,
    borderColor: Colors.PalleteGray,
    borderWidth: 1,
    height: 150,
    width: 150,
    borderRadius: 100,
    position: "absolute",
    top: 75,
    justifyContent: "center",
  },
  textProfile: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
