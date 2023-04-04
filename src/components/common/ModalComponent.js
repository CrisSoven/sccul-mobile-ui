import { StyleSheet } from "react-native";
import React from "react";
import { Overlay } from "react-native-elements";
import Color from "../../utils/Colors";

export default function ModalComponent({isVisible, close, children}) {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={close}
      overlayStyle={styles.overlay}
    >
      {children}
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: "90%",
    backgroundColor: Color.PalleteWhite,
    borderRadius: 10,
  },
});
