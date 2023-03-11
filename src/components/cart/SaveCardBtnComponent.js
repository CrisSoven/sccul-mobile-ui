import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Colors from '../../utils/Colors';

export default function SaveCardBtnComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guardar tarjeta para futuros pagos</Text>
      <Switch
        trackColor={{ false: Colors.PalleteGray, true: Colors.PalleteBlueSecundary }}
        thumbColor={isEnabled ? Colors.PalleteBluePrimary : Colors.PalleteWhite }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    marginRight: 15,
    fontWeight: 'bold',
  },
});
