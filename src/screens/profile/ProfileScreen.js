import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import BannerProfileComponent from "../../components/profile/BannerProfileComponent";
import PocketComponent from "../../components/profile/PocketComponent";
import Line from "../../components/common/Line";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import PersonalInfoComponent from "../../components/profile/PersonalInfoFormComponent";
import { useNavigation } from "@react-navigation/native";
import { deleteToken, getUserInfo } from "../../utils/Axios";
import Splash from "../../screens/sccul/SplashScreen";
import { AuthContext } from "../../context/auth/authContext";

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [reload, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserInfo();
      setUser(fetchedUser);
    };
    fetchUser();
  }, [reload]);
  const navigation = useNavigation();
  const navigateTo = () => navigation.navigate("Pockets");
  const handleOnLogout = async () => {
    await logout();
    // navigation.navigate('HomeStack', { screen: 'Landings' });
  };
  return !user.id ? (
    <Splash />
  ) : (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TitleBtnComponent
        textTitle="Mi perfil"
        titleStyle={styles.title}
        icon="logout"
        textBtn="Cerrar sesión"
        iconType="material-community"
        btnPrimary={true}
        onPress={handleOnLogout}
      />
      <View>
        <BannerProfileComponent
          user={user}
          setUser={setUser}
          onReload={onReload}
        />
        <PocketComponent onPress={navigateTo} />
        <Line />
      </View>
      <PersonalInfoComponent user={user} onReload={onReload} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
