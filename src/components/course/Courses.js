import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Courses(props) {
  const navigation = useNavigation();
  const { title, duration, progress, image } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Course")}
    >
      <View style={styles.blueBox}>
        <Image source={image} style={styles.image} />
        <View style={styles.data}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.duration}>{duration}</Text>
          <View style={styles.progressBar}>
            <View
              style={[styles.progress, { width: `${progress}%` }]}
            ></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  blueBox: {
    backgroundColor: Colors.PalleteGreenBackground,
    margin: 10,
    borderRadius: 10,
    width: "90%",
    height: "auto",
  },
  image: {
    width: "auto",
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
  data: {
    padding: 10,
  },
  column: {
    flexDirection: "column",
  },
});