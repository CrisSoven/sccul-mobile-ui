
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Rating } from "react-native-ratings";
import ButtonComponent from "../common/ButtonComponent";
import { Formik } from "formik";
import * as yup from "yup";

export default function FeedbackComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const validationSchema = yup.object().shape({
    comment: yup.string().required("Ingresa tu comentario"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Califica este curso</Text>
      <View style={styles.rating}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={30}
          startingValue={0}
          onFinishRating={handleRating}
          ratingColor="#FFAA0D"
          tintColor="#f2f2f2"
        />
      </View>
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={onSubmit}
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
          <>
            <TextInput
              style={styles.commentInput}
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
              value={values.comment}
              placeholder="Escribe un comentario"
              multiline={true}
            />
            {touched.comment && errors.comment && (
              <Text style={styles.errorText}>{errors.comment}</Text>
            )}
            <ButtonComponent
              btnPrimary={true}
              title="Enviar"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  commentInput: {
    height: 40,
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
    justifyContent: "center",
    marginVertical: 10,
  },
  errorText: {
    color: "red",
  },
});
