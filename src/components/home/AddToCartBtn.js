import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../utils/Colors";
import { addCourseCart } from "../../utils/Axios";
import Splash from "../../screens/sccul/SplashScreen";

export default function AddToCartBtn(props) {
  const { addCourse } = props;
  const [courseCart, setCourseCart] = useState([]);

    const fetchCourse = async () => {
      const fetchedCourse = await addCourseCart(addCourse.id);
      setCourseCart(fetchedCourse);
    };
    
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Icons name="cart-plus" size={24} color={Colors.PalleteWhite} onPress={fetchCourse}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PalleteBlueSecundary,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
