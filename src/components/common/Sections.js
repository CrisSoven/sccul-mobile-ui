import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";

export default function Sections(props) {
  const {
    sections,
    disable = true,
    onSectionPress,
    continueVideo,
    isCourseScreen,
  } = props;
  const [selectedSection, setSelectedSection] = useState(0);

  // console.log(continueVideo);
  // console.log("selectedSection", selectedSection);

  useEffect(() => {
    if (!isCourseScreen && sections.length > 0) {
      setSelectedSection(sections[continueVideo].id);
      onSectionPress(continueVideo);
    }
  }, [continueVideo]);

  sections.sort((a, b) => a.number - b.number);

  const handlePress = (sectionId) => {
    const sectionPosition = sections.findIndex(
      (section) => section.id === sectionId
    );
    onSectionPress(sectionPosition);
  };

  return (
    <View>
      {sections.map((section) => (
        <TouchableOpacity
          key={section.id}
          style={[
            styles.container,
            selectedSection === section.id
              ? { height: 40, marginHorizontal: 0 }
              : {},
          ]}
          onPress={() => {
            handlePress(section.id);
            setSelectedSection(section.id);
          }}
          disabled={disable}
        >
          <Text
            style={[
              styles.infoVideo,
              selectedSection === section.id ? { fontWeight: "bold" } : {},
            ]}
          >{`${section.number}.`}</Text>
          <Icon
            name={
              selectedSection === section.id
                ? "motion-pause-outline"
                : "play-circle-outline"
            }
            type="material-community"
          />
          <Text
            style={[
              styles.title,
              selectedSection === section.id ? { fontWeight: "bold" } : {},
            ]}
            numberOfLines={1}
          >
            {section.name}
          </Text>
          <Text
            style={[
              styles.infoVideo,
              selectedSection === section.id ? { fontWeight: "bold" } : {},
            ]}
          >
            {section.duration}
          </Text>
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
    marginHorizontal: 5,
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
