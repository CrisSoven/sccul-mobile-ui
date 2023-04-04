import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/Colors";
import { Rating } from "react-native-ratings";
import ButtonComponent from "../common/ButtonComponent";
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FeedbackComponent() {
  const [rating, setRating] = useState(0);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: Yup.object({
      comment: Yup.string().required("Ingresa tu comentario"),
    }),
    validateOnChange: false,
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  const handleRating = (value) => {
    setRating(value);
  };

  // const onSubmit = (values, { resetForm }) => {
  //   console.log(values);
  //   resetForm();
  // };

  return (
    <>
      <Text style={styles.title}>Califica este curso</Text>
      <View style={styles.rating}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={35}
          startingValue={0}
          fractions={5}
          onFinishRating={handleRating}
          ratingColor="#FFAA0D"
          tintColor="#f2f2f2"
        />
      </View>
      <TextInput
        style={styles.commentInput}
        // onChangeText={handleChange("comment")}
        // onBlur={handleBlur("comment")}
        // value={values.comment}
        placeholder="Escribe un comentario"
        multiline={true}
        numberOfLines={5}
      />
      <ButtonComponent
        btnPrimary={true}
        title="Enviar"
        onPress={formik.handleSubmit}
        buttonStyle={{ marginButton: 20 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  commentInput: {
    borderColor: Colors.PalleteGray,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
    textAlignVertical: "top",
    borderRadius: 10,
  },
  rating: {
    alignItems: "flex-start",
    marginVertical: 20,
  },
});
