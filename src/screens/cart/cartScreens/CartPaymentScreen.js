
// import { StyleSheet, View, Dimensions } from 'react-native';
// import React from 'react';
// import Goback from '../../../components/common/Goback';
// import { ScrollView } from 'react-native-gesture-handler';
// import Line from '../../../components/common/Line';
// import CartResume from '../../../components/cart/CartResume';
// import DetailsPayment from '../../../components/cart/DetailsPayment';
// import AccionsBtnComponent from '../../../components/cart/AccionsBtnComponent';
// import CardsComponent from '../../../components/cart/CardsComponent';
// import ResumePrice from '../../../components/cart/ResumePrice';
// import { useNavigation } from "@react-navigation/native"; 


// const windowWidth = Dimensions.get('window').width;

// export default function CartPaymentScreen(props) {
//   const navigation = useNavigation(); 
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Goback title="Confirmar compra" />
//         <ResumePrice />
//         <CardsComponent />
//         <Line />
//         <CartResume />
//         <Line />
//         <DetailsPayment />
//         <AccionsBtnComponent
//           btnCancelTitle="Cancelar"
//           btnContinueTitle="Finalizar Compra"
//           action={() => navigation.navigate('Successful')}
        

//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,

//     width: windowWidth,

//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     maxWidth: 400,
//     alignSelf: 'center',
//     width: windowWidth,
//   },
// });

import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Goback from '../../../components/common/Goback';
import { ScrollView } from 'react-native-gesture-handler';
import Line from '../../../components/common/Line';
import CartResume from '../../../components/cart/CartResume';
import DetailsPayment from '../../../components/cart/DetailsPayment';
import AccionsBtnComponent from '../../../components/cart/AccionsBtnComponent';
import CardsComponent from '../../../components/cart/CardsComponent';
import ResumePrice from '../../../components/cart/ResumePrice';
import { useNavigation } from "@react-navigation/native"; 


const windowWidth = Dimensions.get('window').width;

export default function CartPaymentScreen(props) {
  const navigation = useNavigation();
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false); // Aquí asumo que tienes una variable que indica si la compra fue exitosa o no
  const handleAction = () => {
    if (!isPurchaseSuccessful) {
      navigation.navigate('Successful');
    } else {
      navigation.navigate('Fail');
    }
  };
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
          action={handleAction}
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
