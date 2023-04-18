import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, Input } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function InputComponent({ label, iconName, iconType, onPressIcon, placeholder, maxLength, minLeght, value, secureTextEntry, disabled, onChangeText, errorMessage, keyboardType, multiline }) {
  return (
    <>
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
        multiline={multiline}
        style={{ fontSize: 15 }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        errorMessage={errorMessage}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        inputContainerStyle={[
          styles.inputContainer,
          disabled ? styles.border : styles.borderless,
          multiline ? [{ height: 100 }, { alignItems: "flex-start" }] : null,
        ]}
        autoCapitalize="none"
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  border: {
    backgroundColor: Colors.PalleteGreenBackground,
    borderColor: Colors.PalleteGray,
  },
  borderless: {
    borderColor: Colors.PalleteGray,
  },
});
