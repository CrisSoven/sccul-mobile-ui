import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function CardsComponent(props) {
  const { onPress } = props;
  console.log(props);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
