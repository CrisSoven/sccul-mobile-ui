import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Courses(props) {
  const navigation = useNavigation();
  const { course, title, duration, progress, image } = props;

  return (
    <View style={styles.content}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CourseDetail", {course})}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.duration}>{duration}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.PalleteGreenBackground,
    margin: 7,
    width: "45%",
    borderRadius: 10,
  },
  image: {
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 10,
    paddingBottom: 10,
  },
  progressBar: {
    width: "90%",
    height: 10,
    backgroundColor: Colors.PalleteGray,
  },
  progress: {
    height: 10,
    backgroundColor: Colors.PalleteBluePrimary,
  },
});