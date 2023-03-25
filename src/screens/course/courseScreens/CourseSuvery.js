import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Goback from "../../../components/common/Goback";
import SurveyCourse from "../../../components/course/SurveyCourse";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import Colors from "../../../utils/Colors";

export default function CourseSurvey() {
  const [survey, setSurvey] = useState({
    name: "Curso de React",
    questions: [
      {
        question:
          "¿Está satisfecho con la calidad de los videos presentado en el curso?",
      },
      {
        question:
          "¿El curso cumplió con sus expectativas y objetivos de aprendizaje?",
      },
      {
        question:
          "¿La estructura y organización del curso fue clara y fácil de seguir?",
      },
      {
        question:
          "¿Está satisfecho con la calidad de los videos presentado en el curso?",
      },
      {
        question:
          "¿El curso cumplió con sus expectativas y objetivos de aprendizaje?",
      },
      {
        question:
          "¿La estructura y organización del curso fue clara y fácil de seguir?",
      },
    ],
  });

  return (
    <ScrollView>
      <View>
        <Goback title="Encuesta" />
        <Text style={styles.title}>{survey.name}</Text>
        <SurveyCourse survey={survey} />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar encuesta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
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
