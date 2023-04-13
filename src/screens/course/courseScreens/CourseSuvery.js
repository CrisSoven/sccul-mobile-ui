import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Goback from "../../../components/common/Goback";
import SurveyCourse from "../../../components/course/SurveyCourse";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import Colors from "../../../utils/Colors";
import { saveAnswers } from "../../../utils/Axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

export default function CourseSurvey(props) {
  const navigation = useNavigation();

  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log("answers", answers);
  // console.log("questions", questions);

  const { course, initialValues, isSurveyCompleted } = props.route.params;
  const courseId = course.id;

  const validationSchema = Yup.object({
    answers: Yup.array(
      Yup.object({
        answer: Yup.number()
          .required("La respuesta es requerida")
          .min(0, "La respuesta es requerida")
          .max(4, "La respuesta es requerida"),
      }).required("Las respuestas son requeridas")
    ),
  });

  const handleSubmit = async (values) => {
    const data = await saveAnswers(questions, values.answers, courseId);
  };

  const handleCloseSurvey = () => {
    navigation.navigate("CourseDetail", { course });
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
          setFieldValue,
          isValid,
        }) => (
          <>
            <View>
              <Goback title="Encuesta" />
              <Text style={styles.title} numberOfLines={2}>
                {course.survey.name}
              </Text>
              <SurveyCourse
                survey={course.survey}
                answers={answers}
                setAnswers={setAnswers}
                questions={questions}
                setQuestions={setQuestions}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
              />
            </View>
            <View style={styles.containerBtn}>
              {!isSurveyCompleted ? (
                <TouchableOpacity
                  style={styles.sendButton}
                  disabled={!isValid}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.sendButtonText}>Enviar encuesta</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={() => handleCloseSurvey()}
                >
                  <Text style={styles.sendButtonText}>Cerrar encuesta</Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: 20,
  },
  sendButton: {
    width: "60%",
    backgroundColor: Colors.PalleteBlack,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    margin: 20,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerBtn: {
    alignItems: "center",
  },
});
