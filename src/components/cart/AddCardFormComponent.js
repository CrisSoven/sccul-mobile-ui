import React from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { Icon } from "react-native-elements";
import { useState } from "react";
import Colors from "../../utils/Colors";

export default function AddCardFormComponent(props) {
  const { card, isEditable } = props;
  console.log(card, isEditable);
  const [showData, setShowData] = useState(false);

  const initialValues = {
    cardName: "",
    cardNumber: "",
    // expirationMonth: new Date().getMonth() + 1,
    // expirationYear: new Date().getFullYear(),
    expirationMonth: "",
    expirationYear: "",
    ccv: "",
  };

  const validationSchema = yup.object().shape({
    cardName: yup.string().required("El nombre de la tarjeta es requerido"),
    cardNumber: yup
      .string()
      .required("El número de la tarjeta es requerido")
      .matches(/^[0-9]{16}$/, "El número de la tarjeta debe tener 16 dígitos"),
    expirationMonth: yup
      .number()
      .min(1, "El mes debe estar entre 1 y 12")
      .max(12, "El mes debe estar entre 1 y 12")
      .required("El mes de expiración es requerido"),
    expirationYear: yup
      .number()
      .min(
        new Date().getFullYear(),
        "El año de expiración debe ser igual o mayor al año actual"
      )
      .required("El año de expiración es requerido"),
    ccv: yup
      .string()
      .matches(/^[0-9]{3}$/, "El CCV debe tener 3 dígitos")
      .required("El código CCV es requerido"),
  });

  const [date, setDate] = useState(
    new Date(initialValues.expirationYear, initialValues.expirationMonth - 1)
  );

  const handleChangeDate = (newDate) => {
    setDate(newDate);
  };

  const handleBlurDate = () => {
    setShowDatePicker(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes enviar los valores del formulario al servidor
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.header}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, }) => (
            <View>
              <View style={styles.spaceBetween}>

                <Text style={styles.label}>Nombre en tarjeta</Text>
                <View style={styles.inputContainer}>
                  <Icon
                    style={styles.icon}
                    name="account-outline"
                    size={24}
                    color="black"
                    type="material-community"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre en tarjeta"
                    onChangeText={handleChange("cardName")}
                    onBlur={handleBlur("cardName")}
                    value={isEditable ? values.cardName : card.ownerName}
                    editable={isEditable}
                  />
                </View>
                {errors.cardName && touched.cardName && (
                  <Text style={styles.error}>{errors.cardName}</Text>
                )}
              </View>
              <View style={styles.spaceBetween}>
                
                <Text style={styles.label}>Número de tarjeta</Text>
                <View style={styles.inputContainer}>
                  <Icon
                    style={styles.icon}
                    name="credit-card"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Numero de tarjeta"
                    onChangeText={handleChange("cardNumber")}
                    onBlur={handleBlur("cardNumber")}
                    value={isEditable ? values.cardNumber : card.cardNumber}
                    keyboardType="numeric"
                    maxLength={16}
                    minLength={16}
                    editable={isEditable}
                  />
                </View>
                {errors.cardNumber && touched.cardNumber && (
                  <Text style={styles.error}>{errors.cardNumber}</Text>
                )}
              </View>

              <View style={styles.row}>
                <View stlye={styles.column}>
                  <Text style={styles.label}>Fecha de expiración</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      style={styles.icon}
                      name="calendar-range"
                      size={24}
                      color="black"
                      type="material-community"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="MM"
                      onChangeText={handleChange("expirationMonth")}
                      onBlur={handleBlur("expirationMonth")}
                      value={isEditable ? values.expirationMonth.toString() : card.cardExpiration}
                      keyboardType="numeric"
                      maxLength={2}
                      editable={isEditable}
                    />
                    <Text>/</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="AAAA"
                      onChangeText={handleChange("expirationYear")}
                      onBlur={handleBlur("expirationYear")}
                      value={values.expirationYear.toString()}
                      keyboardType="numeric"
                      maxLength={4}
                      editable={isEditable}
                    />
                  </View>
                  {errors.expirationMonth && touched.expirationMonth && (
                    <Text style={styles.error}>{errors.expirationMonth}</Text>
                  )}
                  {errors.expirationYear && touched.expirationYear && (
                    <Text style={styles.error}>{errors.expirationYear}</Text>
                  )}
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>CCV</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      style={styles.icon}
                      name="lock-outline"
                      size={24}
                      color="black"
                      type="material-community"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="CCV"
                      onChangeText={handleChange("ccv")}
                      onBlur={handleBlur("ccv")}
                      secureTextEntry={true}
                      value={isEditable ? values.ccv : card.cardCvv}
                      keyboardType="numeric"
                      maxLength={3}
                      minLength={3}
                      editable={isEditable}
                    />
                  </View>
                  {errors.ccv && touched.ccv && (
                    <Text style={styles.error}>{errors.ccv}</Text>
                  )}
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    width: "50%",
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.PalleteGreenBackground,
    backgroundColor: Colors.PalleteGreenBackground,
    borderRadius: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 45,
    paddingRight: "20%",
  },
  error: {
    color: Colors.PalletteRed,
    fontWeight: "bold",
    marginTop: 5,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  spaceBetween: {
    marginBottom: 30,
  },
});
