import { StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import React, { useState } from "react";
import Colors from "../../utils/Colors";

export default function BuyNowBtn() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      buttonStyle={styles.container}
      title={"Comprar ahora"}
      icon={<Icon name="cart-outline" type="material-community" size={24} color={Colors.PalleteWhite} />}
      loading={isLoading}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PalleteBluePrimary,
    width: "100%",
    height: 45,
    borderRadius: 20,
  },
});
