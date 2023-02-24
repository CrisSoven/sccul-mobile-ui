import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function AddCardComponenet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tarjetas</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon
          name="add"
          size={18}
          color="white"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonTitle}>Agregar tarjeta</Text>
      </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    borderRadius:16
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
