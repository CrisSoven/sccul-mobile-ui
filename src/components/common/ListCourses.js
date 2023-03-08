import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native-elements";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";

const Courses = ({ image, title, price, average, comments, course }) => {
  console.log(course);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("CoursesDetailsScreen", { course })}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleCourse}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.averageContainer}>
          <Text style={styles.average}>{average}</Text>
          <Rating
            startingValue={average}
            fractions="{1}"
            imageSize={24}
            readonly
            ratingColor="#FFAA0D"
            tintColor="#CFE3DE"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.comments}>({comments})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ListCourses({ courses }) {
  return (
    <View>
      {courses.map((course, index) => (
        <Courses
          key={index}
          image={course.image}
          title={course.title}
          price={course.price}
          average={course.average}
          comments={course.comments}
          course={course}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.PalleteGreenBackground,
    marginBottom: "5%",
    borderRadius: 15,
    width: "100%",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
  },
  titleCourse: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "1%",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingTop: "7%",
  },
  averageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  average: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: "4%",
    color: Colors.PalletteRed,
  },
  comments: {
    fontSize: 16,
  },
  imageContainer: {
    width: "37%",
    height: "100%",
    borderRadius: 15,
    marginRight: "2%",
    overflow: "hidden",
  },
});
