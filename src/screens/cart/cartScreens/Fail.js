import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import ButtonComponent from "../../../components/common/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../utils/Colors";
import { Icon, Image } from "react-native-elements";
import TitleBtnComponent from "../../../components/profile/TitleBtnComponent";

export default function PurchaseConfirmationScreen() {
  const navigation = useNavigation();
  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.rowSup}>
          <Icon
            name="close-circle-outline"
            type="material-community"
            size={200}
            color={Colors.PalleteWhite}
            containerStyle={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%",
            }}
          />
          <Text style={styles.title}>Algo salió mal</Text>
          <Text style={styles.textP}>
          Revisa los datos de la tarjeta o selecciona otro método e intenta de nuevo
          </Text>
        </View>
        <View style={styles.rowInf}>
          <Image
            source={require("../../../../assets/img/boxS.png")}
            style={styles.svg}
          />
          <ButtonComponent
            title="Hecho"
             onPress={() => navigation.navigate("Home")}
            style={styles.btn}

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
    backgroundColor: Colors.PalletteRed,
    height: 350,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  rowInf: {
    backgroundColor: Colors.PalleteWhite,
    height: 400,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.PalleteWhite,
    textAlign: "center",
    marginBottom: 10,
  },
  textP: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.PalleteWhite,
    textAlign: "center",
    marginBottom: 50,
  },
  btn: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteBluePrimary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 120,
  },
  svg: {
    width: "100%",
     height: 120,
    resizeMode: "contain",
  },
});
