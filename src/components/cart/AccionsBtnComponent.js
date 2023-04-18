import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonComponent from '../common/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function AccionsBtnComponent({ btnCancelTitle, btnContinueTitle, onPress, btnPrimary, loading, icon, type }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cancelContainer}>
        <ButtonComponent
          title={btnCancelTitle}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          icon={icon}
          type={type}
          title={btnContinueTitle}
          onPress={onPress}
          loading={loading}
          btnPrimary={btnPrimary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  cancelContainer: {
    width: '40%',
  },
  buttonContainer: {
    width: '60%',
  }
});
