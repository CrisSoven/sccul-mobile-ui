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
        <View>
          <Image style={styles.img} source={require('../../../assets/img/landingImage.png')} />
        </View>
        <View style={styles.footer}>
          <ButtonComponent
            title="Iniciar sesión"
            icon="login"
            btnPrimary={true}
            buttonStyle={{ paddingHorizontal: "15%" }}
            onPress={navigateToL}
          />
          <Text style={styles.registerText}>¿No tienes una cuenta?
            <Text style={styles.registerNow} onPress={navigateToR}> Registrate aquí</Text></Text>
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
  footer: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  registerText: {
    color: Colors.PalleteBlack,
    fontSize: 16,
    marginTop: 10,
  },
  registerNow: {
    color: Colors.PalletteRed,
    fontWeight: 'bold',
  },
})