import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";
import { useEffect, useState } from "react";
import { getUserAnswers } from "../../utils/getUserAnswers";
import { getUser } from "../../utils/Axios";

export default function SectionSurvey(props) {
  const { navigation, course, disableSurvey } = props;
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    answers: [
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
      { answer: -1 },
    ],
  })

  useEffect(() => {
    const getAnswers = async () => {
      setIsLoading(true);
      const userId = await getUser();
      const userAnswers = await getUserAnswers(userId, course.id);
      setUserAnswers(userAnswers.data);
      const answers = userAnswers.data.map((answer) => {
        return { answer: answer.answer - 1 };
      });
      setInitialValues({ answers });
      setIsLoading(false);
    };
    getAnswers();
  }, []);


  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  // console.log(userAnswers.length > 0);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Survey", { course, initialValues, isSurveyCompleted: userAnswers.length > 0 })}
        {...(disableSurvey ? null : { disabled: true })}
      >
        <Text style={styles.punto}>•</Text>
        {disableSurvey ? (
          <Icon name="lock-open-variant-outline" type="material-community" />
        ) : (
          <Icon name="lock-outline" type="material-community" />
        )}
        <Text style={styles.survey}>{
          userAnswers.length > 0 ? "Encuesta completada" : "Encuesta"
        }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 5,
    marginTop: 15,
  },
  punto: {
    fontSize: 24,
    marginHorizontal: 12,
  },
  survey: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 5,
  },
});
