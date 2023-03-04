import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import Colors from "../../utils/Colors";

export default function TitleBtnComponent(props) {
  const { textTitle, titleStyle, icon, textBtn, iconType, onPress } = props;
  return (
    <View style={styles.header}>
      <View style={styles.column}>
        <Text style={titleStyle}>{textTitle}</Text>
      </View>
      <View style={styles.column}>
        <ButtonComponent
          icon={icon}
          title={textBtn}
          type={iconType}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
