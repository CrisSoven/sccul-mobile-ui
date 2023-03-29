import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, Input } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function InputComponent({ label, iconName, iconType, onPressIcon, placeholder, maxLength, minLeght, value, secureTextEntry, disabled, onChangeText, errorMessage, keyboardType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        leftIcon={
          <Icon
            name={iconName}
            type={iconType}
            onPress={onPressIcon}
            size={20}
            color={Colors.PalleteGreen}
          />
        }
        value={value}
        disabled={disabled}
        minLeght={minLeght}
        maxLength={maxLength}
        style={{ fontSize: 15 }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        errorMessage={errorMessage}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        containerStyle={styles.inputContainer}
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  inputContainer: {
    width: "95%",
    marginTop: 5,
    marginBottom: 15,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 10,
  }
});
