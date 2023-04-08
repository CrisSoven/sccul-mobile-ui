import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from '../common/ButtonComponent'
import { Icon } from 'react-native-elements'
import { postScore, postComment } from '../../utils/Axios';

export default function ConfirmFeedbackComponent({ handleSent, onClose, courseId, rating, comment }) {
  console.log(courseId, rating, comment);
  const [isLoading, setIsLoading] = useState(false);
  const handleSend = () => {
    const fetchScores = async () => {
      setIsLoading(true);
      await postScore(rating, courseId)
      await postComment(comment, courseId)
      setIsLoading(false);
    }
    fetchScores();
    handleSent();
    onClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name='information-outline' type='material-community' style={{ marginRight: 5 }} />
        <Text style={styles.title}>Enviar tu calificación</Text>
      </View>
      <Text style={styles.body}>Una vez que envíes tu puntuación y comentario, no podrás modificarlo ni eliminarlo.</Text>
      {/* <Comments comments={comment}/> */}
      <ButtonComponent
        title='Enviar'
        btnPrimary={true}
        icon='chevron-right'
        type='material-community'
        onPress={handleSend}
        loading={isLoading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 18,
    marginBottom: 25,
  },
})