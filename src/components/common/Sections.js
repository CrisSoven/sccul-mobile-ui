import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";

export default function Sections({ sections, disable = true, onSectionPress, continueVideo, isCourseScreen, percentage }) {
  const [selectedSection, setSelectedSection] = useState(disable ? 0 : 1);
  const [isWatched, setIsWatched] = useState(false);

  // for (let i = 0; i < 6; i++) {
  //   if (percentage.split(',')[i] == sections[i].id) {
  //     console.log(percentage.split(',')[i]);
  //     console.log(sections[i].id);
  //   }
  // }
  
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
          activeOpacity={0.8}
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
              disable ? [styles.infoVideo, { opacity: 0.5 }] :
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
            color={disable ? Colors.PalleteGray : Colors.PalleteBlack}
          />
          <Text
            style={[
              disable ? [styles.title, { opacity: 0.5 }] :
                styles.title,
              selectedSection === section.id ? { fontWeight: "bold" } : {},
            ]}
            numberOfLines={1}
          >
            {section.name}
          </Text>
          <Text
            style={[
              disable ? [styles.infoVideo, { opacity: 0.5 }] :
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
