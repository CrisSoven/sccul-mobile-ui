//*
import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native-elements";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";

export default function Courses({ courses, courseSwipe }) {
  const navigation = useNavigation();
  const onPressHandler = (courseId) => {
    navigation.navigate("CoursesDetailsScreen", { courseId: courseId });
  };

  const renderCourse = (course) => (
    <TouchableOpacity
      key={course.id}
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => onPressHandler(course.id)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: course.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleCourse} numberOfLines={2}>
          {course.name}
        </Text>
        <View>
          {course.discount > 0 && (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  ...styles.price,
                  color: Colors.PalletteRed,
                  fontWeight: "bold",
                  fontSize: 15,
                  marginRight: "4%",
                }}
              >
                ${parseFloat(course.price.toFixed(2))} MXN
              </Text>
              <Text
                style={{
                  ...styles.price,
                  fontSize: 11.5,
                  textDecorationLine: "line-through",
                  marginTop: "1.5%",
                }}
              >
                ${course.originalPrice} MXN
              </Text>
            </View>
          )}
          {(course.discount == 0 || course.discount == null) && (
            <Text style={styles.price}>${course.price} MXN</Text>
          )}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.average}>
              {course.average ? course.average : 0}
            </Text>
            <Rating
              startingValue={course.average ? course.average : 0}
              fractions={1}
              imageSize={20}
              readonly
              ratingColor={Colors.PalleteYellow}
              tintColor={Colors.PalleteGreenBackground}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 14 }}>
              ({course.comments ? 0 : course.comments})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (courseSwipe) {
    if (courseSwipe.discount > 0) {
      return renderCourse({
        ...courseSwipe,
        price: courseSwipe.price - courseSwipe.price * (courseSwipe.discount / 100),
        originalPrice: courseSwipe.price,
      });
    } else {
      return renderCourse(courseSwipe);
    }
  } else if (courses) {
    const updatedCourses = courses.map((course) => {
      if (course.discount > 0) {
        return {
          ...course,
          price: course.price - course.price * (course.discount / 100),
          originalPrice: course.price,
        };
      } else {
        return course;
      }
    });

    return <View>{updatedCourses.map((course) => renderCourse(course))}</View>;
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.PalleteGreenBackground,
    marginBottom: 15,
    borderRadius: 16,
    width: "100%",
    height: 110,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
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
    fontSize: 16,
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
