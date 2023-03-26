import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, Input } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function InputComponent(props) {
  const { label, iconName, iconType, onPressIcon, placeholder, value, secureTextEntry, disabled, onChangeText, errorMessage, keyboardType } = props;
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        leftIcon={
          <Icon
            name={iconName}
            type={iconType}
            onPress={onPressIcon}
          />
        }
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        disabled={disabled}
        onChangeText={onChangeText}
        errorMessage={errorMessage}
        keyboardType={keyboardType}
        containerStyle={styles.inputContainer}
        inputContainerStyle = {{borderBottomWidth: 0}}
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
