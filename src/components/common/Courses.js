//pendiente por reducir codigo xdxd
import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native-elements";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";

export default function Courses(props) {
  const { courses, courseSwipe } = props;
  const navigation = useNavigation();

  const changeOpacity = () => {
    console.log("hola");
  };

  const calcPrice = () => {
    return courses.map((course) => {
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
  };

  const updatedCourses = calcPrice();

  if (courseSwipe) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={() => {
          navigation.navigate("CoursesDetailsScreen", {
            courseId: courseSwipe.id,
          });
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: courseSwipe.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleCourse} numberOfLines={2}>
            {courseSwipe.name}
          </Text>
          <View>
            {courseSwipe.discount > 0 && (
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    ...styles.price,
                    color: Colors.PalletteRed,
                    fontWeight: "bold",
                    fontSize: 14,
                    marginRight: "2%",
                    marginTop: "4%",
                  }}
                >
                  ${courseSwipe.price} MXN
                </Text>
                <Text
                  style={{
                    ...styles.price,
                    fontSize: 12,
                    textDecorationLine: "line-through",
                  }}
                >
                  ${courseSwipe.originalPrice} MXN
                </Text>
              </View>
            )}
            {(courseSwipe.discount == 0 || courseSwipe.discount == null) && (
              <Text style={styles.price}>${courseSwipe.price} MXN</Text>
            )}
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.average}>
                {courseSwipe.average ? courseSwipe.average : 0}
              </Text>
              <Rating
                startingValue={courseSwipe.average ? courseSwipe.average : 0}
                fractions={1}
                imageSize={20}
                readonly
                ratingColor={Colors.PalleteYellow}
                tintColor={Colors.PalleteGreenBackground}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 14 }}>
                ({courseSwipe.comments ? 0 : courseSwipe.comments})
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      {updatedCourses.map((course) => (
        <TouchableOpacity
          key={course.id}
          activeOpacity={0.8}
          style={styles.container}
          onPress={() => {
            navigation.navigate("CoursesDetailsScreen", {
              courseId: course.id,
            });
          }}
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
                    ${course.price} MXN
                  </Text>
                  <Text
                    style={{
                      ...styles.price,
                      fontSize: 11.5,
                      textDecorationLine: "line-through",
                      marginTop: "1%",
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
