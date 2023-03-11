import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import Colors from '../../utils/Colors';

export default function CardsComponent(props) {
  const { onPress } = props;
  console.log(onPress);
  return (
    <TouchableOpacity style={styles.container}
      onPress={onPress}
    >
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../../../assets/img/Visa_Logo.png")} />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
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