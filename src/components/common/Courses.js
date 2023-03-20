import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native-elements";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";

export default function Courses(props) {
  const { courses, inCart } = props;

  /*
  <TouchableWithoutFeedback onPress={() => setIsSelected(!isSelected)}>
    <View>
       <View style={[styles.radioButton, isSelected]} >
         {isSelected && <View style={styles.radioButtonSelectedCircle} />}
        </View>
    </View>
  </TouchableWithoutFeedback>
  */

  const navigation = useNavigation();

  return (
    <View>
      {courses.map((course) => (
        <TouchableOpacity
          key={course.id}
          style={styles.container}
          onPress={() => {
            navigation.navigate("CoursesDetailsScreen", { courseId: course.id });
          }}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: course.image }} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.titleCourse} numberOfLines={2}>{course.name}</Text>
            <View>
              <Text style={styles.price}>${course.price} MX</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.average}>{course.average ? course.average : 0}</Text>
                <Rating
                  style={{ marginRight: 3 }}
                  type='custom'
                  startingValue={course.average ? course.average : 0}
                  fractions="{1}"
                  imageSize={20}
                  ratingColor={Colors.PalleteYellow}
                  ratingBackgroundColor={"#c8c8c8"}
                  tintColor={Colors.PalleteGreenBackground}
                />
                <Text style={{ fontSize: 14 }}>({course.comments ? 0 : course.comments})</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

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