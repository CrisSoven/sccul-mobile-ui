import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utils/Colors";

export default function FilterCourse() {
  return (
    <View style={styles.principal}> 
    <View style={styles.box}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>En progreso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Finalizados</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 90,
    height: 60,
    backgroundColor: Colors.PalleteGreenBackground,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: Colors.PalleteBlack,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  principal: {
    marginLeft:2,
    marginRight:1,
  },
})