import React from 'react'
import { Image, StyleSheet } from 'react-native'
import ScculMainComponent from '../../components/sccul/ScculMainComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScculLoginFormComponent from '../../components/sccul/ScculLoginFormComponent';

export default function LoginScreen() {
  return (
    <KeyboardAwareScrollView>
      <ScculMainComponent text='Reanuda tu aprendizaje' />
      <Image style={styles.img} source={require('../../../assets/img/loginImage.png')} />
      <ScculLoginFormComponent />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
})