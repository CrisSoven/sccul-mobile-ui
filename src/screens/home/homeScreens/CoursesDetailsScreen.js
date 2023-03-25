import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Comments from "../../../components/common/Comments";
import Goback from "../../../components/common/Goback";
import Sections from "../../../components/common/Sections";
import AddToCartBtn from "../../../components/home/AddToCartBtn";
import BuyNowBtn from "../../../components/home/BuyNowBtn";
import Colors from "../../../utils/Colors";
import { getCourseById } from "../../../utils/Axios";
import Splash from "../../sccul/SplashScreen";

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

  if (!course.id) {
    return <Splash />;
  }

  const caps = course.sections ? course.sections.length : 0;

  const totalDuration = course.sections.reduce((acc, sections) => {
    const [minutes, seconds] = sections.duration.split(":").map(Number);
    const sectionDuration = minutes * 60 + seconds;
    return acc + sectionDuration;
  }, 0);

  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Goback title={course.name} />
        <Image source={{ uri: course.image }} style={styles.image} />

        <View style={styles.infoContainer}>
          <View style={styles.averageContainer}>
            <Text style={styles.average}>{course.average}</Text>
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
          <Text style={styles.price}>${course.price} MX</Text>
          <Text style={styles.description}>{course.description}</Text>
          <View>
            <TouchableOpacity style={styles.categoryContainer} disabled={true}>
              <Text style={styles.categoryText} numberOfLines={1}>
                {course.category.name}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.addToCartAndBuyNowContainer}>
            <View style={styles.addToCartContainer}>
              <AddToCartBtn addCourse={course} loading={true} />
            </View>
            <View style={styles.buyNowContainer}>
              <BuyNowBtn />
            </View>
          </View>

          <Text style={styles.contentOfCourse}>Contenido del curso</Text>
          <View style={styles.capsAndDurationContainer}>
            <Text style={styles.totalCaps}>{caps} Capitulos - </Text>
            <Text style={styles.totalDuration}>
              {hours}h {minutes}min
            </Text>
          </View>
          <View style={styles.sectionsContainer}>
            <Sections sections={course.sections} />
          </View>
          <Text style={styles.commentsTitle}>Comentarios</Text>
          <View style={styles.commentsContainer}>
            <Comments comments={course.comments} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PalleteWhite,
  },
  image: {
    width: "90%",
    height: 230,
    marginHorizontal: "5%",
    borderRadius: 16,
    backgroundColor: Colors.PalleteGray,
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  averageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.PalletteRed,
    marginBottom: 10,
  },
  average: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    color: Colors.PalletteRed,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
  categoryContainer: {
    marginTop: "4%",
    width: "45%",
    height: 40,
    backgroundColor: Colors.PalleteGreenBackground,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 16,
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
  commentsContainer: {
    marginHorizontal: "1%",
  },
  commentsTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: "5%",
    marginBottom: "3%",
  },
});
