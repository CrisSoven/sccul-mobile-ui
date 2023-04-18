import { getUserInfo } from '../../utils/Axios';
import Splash from '../../screens/sccul/SplashScreen';
import { StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../../context/auth/authContext';
import React, { useState, useEffect, useContext } from 'react';
import TitleBtnComponent from '../../components/profile/TitleBtnComponent';
import BannerProfileComponent from '../../components/profile/BannerProfileComponent';
import PersonalInfoComponent from '../../components/profile/PersonalInfoFormComponent';

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

  const handleOnLogout = async () => {
    await logout();
  };
  return !user.id ? <Splash /> : (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TitleBtnComponent
        textTitle='Mi perfil'
        titleStyle={styles.title}
        icon='logout'
        textBtn='Cerrar sesión'
        iconType='material-community'
        btnPrimary={true}
        onPress={handleOnLogout}
      />
        <BannerProfileComponent
          user={user}
          setUser={setUser}
          onReload={onReload}
        />
      <PersonalInfoComponent user={user} onReload={onReload} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
