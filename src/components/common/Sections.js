import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";

export default function Sections(props) {
  const { sections, disable = true } = props;
  sections.sort((a, b) => a.number - b.number);

  return (
    <View>
      {sections.map((section) => (
        <TouchableOpacity
          key={section.id}
          style={disable ? styles.containerDisable : styles.containerAble}
          onPress={() => console.log(section.video)}
          activeOpacity={0.8}
          disabled={disable}>
          <Text style={[styles.number, disable ? {color:Colors.PalleteBlack} : {color:Colors.PalleteWhite}]}>{`${section.number}.`}</Text>
          <Icon
            name="play-circle-outline"
            type="community"
            color={disable ? Colors.PalleteBlack : Colors.PalleteWhite}
          />
          <Text style={[styles.title, disable ? {color:Colors.PalleteBlack} : {color:Colors.PalleteWhite}]} numberOfLines={1}>
            {section.name}
          </Text>
          <Text style={[styles.duration, disable ? {color:Colors.PalleteBlack} : {color:Colors.PalleteWhite}]}>{section.duration}m</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerDisable: {
    flexDirection: "row",
    height: 35,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.PalleteGreenBackground,
  },
  containerAble: {
    flexDirection: "row",
    height: 35,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.PalleteAuxiliarBlue,
  },
  number: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 5,
  },
  duration: {
    fontSize: 14,
    marginHorizontal: 20,
  },
});
