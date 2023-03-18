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
        <Text style={styles.titleCourse} numberOfLines={3}>{title}</Text>
        <View style={styles.averageAndPriceContainer}>
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
    marginBottom: "5%",
    borderRadius: 15,
    width: "100%",
    height: 125,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: "2%",
  },
  titleCourse: {
    flex: 1.4,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "1%",
  },
  price: {
    fontSize: 16,
    color: "#333",
  },
  averageAndPriceContainer: {
    flex: 1,
  },
  averageContainer: {
    flex: 1,
    flexDirection: "row",
  },
  average: {
    flex: .5,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: "1%",
    color: Colors.PalletteRed,
  },
  comments: {
    fontSize: 16,
  },
  imageContainer: {
    width: "37%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
});
