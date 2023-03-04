import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";

export default function PersonalInfoFormComponent() {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Nombre(s)</Text>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Icon
            style={styles.icon}
            name="person-outline"
            type="MaterialIcons"
            size={25}
          />

          <TextInput style={styles.input} value="Cristopher" editable={false} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Apellido paterno</Text>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Icon
                style={styles.icon}
                name="person-outline"
                type="MaterialIcons"
                size={25}
              />

              <TextInput style={styles.input} value="Soto" editable={false} />
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>Apellido materno</Text>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Icon
                style={styles.icon}
                name="person-outline"
                type="MaterialIcons"
                size={25}
              />

              <TextInput
                style={styles.input}
                value="Ventura"
                editable={false}
              />
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.label}>Teléfono</Text>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Icon
            style={styles.icon}
            name="phone-android"
            type="MaterialIcons"
            size={20}
          />

          <TextInput style={styles.input} value="7775550627" editable={false} />
        </View>
      </View>

      <Text style={styles.label}>Correo eléctronico</Text>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Icon
            style={styles.icon}
            name="mail-outline"
            type="MaterialIcons"
            size={25}
          />

          <TextInput
            style={styles.input}
            value="cristopher.sotoventura@gmail.com"
            editable={false}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.circleKey}>
          <Icon
            style={styles.icon}
            name="vpn-key"
            type="MaterialIcons"
            size={20}
          />
        </View>
        <Text style={styles.label}>Cambiar contraseña</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 15,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  rightContainer: {
    marginRight: 10,
  },
  icon: {
    paddingRight: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
  },
  column: {
    flexDirection: "column",
    width: "50%",
  },
  circleKey: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.PalleteGreenBackground,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  form: {
    marginBottom: 20,
  },
});
