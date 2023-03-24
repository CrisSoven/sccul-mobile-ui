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
            <Text style={styles.price}>${courseSwipe.price} MX</Text>
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
      {courses.map((course) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={course.id}
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
              <Text style={styles.price}>${course.price} MXN</Text>
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
