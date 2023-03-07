import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utils/Colors";
import Filter from "../common/Filter";
import { useState } from "react";

export default function FilterCourse() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleFilterPress = () => {
    setModalVisible(true);
  }
  

  return (
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
        <TouchableOpacity >
        <Filter
        onPress={handleFilterPress}
        />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
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
    borderRadius: 5,
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

  
})