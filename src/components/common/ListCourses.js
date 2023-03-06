import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native-elements";
import { Rating } from "react-native-elements";
import Colors from "../../utils/Colors"

const Courses = ({ image, title, price, average, comments }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
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
      {courses.map((curso, index) => (
        <Courses
          key={index}
          image={curso.image}
          title={curso.title}
          price={curso.price}
          average={curso.average}
          comments={curso.comments}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.PalleteGreenBackground,
    marginBottom: 10,
    borderRadius: 15,
    width: "100%",
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 15,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  titleCourse: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  averageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  average: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    color: Colors.PalletteRed,
  },
  comments: {
    fontSize: 16,
  },
});
