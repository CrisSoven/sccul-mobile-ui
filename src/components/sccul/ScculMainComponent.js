import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors';

export default function ScculMainComponent(props) {
  const { text } = props;
  return (
    <>
      <View style={styles.appName}>
        <Image style={styles.img} source={require('../../../assets/img/sccullogo.png')} />
        <Text style={styles.title}>SIOCU</Text>
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  appName: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: Colors.PalleteBluePrimary,
  },
  text: {
    fontSize: 24,
    color: Colors.PalleteBlack,
    textAlign: 'center',
    marginHorizontal: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
})