import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import BannerProfileComponent from "../../components/profile/BannerProfileComponent";
import PocketComponent from "../../components/profile/PocketComponent";
import Line from "../../components/common/Line";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import Colors from "../../utils/Colors";
import PersonalInfoComponent from "../../components/profile/PersonalInfoFormComponent";
import { useNavigation } from "@react-navigation/native";
import { getUserInfo } from "../../utils/Axios";
import Splash from "../../screens/sccul/SplashScreen";

export default function ProfileScreen() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserInfo();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("Pockets");
  };
  const logout = () => {
    navigation.navigate("Logins");
  };
  return (
    !user.id ?
      <Splash /> : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <TitleBtnComponent
            textTitle="Mi perfil"
            titleStyle={styles.title}
            icon="logout"
            textBtn="Cerrar sesión"
            iconType="material-community"
            btnPrimary={true}
            onPress={logout}
          />

      <View>
        <BannerProfileComponent user={user} />
        <PocketComponent onPress={navigateTo} />
        <Line/>
      </View>

          <TitleBtnComponent
            textTitle="Información personal"
            titleStyle={styles.subtitle}
            icon="pencil"
            textBtn="Editar"
            iconType="material-community"
            btnPrimary={true}
          />

          <PersonalInfoComponent user={user} isEditable={false} />
        </ScrollView>
      )
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
