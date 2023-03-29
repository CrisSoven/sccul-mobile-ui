import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Input from "../common/InputComponent";
import AccionsBtnComponent from "./AccionsBtnComponent";
import SaveCardBtnComponent from "../cart/SaveCardBtnComponent";
import { addBankCard } from "../../utils/Axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function AddCardFormComponent({ card, isEditable }) {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      alias : card ? card.alias : "",
      cardName: card ? card.cardName : "",
      cardNumber: card ? card.cardNumber : "",
      expirationMonth: card ? card.expirationMonth : "",
      expirationYear: card ? card.expirationYear : "",
      CardCvv: card ? card.CardCvv : "",
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required("El nombre de la tarjeta es requerido"),
      cardNumber: Yup.string()
        .required("El número de la tarjeta es requerido")
        .matches(/^[0-9]{16}$/, "El número de la tarjeta debe tener 16 dígitos"),
      expirationMonth: Yup.number()
        .min(1, "El mes debe ser entre 1 y 12")
        .max(12, "El mes debe ser entre 1 y 12")
        .required("Mes requerido"),
      expirationYear: Yup.number()
        .min(
          new Date().getFullYear(),
          "El año debe ser igual o mayor al año actual"
        )
        .required("Año requerido"),
      CardCvv: Yup.string()
        .matches(/^[0-9]{3}$/, "El CCV debe tener 3 dígitos")
        .required("CCV requerido"),
    }),
    validateOnChange: false,
    onSubmit: async ({cardName, alias, cardNumber, CardCvv, expirationMonth, expirationYear}) => {
      try {
        const year = expirationYear % 100;
        const cardExpiration = `${expirationMonth < 10 ? "0" : ""}${expirationMonth}/${year}`;
        const response = await addBankCard(cardName, alias, cardNumber, cardExpiration, CardCvv);
        response ? Toast.show({
          type: "success",
          position: "bottom",
          text1: "¡Tarjeta registrada correctamente!",
        }) :
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "¡La tarjeta ya se encuentra registrada!",
        });
      } catch (error) {
        
      }
    },
  });
  return (
    <KeyboardAvoidingView>
      <View style={styles.header}>
      <Input
          label="Alias de la tarjeta"
          placeholder="Alias de la tarjeta"
          iconName="account-outline"
          iconType="material-community"
          // value={isEditable ? values.cardName : card.cardName}
          editable={isEditable}
          onChangeText={(text) => formik.setFieldValue("alias", text)}
        />
        <Input
          label="Nombre en tarjeta"
          placeholder="Nombre en tarjeta"
          iconName="account-outline"
          iconType="material-community"
          // value={isEditable ? values.cardName : card.cardName}
          editable={isEditable}
          onChangeText={(text) => formik.setFieldValue("cardName", text)}
          errorMessage={formik.errors.cardName}
        />
        <Input
          label="Número de tarjeta"
          placeholder="************1234"
          iconName="credit-card-outline"
          iconType="material-community"
          keyboardType="phone-pad"
          // value={isEditable ? values.cardNumber : card.cardNumber.replace(/(\d{4})/g, '$1 ')}
          maxLength={isEditable ? 16 : 19}
          minLength={isEditable ? 16 : 19}
          editable={isEditable}
          onChangeText={(text) => formik.setFieldValue("cardNumber", text)}
          errorMessage={formik.errors.cardNumber}
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <Input
              label="Fecha de expiración"
              placeholder="MM"
              iconName="calendar-range"
              iconType="material-community"
              keyboardType="phone-pad"
              // value={isEditable ? values.expirationMonth.toString() : card.cardExpiration}
              minLength={2}
              maxLength={2}
              editable={isEditable}
              onChangeText={(text) => formik.setFieldValue("expirationMonth", text)}
              errorMessage={formik.errors.expirationMonth}
            />
          </View>
          <View style={styles.column}>
            <Input
              placeholder="YYYY"
              iconName="calendar-range"
              iconType="material-community"
              keyboardType="phone-pad"
              // value={isEditable ? values.expirationMonth.toString() : card.cardExpiration}
              mixLength={4}
              maxLength={4}
              editable={isEditable}
              onChangeText={(text) => formik.setFieldValue("expirationYear", text)}
              errorMessage={formik.errors.expirationYear}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Input
              label="CVV"
              placeholder="***"
              iconName="lock-outline"
              iconType="material-community"
              keyboardType="phone-pad"
              // value={isEditable ? values.expirationMonth.toString() : card.cardExpiration}
              maxLength={3}
              minLength={3}
              editable={isEditable}
              onChangeText={(text) => formik.setFieldValue("CardCvv", text)}
              errorMessage={formik.errors.CardCvv}
            />
          </View>
          <View style={styles.column}>
            <SaveCardBtnComponent />
          </View>
        </View>
        <AccionsBtnComponent
          btnCancelTitle=" Cancelar "
          // icon="close-circle-outline"
          type="material-community"
          btnContinueTitle="Continuar"
          btnPrimary={true}
          buttonStyle={{ paddingHorizontal: "10%" }}
          loading={isLoading}
          onPress={formik.handleSubmit}
          isLoading={isLoading}
          // action={() => navigation.navigate('CartPayment')}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    width: "49%",
  },
});
