import * as Yup from 'yup'
import { Formik } from 'formik'
import React, { useState } from 'react'
import Colors from '../../../utils/Colors'
import { StyleSheet, View } from 'react-native'
import { saveAnswers } from '../../../utils/Axios'
import Goback from '../../../components/common/Goback'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import SurveyCourse from '../../../components/course/SurveyCourse'
import ButtonComponent from '../../../components/common/ButtonComponent'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function CourseSurvey(props) {
  const { course, initialValues, isSurveyCompleted, setReload } = props.route.params;
  const navigation = useNavigation();
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const courseId = course.id;

  const validationSchema = Yup.object({
    answers: Yup.array(
      Yup.object({
        answer: Yup.number()
          .required('La respuesta es requerida')
          .min(0, 'La respuesta es requerida')
          .max(4, 'La respuesta es requerida'),
      }).required('Las respuestas son requeridas')
    ),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    console.log(loading);
    try {
      const data = await saveAnswers(questions, values.answers, courseId);
      !data.error &&
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Encuesta enviada correctamente',
          visibilityTime: 5000,
          topOffset: 100,
        });
      setReload((prevState) => !prevState);
      navigation.navigate('CourseDetail', { course });
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Todas las preguntas son requeridas',
        visibilityTime: 5000,
        topOffset: 100,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSurvey = () => {
    navigation.navigate('CourseDetail', { course });
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
              <Goback title={course.survey.name} numberOfLines={1} />
              <SurveyCourse
                survey={course.survey}
                answers={answers}
                setAnswers={setAnswers}
                questions={questions}
                setQuestions={setQuestions}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                isSurveyCompleted={isSurveyCompleted}
              />
            </View>
            <View style={styles.btnContainer}>
              <ButtonComponent
                title={!isSurveyCompleted ? 'Enviar encuesta' : 'Regresar'}
                icon={!isSurveyCompleted ? 'file-send-outline' : null}
                type='material-community'
                loading={loading}
                btnPrimary={!isSurveyCompleted}
                onPress={!isSurveyCompleted ? handleSubmit : handleCloseSurvey}
              />
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sendButton: {
    width: '60%',
    backgroundColor: Colors.PalleteBlack,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    margin: 20,
  },
  btnContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});
