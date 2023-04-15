import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Courses({ course, title, duration, progress, image }) {
  const [progressPercentage, setProgressPercentage] = useState(0);

  const navigation = useNavigation();
  
  const minutes = duration.reduce((acc, section) => {
    const duration = section.duration.split(":");
    const minutes = parseInt(duration[0]);
    const seconds = parseInt(duration[1]);
    return acc + (minutes + seconds / 60);
  }, 0);
  const decimal = minutes % 1;
  const seconds = decimal * 60;
  const totalDuration = `${Math.floor(minutes)}:${Math.floor(seconds)}min`;
  const secondsDuration = Math.floor(minutes) * 60 + Math.floor(seconds);

  useEffect(() => {
    if (progress !== null) {
      const splitProgress = progress.split(",");

      const finalProgress = splitProgress
        .filter((section) => section !== "")
        .map((section) => parseInt(section));

      const percentageCourse = Math.floor(
        (finalProgress.length / course.sections.length) * 100
      );

      setProgressPercentage(percentageCourse);
    }
  }, [course.sections.length, progress]);

  return (
    <View style={styles.content}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("CourseDetail", { course, secondsDuration })
        }
      >
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text
            style={styles.duration}
          >{`${course.sections.length} episodios - ${totalDuration}`}</Text>
          <View style={styles.progressBar}>
            {progress === null ? (
              <View
                style={{
                  ...styles.progress,
                  width: "0%",
                }}
              />
            ) : (
              <View
                style={{
                  ...styles.progress,
                  width: `${progressPercentage}%`,
                }}
              />
            )}
          </View>
          {progress === null ? (
            <Text style={styles.progressText}>0%</Text>
          ) : (
            <Text style={styles.progressText}>{`${progressPercentage}%`}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.PalleteGreenBackground,
    margin: 5,
    width: "45%",
    borderRadius: 10,
    height: 200,
  },
  image: {
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 11,
    paddingBottom: 10,
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: Colors.PalleteGray,
    borderRadius: 10,
  },
  progress: {
    height: 10,
    backgroundColor: Colors.PalleteBluePrimary,
    borderRadius: 10,
  },
  progressText: {
    fontSize: 12,
    marginVertical: 5,
    fontWeight: "bold",
    color: Colors.PalleteBluePrimary,
    textAlign: "right",
  },
});
