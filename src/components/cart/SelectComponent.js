// import { StyleSheet, Text, View } from 'react-native'
// import Colors from '../../utils/Colors'

// export default function SelectComponent({}) {

//   return (
//     <View style={styles.container}>
//         <View style={styles.radioButton}></View>
//         <Text >Selecciona Todos los Cursos</Text>
//     </View>

// )}

// const styles = StyleSheet.create({ 
//     container: {
//     marginVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   radioButton: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: Colors.PalleteGray,
//     marginRight: 10
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   optionText: {
//     fontSize: 16,
//   },
// })
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../../utils/Colors';

// export default function SelectComponent({}) {

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
//       <Text>Selecciona Todos los Cursos</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({ 
//   container: {
//     marginVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   radioButton: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: Colors.PalleteGray,
//     marginRight: 10,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   optionText: {
//     fontSize: 16,
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../../utils/Colors';

// export default function SelectComponent() {
//   const [selected, setSelected] = useState(false);

//   const handlePress = () => {
//     setSelected(!selected);
//   };

//   return (
//     <TouchableOpacity style={styles.container} onPress={handlePress}>
//       <View style={[styles.radioButton, selected && styles.radioButtonSelected]} />
//       <Text style={styles.textP}>Selecciona Todos los Cursos</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   radioButton: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: Colors.PalleteGray,
//     marginRight: 10,
//   },
//   radioButtonSelected: {
//     backgroundColor: 'rgba(0, 0, 0, 0.25)'
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   textP:{
//     fontSize: 14,
//     fontWeight: 'bold',
//   }
// });
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../utils/Colors';

export default function SelectComponent({}) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsSelected(!isSelected)}>
      <View style={styles.container}>
        <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
          {isSelected && <View style={styles.radioButtonSelectedCircle} />}
        </View>
        <Text  style={styles.textP} >Selecciona Todos los Cursos</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PalleteGray,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
  },
  textP:{
    fontSize: 14,
    fontWeight: 'bold',
  }
});
