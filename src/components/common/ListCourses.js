import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native-elements";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";

const Courses = ({ image, title, price, average, comments, course }) => {
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
        <Text style={styles.titleCourse} numberOfLines={2}>{title}</Text>
        <View>
          <Text style={styles.price}>{price}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.average}>{average}</Text>
            <Rating
              style={{ marginRight: 3 }}
              type='custom'
              startingValue={average}
              fractions="{1}"
              imageSize={20}
              ratingColor={Colors.PalleteYellow}
              ratingBackgroundColor={"#c8c8c8"}
              tintColor={Colors.PalleteGreenBackground}
            />
            <Text style={{ fontSize: 14 }}>({comments})</Text>
          </View>
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
