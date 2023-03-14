import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";

export default function Sections(section) {
  const { sections } = section;

  return (
    <View>
      {sections.map((section, index) => (
        <TouchableOpacity style={styles.container} disabled={true} key={index}>
          <Text style={styles.number}>{`${section.number}.`}</Text>
          <Icon
            name="play-circle-outline"
            type="community"
            color={Colors.PalleteBlack}
            style={{ opacity: 0.5 }}
          />
          <Text style={styles.title} numberOfLines={1}>
            {section.title}
          </Text>
          <Text style={styles.duration}>{section.duration}h</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    backgroundColor: Colors.PalleteGreenBackground,
    marginBottom: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  number: {
    flex: 0.1,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "5%",
    opacity: 0.5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: "3%",
    opacity: 0.5,
  },
  duration: {
    flex: 0.2,
    fontSize: 14,
    opacity: 0.5,
  },
});
