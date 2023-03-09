import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Rating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Goback from "../../../components/common/Goback";
import Sections from "../../../components/common/Sections";
import AddToCartBtn from "../../../components/home/AddToCartBtn";
import BuyNowBtn from "../../../components/home/BuyNowBtn";
import Colors from "../../../utils/Colors";

const CoursesDetailsScreen = ({ route }) => {
  const { course } = route.params;

  const caps = course.section.length;

  const totalDuration = course.section.reduce((acc, section) => {
    const [minutes, seconds] = section.duration.split(":").map(Number);
    const sectionDuration = minutes * 60 + seconds;
    return acc + sectionDuration;
  }, 0);

  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Goback title={course.title} />
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
          <View>
            <TouchableOpacity style={styles.categoryContainer} disabled={true}>
              <Text style={styles.categoryText} numberOfLines={1}>
                {course.category}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addToCartAndBuyNowContainer}>
            <View style={styles.addToCartContainer}>
              <AddToCartBtn />
            </View>
            <View style={styles.buyNowContainer}>
              <BuyNowBtn />
            </View>
          </View>
          <Text style={styles.contentOfCourse}>Contenido del curso</Text>
          <View style={styles.capsAndDurationContainer}>
            <Text style={styles.totalCaps}>{caps} Capitulos - </Text>
            <Text style={styles.totalDuration}>
              {hours} h {minutes} min
            </Text>
          </View>
          <View>
            <Sections sections={course.section} />
          </View>
        </View>
      </ScrollView>
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
    height: 230,
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
  description: {
    fontSize: 18,
    color: "#333",
    textAlign: "justify",
  },
  categoryContainer: {
    marginTop: "4%",
    width: 130,
    height: 40,
    backgroundColor: Colors.PalleteGreenBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  categoryText: {
    color: Colors.PalleteBlack,
    fontWeight: "bold",
    textAlign: "center",
  },
  addToCartAndBuyNowContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "6%",
  },
  addToCartContainer: {
    flex: 0.3,
    width: 100,
  },
  buyNowContainer: {
    flex: 1,
    width: 100,
    marginLeft: "5%",
  },
  contentOfCourse: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: "5%",
    marginBottom: "1%",
  },
  capsAndDurationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
    marginHorizontal: "1%",
  },
  totalCaps: {
    fontSize: 14,
    color: Colors.PalleteBlack,
  },
  totalDuration: {
    fontSize: 14,
    color: Colors.PalleteBlack,
    fontWeight: "bold",
  },
});
