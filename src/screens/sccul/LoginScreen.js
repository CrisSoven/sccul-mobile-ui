import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ScculMainComponent from "../../components/sccul/ScculMainComponent";
import { useNavigation } from '@react-navigation/native';
import ScculLoginFormComponent from '../../components/sccul/ScculLoginFormComponent';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <ScculMainComponent text="Reanuda tu aprendizaje" />
        <Image style={styles.img} source={require('../../../assets/img/loginImage.png')} />
        <ScculLoginFormComponent />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
})