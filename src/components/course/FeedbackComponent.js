import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-native-ratings';
import ButtonComponent from '../common/ButtonComponent';
import Input from '../common/InputComponent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Colors from '../../utils/Colors';
import { Icon } from 'react-native-elements';
import ModalComponent from "../common/ModalComponent";
import ConfirmFeedbackComponent from './ConfirmFeedbackComponent';
import { getCourseById, getUser } from '../../utils/Axios';

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
      setSent(isSent);
    };
    fetchCourse();
  }, []);
  const formik = useFormik({
    initialValues: {
      comment: '',
      rating: '',
    },
    validationSchema: Yup.object({
      comment: Yup.string().required('Ingresa un comentario'),
      rating: Yup.number().required('Ingresa una calificación'),
    }),
    validateOnChange: false,
    onSubmit: (formData) => {
      setComment(formData.comment);
      handleShowModal();
    },
  });
  const handleRating = (value) => {
    formik.setFieldValue('rating', value);
    setRating(value);
  };
  return (
    sent === null ? <></> : (
      <>
        <View style={styles.titleContainer}>
          {
            sent ?
              <Icon
                style={{ marginRight: 5 }}
                name='lock-outline'
                type='material-community'
              /> : <></>
          }
          <Text style={styles.title}>Califica el curso</Text>
        </View>
        <View style={styles.rating}>
          <Rating
            type='star'
            imageSize={40}
            startingValue={rating}
            onFinishRating={handleRating}
            minValue={0.5}
            jumpValue={0.5}
            fractions={1}
            // showRating={true}
            readonly={sent}
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
          disabled={sent}
        />
        <ButtonComponent
          btnPrimary={true}
          title='Calificar'
          icon='comment-text-outline'
          type='material-community'
          onPress={formik.handleSubmit}
        />
        <ModalComponent isVisible={showModal} close={() => setShowModal(false)}>
          <ConfirmFeedbackComponent
            handleSent={handleSent}
            onClose={onClose}
            courseId={courseId}
            rating={rating}
            comment={comment}
          />
        </ModalComponent>
      </>
    )
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
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
