import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-elements";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../utils/Colors";
import { addCourseCart } from "../../utils/Axios";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function AddToCartBtn(props) {
  const { addCourse } = props;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [courseCart, setCourseCart] = useState([]);

  const renderToast = (type, message) => {
    console.log(type, message);
    Toast.show({
      type: type,
      position: "bottom",
      text1: message,
      text2: "Presiona aquí para verlo tu carrito",
      visibilityTime: 5000,
      bottomOffset: 80,
      onPress: () => navigation.navigate(),
    });
  };

  const fetchCourse = async () => {
    setIsLoading(true);
    const fetchedCourse = await addCourseCart(addCourse.id);
    setCourseCart(fetchedCourse);

    if (fetchedCourse === "Ya está inscrito en este curso") {
      renderToast("error", "¡Ya agregaste este curso!");
    } else {
      renderToast("success", `¡Agregaste ${addCourse.name}!`);
    }

    setIsLoading(false);
  };

  return (
    <View>
      <Button
        buttonStyle={styles.container}
        icon={<Icons name="cart-plus" size={24} color={Colors.PalleteWhite} />}
        onPress={fetchCourse}
        loading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PalleteBlueSecundary,
    width: "100%",
    height: 50,
    borderRadius: 10,
  },
});