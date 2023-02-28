import Colors from "../../utils/Colors";
import { Icon } from 'react-native-elements';
import React from 'react';
import { StyleSheet,  TouchableOpacity, Text } from 'react-native';

export default function ButtonComponent(props) {
  const { onPress, title, containerStyle, textStyle, buttonStyle, titleStyle, icon, iconStyle } = props;

  return (
    <TouchableOpacity 
      style={[styles.button, containerStyle, buttonStyle]} 
      onPress={onPress}
    >
      {icon && (
        <Icon
          name={icon}
          size={24}
          color="white"
          style={[styles.icon, iconStyle]}
        />
      )}
      <Text style={[styles.title, textStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: Colors.PalleteBlack,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.PalleteWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});
