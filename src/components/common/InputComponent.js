import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function InputComponent(props) {
  const { label, value, placeholder, iconName, iconType, iconSize, secureTextEntry, onChangeText, errorMessage, editable, onPressIcon, onPress } = props;
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Icon
            style={styles.icon}
            name={iconName}
            type={iconType}
            size={iconSize}
            editable={editable}
            onPress={onPressIcon}
          />
          <TextInput style={styles.input} value={value} placeholder={placeholder} secureTextEntry={secureTextEntry} editable={editable} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 15,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 20,
  },
  input: {
    width: "100%",
    marginTop: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  icon: {
    paddingRight: 10,
  },
  input:{
    width: "85%",
  }
});
