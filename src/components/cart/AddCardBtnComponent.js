
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from '../common/ButtonComponent';

import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors';
import TitleBtnComponent from '../profile/TitleBtnComponent';

export default function AddCardBtnComponent() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("AddCard");
  };
  
  return (
    <TitleBtnComponent
    textTitle="Mis tarjetas"
    titleStyle={styles.title}
    icon="edit"
    textBtn="Editar"
    iconType="material-community"
    btnPrimary={true}
    onPress={navigateTo}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
