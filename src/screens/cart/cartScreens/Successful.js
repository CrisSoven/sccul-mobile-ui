import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import ButtonComponent from "../../../components/common/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../utils/Colors";
import { Icon, Image } from "react-native-elements";

export default function PurchaseConfirmationScreen() {
  const navigation = useNavigation();
  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.rowSup}>
          <Icon
            name="checkbox-marked-circle-outline"
            type="material-community"
            size={200}
            color={Colors.PalleteWhite}
          />
          <Text style={styles.title}>Gracias por tu compra!</Text>
          <Text style={styles.textP}>
            Aprender es la mejor inversión que puedes hacer en ti mismo
          </Text>
        </View>
        <View style={styles.rowInf}>
          <Image
            source={require("../../../../assets/img/boxS.png")}
            style={styles.svg}
          />
          <ButtonComponent
            title="Hecho"
            btnPrimary={true}
            onPress={() =>
              navigation.navigate("HomeS")
              // console.log("presionado")
            }
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSup: {
    position: "relative",
    backgroundColor: Colors.PalleteGreen,
    height: "55%",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    marginBottom: "10%",
    justifyContent: "center",
  },
  rowInf: {
    backgroundColor: Colors.PalleteWhite,
    height: "20%",
    bottom: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.PalleteWhite,
    textAlign: "center",
    marginBottom: 20,
  },
  textP: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.PalleteWhite,
    textAlign: "center",
  },
  svg: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
});