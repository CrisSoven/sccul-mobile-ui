import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import Line from "../common/Line";

export default function SurveyCourse(props) {
  const {
    survey,
    answers,
    setAnswers,
    questions,
    setQuestions,
    errors,
    values,
    setFieldValue,
    isSurveyCompleted,
  } = props;

  const handlePress = (questionIndex, answerIndex, setFieldValue) => {
    const answer = {
      answer: answerIndex,
    };
    setFieldValue(`answers[${questionIndex}]`, answer);

    // setAnswers((prevAnswers) => {
    //   const newAnswers = [...prevAnswers];
    //   newAnswers[.answerquestionIndex] = answerIndex;
    //   return newAnswers;
    // });
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex] = survey.questions[questionIndex];
      return newQuestions;
    });
  };

  // console.log("errors", errors);
  // console.log("errorr 1", errors?.answers?.[0]?.answer);

  return (
    <View>
      {survey.questions.map((question, index) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          <View style={styles.buttonsContainer}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  values?.answers[index]?.answer === 0 && styles.selectedButton,
                ]}
                onPress={() => handlePress(index, 0, setFieldValue)}
                disabled={isSurveyCompleted}
              >
                <Text
                  style={[
                    styles.textBtn,
                    values?.answers[index]?.answer === 0 &&
                      styles.textBtnSelected,
                  ]}
                >
                  Malo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  values?.answers[index]?.answer === 1 && styles.selectedButton,
                ]}
                onPress={() => handlePress(index, 1, setFieldValue)}
                disabled={isSurveyCompleted}
              >
                <Text
                  style={[
                    styles.textBtn,
                    values?.answers[index]?.answer === 1 &&
                      styles.textBtnSelected,
                  ]}
                >
                  Regular
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  values?.answers[index]?.answer === 2 && styles.selectedButton,
                ]}
                onPress={() => handlePress(index, 2, setFieldValue)}
                disabled={isSurveyCompleted}
              >
                <Text
                  style={[
                    styles.textBtn,
                    values?.answers[index]?.answer === 2 &&
                      styles.textBtnSelected,
                  ]}
                >
                  Bueno
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  values?.answers[index]?.answer === 3 && styles.selectedButton,
                ]}
                onPress={() => handlePress(index, 3, setFieldValue)}
                disabled={isSurveyCompleted}
              >
                <Text
                  style={[
                    styles.textBtn,
                    values?.answers[index]?.answer === 3 &&
                      styles.textBtnSelected,
                  ]}
                >
                  Muy bueno
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  values?.answers[index]?.answer === 4 && styles.selectedButton,
                ]}
                onPress={() => handlePress(index, 4, setFieldValue)}
                disabled={isSurveyCompleted}
              >
                <Text
                  style={[
                    styles.textBtn,
                    values?.answers[index]?.answer === 4 &&
                      styles.textBtnSelected,
                  ]}
                >
                  Excelente
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {
              errors?.answers?.[index]?.answer && (
                <Text style={styles.error}>{errors?.answers?.[index].answer}</Text>
              )
            }
          </View>
          <Line />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PalleteAuxiliarBlue,
    padding: 8,
    marginRight: 15,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: Colors.PalleteAuxiliarBlue,
  },
  textBtn: {
    fontSize: 14,
    color: Colors.PalleteAuxiliarBlue,
  },
  textBtnSelected: {
    color: Colors.PalleteWhite,
  },
  error: {
    color: Colors.PalletteRed,
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 5,
    textAlign: "center",
    marginTop: 15,
  },
});
