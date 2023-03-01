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
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? Colors.PalleteBluePrimary : '#f4f3f4'}
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
    alignItems: 'center',
    // marginTop: 20,
    // marginHorizontal: 30,
    
  },
  text: {
    fontSize: 15,
    marginRight: 60,
    fontWeight: 'bold',
  },
});
