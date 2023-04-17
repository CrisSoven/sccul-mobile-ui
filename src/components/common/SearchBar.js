import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Colors from "../../utils/Colors";

export default function SearchBar({ setInputValue, value }) {
  const hanleInputChange = (text) => {
    let lowercaseInput = text.toLowerCase();
    setInputValue(lowercaseInput);
  };
  

  return (
    <>
      <View style={styles.searchBar}>
        <Icon name="search" size={30} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar curso..."
          onChangeText={(text) => hanleInputChange(text)}
          value={value}
          autoCapitalize="none"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PalleteGreenBackground,
    height: 50,
    borderRadius: 64,
    paddingHorizontal: "5%",
    marginHorizontal: "4%",
  },
  searchIcon: {
    marginRight: "5%",
    marginTop: "-2%",
  },
  searchInput: {
    flex: 1,
    color: Colors.PalleteBlack,
  },
});
