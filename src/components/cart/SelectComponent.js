import { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Colors from "../../utils/Colors";

export default function SelectComponent({}) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsSelected(!isSelected)}>
      <View style={styles.container}>
        <View
          style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
        >
          {isSelected && <View style={styles.radioButtonSelectedCircle} />}
        </View>
        <Text style={styles.textP}>Selecciona Todos los Cursos</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PalleteGray,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.PalleteBluePrimary,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
  },
  textP: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
