// import { StyleSheet,  View } from "react-native";
// import React from "react";
// import ButtonComponent from "../ButtonComponent";

// export default function AccionsBtnComponent(props) {
//   const { navigation } = props;
//   return (
//     <View style={styles.container}>
//       <ButtonComponent
//         title="Cancelar"
//         buttonStyle={styles.btnC}
//         titleStyle={styles.btnText}
//       />
//       <ButtonComponent
//         title="Continuar"
//         buttonStyle={styles.btn}
//         titleStyle={styles.btnText}
//         navigation={navigation}
//         onPress={() =>  props.navigation.navigate('CartPayment')}
      
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   btn: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     width: 146,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: "#002E60",
//     marginLeft: 5,
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   btnC: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     width: 146,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: "gray",
//     marginLeft: 5,
//   },
// });
import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; // Importa la función useNavigation
import ButtonComponent from "../common/ButtonComponent";

export default function AccionsBtnComponent(props) {
  const navigation = useNavigation(); // Usa la función useNavigation para obtener la navegación
  return (
    <View style={styles.container}>
      <ButtonComponent
        title="Cancelar"
        buttonStyle={styles.btnC}
        titleStyle={styles.btnText}
      />
      <ButtonComponent
        title="Continuar"
        buttonStyle={styles.btn}
        titleStyle={styles.btnText}
        onPress={() => navigation.navigate('CartPayment')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 146,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#002E60",
    marginLeft: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
  btnC: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 146,
    height: 40,
    borderRadius: 10,
    backgroundColor: "gray",
    marginLeft: 5,
  },
});
