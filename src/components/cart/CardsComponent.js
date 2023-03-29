import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function CardsComponent({ cards, card, courses, onPress }) {
  const navigation = useNavigation()

  const renderCard = (card) => (
    <TouchableOpacity
      key={card.id}
      style={styles.container}
      card={card}
      onPress={onPress ? () => navigation.navigate(onPress, { cardId: card.id, courses }) : () => navigation.navigate("CreditCards", { cardId: card.id })}
    >
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={card.cardNumber.substr(0, 1) == 4 ? require("../../../assets/img/visa.png") : require("../../../assets/img/masterCard.png")} />
        <Text style={styles.title}>{card.alias}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name='chevron-right' type='material-community' size={30} />
      </View>
    </TouchableOpacity>
  )

  const cardsToRender = card ? [card] : cards

  return (
    <>
      {cardsToRender && cardsToRender.length ? (
        cardsToRender.map(renderCard)
      ) : (
        <View style={styles.noCardsContainer}>
          <Text style={styles.noCardsText}>Aquí verás tus tarjetas registradas</Text>
        </View>
      )}
    </>
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
    width: 60,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
  },
  noCardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 20,
  },
  noCardsText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
    marginRight: 10,
  },
})