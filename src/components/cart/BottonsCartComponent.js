import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function BottonsCartComponent() {
  return (
    <View  style={styles.container}>
        <TouchableOpacity style={styles.btn}>
         <Text style={styles.btnText}>Pagar</Text>
        </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
    
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 146,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#002E60',
    marginLeft: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
