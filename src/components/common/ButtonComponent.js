import React from 'react';
import Colors from '../../utils/Colors';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default function ButtonComponent({ title, icon, type, btnPrimary, onPress, loading }) {
  return (
      <Button
        title={title}
        loading={loading}
        onPress={onPress}
        titleStyle={btnPrimary ? styles.titlePrimary : styles.titleCancel}
        icon={icon && <Icon name={icon} type={type} size={24} color='white' style={{ marginRight: '8%' }} />}
        buttonStyle={[styles.button, btnPrimary ? styles.btnPrimaryColor: styles.btnCancelColor]}
      />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    width: '90%',
    alignSelf: 'center',
  },
  btnPrimaryColor: {
    backgroundColor: Colors.PalleteBluePrimary,
  },
  btnCancelColor: {
    backgroundColor: Colors.PalleteGray,
  },
  titlePrimary: {
    color: Colors.PalleteWhite,
    fontWeight: 'bold',
  },
  titleCancel: {
    color: Colors.PalleteBlack,
    fontWeight: 'bold',
  },
});
