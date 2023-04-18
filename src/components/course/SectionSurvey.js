import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";
import { useEffect, useState } from "react";
import { getUserAnswers } from "../../utils/getUserAnswers";
import { getUser } from "../../utils/Axios";

export default function SectionSurvey({ navigation, course, disableSurvey, disable=true }) {
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

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Survey", { course, initialValues, isSurveyCompleted: userAnswers.length > 0 })}
        {...(disableSurvey ? null : { disabled: true })}
      >
        <Text style={[styles.punto, disable ? {opacity: 0.2} : {}]}>•</Text>
        {disableSurvey ? (
          <Icon
            name="lock-open-variant-outline"
            type="material-community"
            size={22}
            color={disable ? Colors.PalleteGray : Colors.PalleteBlack}
            />
        ) : (
          <Icon
            name="lock-outline"
            type="material-community"
            size={22}
            color={disable ? Colors.PalleteGray : Colors.PalleteBlack}
          />
        )}
        <Text style={[styles.survey, disable ? {opacity: 0.5} : {}]}>{
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
  },
  punto: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  survey: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 5,
  },
});
