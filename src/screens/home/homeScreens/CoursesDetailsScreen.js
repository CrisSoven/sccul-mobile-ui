import { title } from "process";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Rating } from "react-native-elements";
import Goback from "../../../components/common/Goback";
import Colors from "../../../utils/Colors";

const CoursesDetailsScreen = ({ route }) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Goback title={`${course.title}`} />
      <Image source={course.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.averageContainer}>
          <Text style={styles.average}>{course.average}</Text>
          <Rating
            startingValue={course.average}
            fractions={1}
            imageSize={24}
            readonly
            ratingColor="#FFAA0D"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.comments}>({course.comments})</Text>
        </View>
        <Text style={styles.price}>{course.price}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{course.category}</Text>
        </View>
      </View>
    </View>
  );
};

export default CoursesDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "90%",
    height: "30%",
    marginHorizontal: "5%",
    borderRadius: 15,
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  titleCourse: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.PalletteRed,
    marginBottom: 10,
  },
  averageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  average: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    color: Colors.PalletteRed,
  },
  comments: {
    fontSize: 20,
    color: "#333",
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    color: "#333",
    textAlign: "justify",
    fontWeight: "bold",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 45,
    width: 130,
    backgroundColor: Colors.PalleteGreenBackground,
    borderRadius: 15,
  },
  category: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.PalleteBlack,
    paddingLeft: "10%",
    textAlign: "center",
  },
});
