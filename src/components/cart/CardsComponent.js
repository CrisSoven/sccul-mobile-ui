import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors';

export default function CardsComponent() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}
    onPress={() => navigation.navigate('CartPayment')} 
    >
      <View style={styles.leftContainer}>
        <Image style={styles.image}  source={require("../../../assets/img/Visa_Logo.png")} />
        <Text style={styles.title}>Jonathan Abed Ramirez</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name='chevron-right' type='material-community' size={30} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: 340,
    height: 65,
    borderRadius: 10,
    backgroundColor: Colors.PalleteGreenBackground,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightContainer: {
    marginRight: 10,
  },
  image: {
    width: 61,
    height: 19,
    marginRight: 10,
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
  },
})
