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

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Goback title={`${course.title}`} />
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
          <View style={styles.categoryContainer}>
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
          <View>
            <Sections sections={ course.section }/>
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
    marginBottom: 5,
  },
  addToCartAndBuyNowContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "6%",
  },
  addToCartContainer: {
    flex: .3,
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
    marginBottom: "3%",
  },
});
