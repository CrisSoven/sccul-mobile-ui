import Colors from '../../../utils/Colors';
import Splash from '../../sccul/SplashScreen';
import { Rating } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import Goback from '../../../components/common/Goback';
import { useStripe } from '@stripe/stripe-react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Comments from '../../../components/common/Comments';
import AddToCartBtn from '../../../components/home/AddToCartBtn';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import ButtonComponent from '../../../components/common/ButtonComponent';
import ContentComponent from '../../../components/common/ContentComponent';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { buyCourse, buyCourseByCart, checkout, getCourseById, getUser } from '../../../utils/Axios';

export default function CoursesDetailsScreen({ route }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [course, setCourse] = useState({});
  const [hasBoughtCourse, setHasBoughtCourse] = useState(false);
  const [hasInscriptionCourse, setHasInscriptionCourse] = useState(false);
  const [userInscription, setUserInscription] = useState();
  const [isCourseScreen, setIsCourseScreen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);
  const { courseId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedCourse = await getCourseById(courseId);
      const userId = await getUser();
      setUser(userId);
      const userIdNumber = Number(userId);
      const hasInscription = fetchedCourse.inscriptions.find(
        (inscription) => inscription.user.user.id === userIdNumber
      );
      setUserInscription(hasInscription);
      const hasBoughtCourse = hasInscription?.status === 'comprado';
      const hasInscriptionCourse = hasInscription?.status === 'inscrito';

      const totalToPay =
        fetchedCourse.price -
        (fetchedCourse.discount * fetchedCourse.price) / 100;

      setTotal(totalToPay);

      setHasBoughtCourse(hasBoughtCourse);
      setHasInscriptionCourse(hasInscriptionCourse);
      setHasInscriptionCourse(hasInscriptionCourse);
      setCourse(fetchedCourse);
    };

    fetchCourse();
  }, [courseId]);

  const calcPrice = () => {
    if (course.discount > 0) {
      return {
        price: course.price - course.price * (course.discount / 100),
        originalPrice: course.price,
      };
    } else {
      return course.price;
    }
  };

  const handleBuyCourse = async () => {
    if (hasBoughtCourse) {
      navigation.navigate('CourseStack', {
        screen: 'Courses',
      });
      return;
    }

    setIsLoading(true);
    console.log('Total: ' + total);

    const { paymentIntent, ephemeralKey, customer } = await checkout(total);

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: 'SCCUL Inc.',
      defaultBillingDetails: {
        address: {
          country: 'mx',
        },
      },
    });
    if (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'No se ha podido realizar la compra',
        visibilityTime: 5000,
        topOffset: 100,
      });
      setIsLoading(false);
      return;
    }

    const { error: errorPresent, ...presetData } = await presentPaymentSheet();

    if (errorPresent) {
      setIsLoading(false);
      // Toast.show({
      //   type: 'error',
      //   position: 'top',
      //   text1: errorPresent.message,
      //   visibilityTime: 5000,
      //   topOffset: 100,
      // });
      return;
    } else {
      try {
        const { error: errorBuy } = hasInscriptionCourse ? await buyCourseByCart(userInscription) : await buyCourse(course.id, user);
        setIsLoading(false);

        if (errorBuy) {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: 'No se actualizaron los cursos. Contacte con un administrador',
            visibilityTime: 5000,
            topOffset: 100,
          });
        } else {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Compra realizada',
            text2: 'Se ha realizado la compra correctamente',
            visibilityTime: 5000,
            topOffset: 100,
          });
          navigation.navigate('CourseStack', {
            screen: 'Courses',
          });
        }
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'No se actualizaron los cursos. Contacte con un administrador',
          visibilityTime: 5000,
          topOffset: 100,
        });
      }
    }
  };
  const updatedCourse = calcPrice();

  return !course.id ? (
    <Splash />
  ) : (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Goback title={course.name} />
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.averageContainer}>
        <Text style={styles.text}>{course.averageRatings}</Text>
        <Rating
          startingValue={ course.averageRatings ? course.averageRatings : 0 }
          imageSize={20}
          readonly
          ratingColor={Colors.PalleteYellow}
          style={{ marginRight: 5 }}
        />
        <Text style={styles.text}>
          ({course.comments.length ? course.comments.length : 0})
        </Text>
      </View>
      {course.discount > 0 && (
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.priceContainer}>
            <Text
              style={{
                ...styles.price,
                color: Colors.PalletteRed,
                fontWeight: 'bold',
              }}
            >
              ${parseFloat(updatedCourse.price.toFixed(2))} MXN
            </Text>
            <Text style={styles.discount}>-{course.discount}%</Text>
          </View>
          <Text
            style={{
              ...styles.price,
              fontSize: 20,
              textDecorationLine: 'line-through',
              color: Colors.PalleteBlack,
            }}
          >
            ${updatedCourse.originalPrice} MXN
          </Text>
        </View>
      )}
      {(course.discount == 0 || course.discount == null) && (
        <Text style={styles.price}>${course.price} MXN</Text>
      )}
      <Text style={styles.text}>{course.description}</Text>
      <View>
        <TouchableOpacity style={styles.categoryContainer} disabled={true}>
          <Text style={styles.categoryText} numberOfLines={1}>
            {course.category.name}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <AddToCartBtn addCourse={course} loading={isLoading} />
        <View style={styles.buyCourseContainer}>
          <ButtonComponent
            title={hasBoughtCourse ? 'Ver curso' : 'Comprar curso'}
            icon={hasBoughtCourse ? 'eye-outline' : 'cart-outline'}
            type='material-community'
            btnPrimary={true}
            onPress={() => handleBuyCourse()}
            loading={isLoading}
          />
        </View>
      </View>
      <ContentComponent course={course} isCourseScreen={isCourseScreen} />
      <Comments comments={course.comments} rating={course.scores} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.PalleteWhite,
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: 230,
    borderRadius: 16,
    marginBottom: 15,
    resizeMode: 'cover',
    backgroundColor: Colors.PalleteGray,
  },
  averageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 35,
    color: Colors.PalletteRed,
    marginBottom: 10,
  },
  discount: {
    color: Colors.PalletteRed,
    fontSize: 24,
    marginBottom: '2.5%',
    marginLeft: '2.5%',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginRight: 5,
  },
  categoryContainer: {
    marginVertical: 20,
    width: '45%',
    height: 40,
    backgroundColor: Colors.PalleteGreenBackground,
    justifyContent: 'center',
    borderRadius: 16,
  },
  categoryText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  buyCourseContainer: {
    width: '90%',
  },
});
