import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";

export default function Sections(props) {
  const { sections, disable = true, onSectionPress } = props;
  const [selectedSection, setSelectedSection] = useState(disable ? 0 : 1);

  sections.sort((a, b) => a.number - b.number);

  const handlePress = (sectionId) => {
    onSectionPress(sectionId - 1);
  };
  return (
    <View>
      {sections.map((section) => (
        <TouchableOpacity
          key={section.id}
          style={[styles.container, disable ? { opacity: 0.5 } : {}]}
          onPress={() => {
            handlePress(section.id)
            setSelectedSection(section.id);
          }}
          activeOpacity={0.8}
          disabled={disable}>
          <Text style={[styles.infoVideo, selectedSection === section.id ? { fontWeight: "bold" } : {}]}>{`${section.number}.`}</Text>
          <Icon
            name={selectedSection === section.id ? "motion-pause-outline" : "play-circle-outline"}
            type="material-community"
          />
          <Text style={[styles.title, selectedSection === section.id ? { fontWeight: "bold" } : {}]} numberOfLines={1}>
            {section.name}
          </Text>
          <Text style={[styles.infoVideo, selectedSection === section.id ? { fontWeight: "bold" } : {}]}>{section.duration}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.PalleteGreenBackground,
  },
  infoVideo: {
    fontSize: 14,
    marginHorizontal: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 5,
  },
});
