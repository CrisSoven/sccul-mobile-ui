import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ScculMainComponent from "../../components/sccul/ScculMainComponent";
import { useNavigation } from '@react-navigation/native';
import ScculRegisterFormComponent from '../../components/sccul/ScculRegisterFormComponent';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen() {
  const navigation = useNavigation();
  const navigateToL = () => {
    navigation.navigate('Logins');
  }
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <ScculMainComponent text="Emprende un nuevo viaje al conocimiento" />
        <ScculRegisterFormComponent />
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