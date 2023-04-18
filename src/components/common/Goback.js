import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Title from './Title'

export default function Goback({ title }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.container}
      >
        <Icon
          name='chevron-left'
          type='material-community'
          size={30}
          style={{ marginLeft: 1 }}
        />
        <Title title={title} goBack={true} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingEnd: '5%',
  },
});
