import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from '../../utils/Colors';
import ButtonComponent from '../../components/common/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import ScculMainComponent from "../../components/sccul/ScculMainComponent";

export default function LandingScreen() {
  const navigation = useNavigation();
  const navigateToL = () => {
    navigation.navigate('Logins');
  }
  const navigateToR = () => {
    navigation.navigate('Registers');
  }
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScculMainComponent
          text="Aprende sin límites a tu propio tiempo y espacio"
        />
        <Image style={styles.img} source={require('../../../assets/img/landingImage.png')} />
        <View style={styles.btnContainer}>
          <ButtonComponent
            title="Iniciar sesión"
            icon="login"
            btnPrimary={true}
            onPress={navigateToL}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 10 }}>¿No tienes una cuenta?
            <Text style={styles.registerNow} onPress={navigateToR}> Registrate aquí</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    resizeMode: 'contain',
  },
  btnContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  registerNow: {
    color: Colors.PalletteRed,
    fontWeight: 'bold',
  },
})