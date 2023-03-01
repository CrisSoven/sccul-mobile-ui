// import { StyleSheet, View } from 'react-native'
// import React from 'react'
// import Goback from '../../../components/common/Goback'
// import { ScrollView } from 'react-native-gesture-handler'
// import Line from '../../../components/common/Line'
// import CartResume from '../../../components/cart/CartResume'
// import DetailsPayment from '../../../components/cart/DetailsPayment'
// import AccionsBtnComponent from '../../../components/cart/AccionsBtnComponent'
// import CardsComponent from '../../../components/cart/CardsComponent'
// import ResumePrice from '../../../components/cart/ResumePrice'

// export default function CartPaymentScreen(props) {
//   return (

//     <ScrollView contentContainerStyle={styles.header}>
//     <View>
//         <Goback title='Confirmar compra' />
//         <ResumePrice/>
//         <CardsComponent/>
//         <Line/>
//         <CartResume/>
//         <Line/>
//         <DetailsPayment/>
//         <AccionsBtnComponent
//         btnCancelTitle="Cancelar" // Aquí pasamos el título del botón Cancelar
//         btnContinueTitle="Finalizar  Compra" // Aquí pasamos el título del botón Continuar
//         />
//     </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//     header: {
//         paddingTop: 10,
//         paddingHorizontal: 10,
//         paddingVertical:5,
//         width:360,
//         height:660
//         },
//     price: {
//         backgroundColor:'white'
//     },

// })

import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import Goback from '../../../components/common/Goback';
import { ScrollView } from 'react-native-gesture-handler';
import Line from '../../../components/common/Line';
import CartResume from '../../../components/cart/CartResume';
import DetailsPayment from '../../../components/cart/DetailsPayment';
import AccionsBtnComponent from '../../../components/cart/AccionsBtnComponent';
import CardsComponent from '../../../components/cart/CardsComponent';
import ResumePrice from '../../../components/cart/ResumePrice';

const windowWidth = Dimensions.get('window').width;

export default function CartPaymentScreen(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Goback title="Confirmar compra" />
        <ResumePrice />
        <CardsComponent />
        <Line />
        <CartResume />
        <Line />
        <DetailsPayment />
        <AccionsBtnComponent
          btnCancelTitle="Cancelar"
          btnContinueTitle="Finalizar Compra"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    width: windowWidth,

  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    maxWidth: 400,
    alignSelf: 'center',
    width: windowWidth,
  },
});
