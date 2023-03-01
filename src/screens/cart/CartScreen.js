 import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../../components/common/SearchBar';
import SelectComponent from '../../components/cart/SelectComponent';
import PriceTotalCartComponnet from '../../components/cart/PriceTotalCartComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors';

export default function CartScreen(props) {
  const { navigation } = props;
  const cartTitle = 'Carrito de compras';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>{cartTitle}</Text>
      </View>
      <SearchBar />
      <SelectComponent />
      <View style={styles.footer}>
        <PriceTotalCartComponnet
          priceText={'$' + 599.75 + 'mx'}
          containerStyle={styles.priceContainer}
          priceStyle={styles.price}
        />
        <ButtonComponent
          title="Pagar"
          navigation={navigation}
          onPress={() => navigation.navigate('PaymentMethod')}
          buttonStyle={styles.btn}
          titleStyle={styles.btnText}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 146,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.PalleteBluePrimary,
    marginLeft: 5,
  },
  btnText: {
    color: Colors.PalleteWhite,
    fontSize: 16,
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.PalleteGreenBackground,
  },
  price: {
    color: Colors.PalleteBlack,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
