import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import Line from "../common/Line";

export default function SurveyCourse(props) {
  const { survey } = props;

  const [answers, setAnswers] = useState(survey.questions.map(() => -1));

  const handlePress = (questionIndex, answerIndex) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

  return (
    <View>
      {survey.questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                answers[index] === 0 && styles.selectedButton,
              ]}
              onPress={() => handlePress(index, 0)}
            >
              <Text
                style={[
                  styles.textBtn,
                  answers[index] === 0 && styles.textBtnSelected,
                ]}
              >
                Si
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonMiddle,
                answers[index] === 1 && styles.selectedButton,
              ]}
              onPress={() => handlePress(index, 1)}
            >
              <Text
                style={[
                  styles.textBtn,
                  answers[index] === 1 && styles.textBtnSelected,
                ]}
              >
                Puede mejorar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                answers[index] === 2 && styles.selectedButton,
              ]}
              onPress={() => handlePress(index, 2)}
            >
              <Text
                style={[
                  styles.textBtn,
                  answers[index] === 2 && styles.textBtnSelected,
                ]}
              >
                No
              </Text>
            </TouchableOpacity>
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
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "22%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PalleteAuxiliarBlue,
    padding: 10,
    marginRight: 15,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonMiddle: {
    width: "40%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PalleteAuxiliarBlue,
    padding: 10,
    marginRight: 15,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: Colors.PalleteAuxiliarBlue,
  },
  textBtn: {
    fontSize: 16,
    color: Colors.PalleteAuxiliarBlue,
  },
  textBtnSelected: {
    color: Colors.PalleteWhite,
  },
});
