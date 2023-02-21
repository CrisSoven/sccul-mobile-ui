import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

export default function SearchBar() {
  return (
    <>
      <View style={styles.searchBar}>
        <Icon name="search" size={30} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Buscar curso..." />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d4ddd6",
    height: 50,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginTop: 15,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
});
