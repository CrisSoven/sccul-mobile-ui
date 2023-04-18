import React from 'react'
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../../components/common/ButtonComponent';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import ScculMainComponent from '../../components/sccul/ScculMainComponent';

export default function LandingScreen() {
  const navigation = useNavigation();
  const handleNavigateLogin = () => {
    navigation.navigate('Logins');
  }
  const handleNavigateRegister = () => {
    navigation.navigate('Registers');
  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScculMainComponent
          text='Aprende sin límites a tu propio tiempo y espacio'
        />
        <Image style={styles.img} source={require('../../../assets/img/landingImage.png')} />
      </ScrollView>
      <View style={styles.footer}>
        <ButtonComponent
          title='Iniciar sesión'
          icon='login'
          btnPrimary={true}
          onPress={handleNavigateLogin}
        />
        <View style={styles.textContainer}>
          <Text>¿No tienes una cuenta? </Text>
          <Text style={styles.registerNow} onPress={handleNavigateRegister}>Registrate aquí</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    width: '100%',
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerNow: {
    color: Colors.PalletteRed,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
})
