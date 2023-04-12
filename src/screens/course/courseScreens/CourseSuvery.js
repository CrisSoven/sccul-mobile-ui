import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Goback from "../../../components/common/Goback";
import SurveyCourse from "../../../components/course/SurveyCourse";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import Colors from "../../../utils/Colors";
import { saveAnswers } from "../../../utils/Axios";

export default function CourseSurvey(props) {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { course } = props.route.params;
  const courseId = course.id;

  return (
    <ScrollView>
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
        />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => saveAnswers(questions, answers, courseId)}
        >
          <Text style={styles.sendButtonText}>Enviar encuesta</Text>
        </TouchableOpacity>
      </View>
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
