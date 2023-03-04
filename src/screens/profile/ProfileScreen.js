import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BannerProfileComponent from "../../components/profile/BannerProfileComponent";
import PocketComponent from "../../components/profile/PocketComponent";
import Line from "../../components/common/Line";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import Colors from "../../utils/Colors";
import PersonalInfoComponent from "../../components/profile/PersonalInfoFormComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ProfileScreen() {
  return (
    <KeyboardAwareScrollView>
      <TitleBtnComponent
        textTitle="Mi perfil"
        titleStyle={styles.title}
        icon="logout"
        textBtn="Cerrar sesión"
        iconType="material-community"
      />

      <View>
        <BannerProfileComponent />
        <PocketComponent />
        <Line />
      </View>

      <TitleBtnComponent
        textTitle="Información personal"
        titleStyle={styles.subtitle}
        icon="edit"
        textBtn="Editar"
        iconType="material-community"
      />

      <PersonalInfoComponent />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PalleteGray,
  },
});
