
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from '../common/ButtonComponent';

import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors';

export default function AddCardBtnComponent(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tarjetas</Text>
      <ButtonComponent
        title="Agregar tarjeta"
        onPress={() => { navigation.navigate('AddCard')}}
        icon="add"
        buttonStyle={styles.btn}
        titleStyle={styles.btnText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    width: 180,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.PalleteBluePrimary,
    marginLeft: 5,
  },
  btnText: {
    color: Colors.PalleteWhite,
    fontSize: 16,
  },
});
