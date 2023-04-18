import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import Courses from "./ListCourses";

export default function FilterCourses({ courses }) {
    console.log(courses);
  return (
    <View>
      {courses.map((course) => (
        <Courses
          key={course.id}
          image={course.image}
          title={course.name}
          price={course.price}
          average={course.average}
          comments={course.comments.length}
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
    marginBottom: 15,
    borderRadius: 16,
    width: "100%",
    height: 115,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: "3%",
    marginVertical: "2%",
    justifyContent: "space-evenly",
  },
  titleCourse: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 17,
    marginBottom: "2%",
  },
  average: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 3,
    color: Colors.PalletteRed,
  },
  imageContainer: {
    width: "45%",
    height: "100%",
    borderRadius: 16,
    overflow: "hidden",
  },
});
