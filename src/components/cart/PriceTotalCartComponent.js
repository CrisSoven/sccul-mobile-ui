
import { Text, View } from 'react-native';
import React from 'react';

export default function PriceTotalCartComponnet({ containerStyle, priceStyle, priceText }) {
  return (
    <View style={containerStyle}>
      <Text style={priceStyle}>{priceText}</Text>
    </View>
  );
}
