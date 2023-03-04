import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";

export default function CardsComponent() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon style={styles.icon} name="credit-card" type="MaterialIcons" size={25} />
        <Text style={styles.title}>Mi cartera</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="chevron-right" type="material-community" size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  rightContainer: {
    marginRight: 10,
  },
  icon: {
    paddingRight: 10,
    },
});
