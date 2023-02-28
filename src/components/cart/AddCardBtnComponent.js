import { StyleSheet, Text, View} from 'react-native';
import ButtonComponent from '../common/ButtonComponent';

import { useNavigation } from '@react-navigation/native';

export default function AddCardBtnComponent(props) {
  const {  } = props;
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
  alignItems: 'center',
  justifyContent: 'flex-start',
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
