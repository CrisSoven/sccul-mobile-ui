
// import { StyleSheet, View } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native"; 
// import ButtonComponent from "../common/ButtonComponent";
// import Colors from "../../utils/Colors";
// export default function AccionsBtnComponent(props) {
//   const navigation = useNavigation(); 
//   return (
//     <View style={styles.container}>
//       <ButtonComponent
//         title={props.btnCancelTitle}
//         buttonStyle={styles.btnC}
//         titleStyle={styles.btnText}
//       />
//       <ButtonComponent
//          title={props.btnContinueTitle}
//         buttonStyle={[styles.btn, styles.btnlarge ]}
//         titleStyle={styles.btnText}
//         onPress={() => navigation.navigate('CartPayment')}
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
//     backgroundColor: Colors.PalleteBluePrimary,
//     marginLeft: 5,
//   },
//   btnText: {
//     color: Colors.PalleteWhite,
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
//   btnlarge: {
//     width: 196,
//     height: 40,
//   },
// });



import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; 
import ButtonComponent from "../common/ButtonComponent";
import Colors from "../../utils/Colors";

export default function AccionsBtnComponent(props) {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <ButtonComponent
        title={props.btnCancelTitle}
        buttonStyle={styles.btnC}
        titleStyle={styles.btnText}
      />
      <ButtonComponent
        title={props.btnContinueTitle}
        buttonStyle={[styles.btn, styles.btnlarge ]}
        titleStyle={styles.btnText}
        onPress={props.action}
        btnPrimary={props.btnPrimary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
  }
});
