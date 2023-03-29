import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Comments from "../../../components/common/Comments";
import Goback from "../../../components/common/Goback";
import AddToCartBtn from "../../../components/home/AddToCartBtn";
import ButtonComponent from "../../../components/common/ButtonComponent";
import BuyNowBtn from "../../../components/home/BuyNowBtn";
import Colors from "../../../utils/Colors";
import { getCourseById } from "../../../utils/Axios";
import Splash from "../../sccul/SplashScreen";
import ContentComponent from "../../../components/common/ContentComponent";

export default function CoursesDetailsScreen({ route }) {
  const [course, setCourse] = useState({});
  const { courseId } = route.params;

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedCourse = await getCourseById(courseId);
      setCourse(fetchedCourse);
    };
    fetchCourse();
  }, [courseId]);

  const calcPrice = () => {
    if (course.discount > 0) {
      return {
        price: course.price - course.price * (course.discount / 100),
        originalPrice: course.price,
      };
    } else {
      return course.price;
    }
  };

  const updatedCourse = calcPrice();

  return !course.id ? (
    <Splash />
  ) : (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Goback title={course.name} />
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.averageContainer}>
        <Text style={styles.text}>{course.average}</Text>
        <Rating
          startingValue={course.average}
          fractions={1}
          imageSize={24}
          readonly
          ratingColor={Colors.PalleteYellow}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 18 }}>
          ({course.comments.length ? course.comments.length : 0})
        </Text>
      </View>
      {course.discount > 0 && (
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              marginTop: "4%",
            }}
          >
            <Text
              style={{
                ...styles.price,
                color: Colors.PalletteRed,
                fontWeight: "bold",
                marginRight: "2%",
              }}
            >
              ${updatedCourse.price} MXN
            </Text>
            <Text style={styles.discount}>-{course.discount}%</Text>
          </View>
          <Text
            style={{
              ...styles.price,
              fontSize: 20,
              textDecorationLine: "line-through",
              color: Colors.PalleteBlack,
            }}
          >
            ${updatedCourse.originalPrice} MXN
          </Text>
        </View>
      )}
      {(course.discount == 0 || course.discount == null) && (
        <Text style={styles.price}>${course.price} MXN</Text>
      )}
      <Text style={styles.text}>{course.description}</Text>
      <View>
        <TouchableOpacity style={styles.categoryContainer} disabled={true}>
          <Text style={styles.categoryText} numberOfLines={1}>
            {course.category.name}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btns}>
        <AddToCartBtn addCourse={course} loading={true} />
        <ButtonComponent
          buttonStyle={{ paddingHorizontal: "20%" }}
          title="Comprar ahora"
          icon="cart-outline"
          type="material-community"
          btnPrimary={true}
          onPress={() => console.log("Comprar ahora")}
        />
      </View>
      <ContentComponent course={course} />
      <Comments comments={course.comments} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.PalleteWhite,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: 230,
    borderRadius: 16,
    marginBottom: 20,
    resizeMode: "cover",
    backgroundColor: Colors.PalleteGray,
  },
  averageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 35,
    color: Colors.PalletteRed,
    marginBottom: 10,
  },
  discount: {
    color: Colors.PalletteRed,
    fontSize: 24,
    marginBottom: "2.5%",
    marginLeft: "2.5%",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
  },
  categoryContainer: {
    marginVertical: 20,
    width: "45%",
    height: 40,
    backgroundColor: Colors.PalleteGreenBackground,
    justifyContent: "center",
    borderRadius: 16,
  },
  categoryText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
});
