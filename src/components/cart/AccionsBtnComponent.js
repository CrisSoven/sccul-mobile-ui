import { StyleSheet, View } from "react-native";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import { useNavigation } from "@react-navigation/core";

export default function AccionsBtnComponent(props) {
  const { btnCancelTitle, btnContinueTitle, buttonStyle, onPress, btnPrimary, loading, icon, type } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonComponent
        title={btnCancelTitle}
        onPress={() => navigation.goBack()}
      />
      <ButtonComponent
        icon={icon}
        type={type}
        buttonStyle={buttonStyle}
        title={btnContinueTitle}
        onPress={onPress}
        loading={loading}
        btnPrimary={btnPrimary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  }
});
