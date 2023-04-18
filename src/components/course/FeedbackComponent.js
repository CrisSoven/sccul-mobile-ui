import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-native-ratings';
import ButtonComponent from '../common/ButtonComponent';
import Input from '../common/InputComponent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Colors from '../../utils/Colors';
import ModalComponent from "../common/ModalComponent";
import ConfirmFeedbackComponent from './ConfirmFeedbackComponent';
import { getCourseById, getUser } from '../../utils/Axios';
import Comment from '../common/Comments';

export default function FeedbackComponent({ courseId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const onClose = () => setShowModal((prevState) => !prevState);
  const handleSent = () => setSent(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedCourse = await getCourseById(courseId);
      const fetchedUser = await getUser();
      const isSent = fetchedCourse.comments.some((comment) => comment.user.id == fetchedUser);
      const userComment = fetchedCourse.comments.filter((comment) => comment.user.id == fetchedUser);
      const userRating = fetchedCourse.scores.filter((score) => score.user.id == fetchedUser);
      setComment(userComment);
      setRating(userRating);
      setSent(isSent);
    };
    fetchCourse();
  }, [showModal]);

  const formik = useFormik({
    initialValues: {
      comment: comment,
      rating: rating,
    },
    validationSchema: Yup.object({
      comment: Yup.string().required('Ingresa un comentario'),
      rating: Yup.number().required('Ingresa una calificación'),
    }),
    validateOnChange: false,
    onSubmit: (formData) => {
      setComment(comment);
      setRating(rating);
      handleShowModal();
    },
  });
  const handleRating = (value) => {
    formik.setFieldValue('rating', value);
    setRating(value);
  };
  return (
    sent === null ? <></> : (
      !sent ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Califica el curso</Text>
          </View>
          <View style={styles.rating}>
            <Rating
              type='star'
              imageSize={40}
              startingValue={rating}
              onFinishRating={handleRating}
              minValue={1}
              jumpValue={1}
              fractions={1}
            // showRating={true}
            />
            <Text style={styles.textRanking}>
              {formik.values.rating ? formik.values.rating : '0'}
            </Text>
          </View>
          {formik.touched.rating && formik.errors.rating && (
            <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
          )}
          <Input
            placeholder='Escribe un comentario'
            multiline={true}
            onChangeText={formik.handleChange('comment')}
            onBlur={formik.handleBlur('comment')}
            errorMessage={formik.touched.comment && formik.errors.comment}
            value={formik.values.comment}
          />
          <View style={{ marginBottom: 20 }}>
            <ButtonComponent
              btnPrimary={true}
              title='Calificar'
              icon='comment-text-outline'
              type='material-community'
              onPress={formik.handleSubmit}
            />
          </View>
          <ModalComponent isVisible={showModal} close={() => setShowModal(false)}>
            <ConfirmFeedbackComponent
              handleSent={handleSent}
              courseId={courseId}
              comment={formik.values.comment}
              rating={formik.values.rating}
              onClose={onClose}
            />
          </ModalComponent>
        </>
      ) : (
        comment === [] || rating === [] ? <></> : (
          <Comment
            comments={comment}
            rating={rating}
            sent={sent}
          />
        )
      )
    )
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  textRanking: {
    fontSize: 30,
    fontWeight: '500',
    marginLeft: 10,
    color: Colors.PalleteYellow,
  },
});
