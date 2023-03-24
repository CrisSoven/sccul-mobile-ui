import { StyleSheet, View } from "react-native";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import { useNavigation } from "@react-navigation/core";

export default function AccionsBtnComponent(props) {
  const { btnCancelTitle, btnContinueTitle, action, btnPrimary, loading } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonComponent
        title={btnCancelTitle}
        onPress={() => navigation.goBack()}
      />
      <ButtonComponent
        title={btnContinueTitle}
        onPress={action}
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
    width: "50%",
    alignSelf: "center",
  }
});
