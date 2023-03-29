import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Colors from '../../utils/Colors';

export default function SaveCardBtnComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guardar tarjeta</Text>
      <Switch
        trackColor={{ false: Colors.PalleteGray, true: Colors.PalleteBlueSecundary }}
        thumbColor={isEnabled ? Colors.PalleteBluePrimary : Colors.PalleteWhite }
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  text: {
    fontSize: 14,
    marginRight: 10,
    fontWeight: '700',
  },
});
