import React from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Dimensions } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Icon } from "react-native-elements";
import { useState } from "react";
import Colors from "../../utils/Colors";

export default function AddCardFormComponent() {
  const initialValues = {
    cardName: "",
    cardNumber: "",
    expirationMonth: new Date().getMonth() + 1,
    expirationYear: new Date().getFullYear(),
    ccv: "",
  };

  const validationSchema = yup.object().shape({
    cardName: yup.string().required("El nombre de la tarjeta es requerido"),
    cardNumber: yup.string().required("El número de la tarjeta es requerido")
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
  const [showDatePicker, setShowDatePicker] = useState(false);

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
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Text style={styles.label}>Nombre en tarjeta</Text>
              <View style={styles.inputContainer}>
                <Icon
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
                  value={values.cardName}
                />
              </View>
              {errors.cardName && touched.cardName && (
                <Text style={styles.error}>{errors.cardName}</Text>
              )}
              <Text style={styles.label}>Número de tarjeta</Text>
              <View style={styles.inputContainer}>
                <Icon name="credit-card" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  placeholder="Numero de tarjeta"
                  onChangeText={handleChange("cardNumber")}
                  onBlur={handleBlur("cardNumber")}
                  value={values.cardNumber}
                  keyboardType="numeric"
                  maxLength={16}
                  minLength={16}
                />
              </View>
              {errors.cardNumber && touched.cardNumber && (
                <Text style={styles.error}>{errors.cardNumber}</Text>
              )}
              <View style={styles.alingLabel}>
                <Text style={styles.label}>Fecha de expiración</Text>

                <View style={styles.inputContainer}>
                  <Icon
                    name="calendar-range"
                    size={24}
                    color="black"
                    type="material-community"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="MM/AA" z
                    onChangeText={handleChange("expirationMonth")}
                    onBlur={handleBlur("expirationMonth")}
                    value={values.expirationMonth.toString()}
                    keyboardType="numeric"
                    maxLength={2}
                  />
                  <Text>/</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="MM/AA"
                    onChangeText={handleChange("expirationYear")}
                    onBlur={handleBlur("expirationYear")}
                    value={values.expirationYear.toString()}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                </View>
                {errors.expirationMonth && touched.expirationMonth && (
                  <Text style={styles.error}>{errors.expirationMonth}</Text>
                )}
                {errors.expirationYear && touched.expirationYear && (
                  <Text style={styles.error}>{errors.expirationYear}</Text>
                )}

                <Text style={styles.label}>CCV</Text>
                <View style={styles.inputContainer}>
                  <Icon
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
                    value={values.ccv}
                    keyboardType="numeric"
                    maxLength={3}
                    minLength={3}
                  />
                </View>
                {errors.ccv && touched.ccv && (
                  <Text style={styles.error}>{errors.ccv}</Text>
                )}
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
    fontWeight: "700",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.PalleteGreenBackground,
    backgroundColor: Colors.PalleteGreenBackground,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    margin: 4,
  },

  input: {
    flex: 1,
    height: 40,
  },
  error: {
    color: Colors.PalletteRed,
    marginTop: 1,
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
