import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import SelectComponent from '../components/cart/SelectComponent';
import PriceTotalCartComponnet from '../components/cart/PriceTotalCartComponnet';
import ButtonComponent from '../components/ButtonComponent';

export default function CartScreen(props) {
  const { navigation } = props;
  const cartTitle = 'Carrito de compras'

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{cartTitle}</Text>
      </View>
      <SearchBar/>
      <SelectComponent/>
      <View style={styles.footer}>
        <PriceTotalCartComponnet/>
       
        <ButtonComponent
          title="Pagar"
          navigation={navigation}
          onPress={() => navigation.navigate('PaymentMethod')}
          buttonStyle={styles.btn}
          titleStyle={styles.btnText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
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
    backgroundColor: '#002E60',
    marginLeft: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
