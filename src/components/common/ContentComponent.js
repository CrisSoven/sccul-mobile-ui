import React from "react";
import SectionSurvey from "../course/SectionSurvey";
import { StyleSheet, Text, View } from "react-native";
import Sections from "../../components/common/Sections";

export default function ContentComponent({ course, disable, onSectionPress, navigation, disableSurvey, continueVideo, isCourseScreen, setReload, reload }) {
  const minutes = course.sections.reduce((acc, section) => {
    const duration = section.duration.split(":");
    const minutes = parseInt(duration[0]);
    const seconds = parseInt(duration[1]);
    return acc + (minutes + seconds / 60);
  }, 0);
  const decimal = minutes % 1;
  const seconds = decimal * 60;

  const duration = `${Math.floor(minutes)}:${Math.floor(seconds)}min`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contenido del curso</Text>
      <View style={styles.capsAndDurationContainer}>
        <Text style={{ fontSize: 16 }}>
          {course.sections.length} Capitulos -{" "}
        </Text>
        <Text style={styles.totalDuration}>{duration}</Text>
      </View>
      <View style={styles.sectionsContainer}>
        <Sections
          continueVideo={continueVideo}
          sections={course.sections}
          disable={disable}
          onSectionPress={onSectionPress}
          isCourseScreen={isCourseScreen}
        />
        <SectionSurvey
          navigation={navigation}
          course={course}
          disable={disable}
          disableSurvey={disableSurvey}
          setReload={setReload}
          reload={reload}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  capsAndDurationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  totalDuration: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
