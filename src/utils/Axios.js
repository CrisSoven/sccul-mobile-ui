import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const baseUrl = 'http:/192.168.1.78:8080';
//"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcmlzQGdtYWlsLmNvbSIsImlhdCI6MTY3OTI2OTY0MiwiZXhwIjo0Njc5MjcxNDQyfQ.Qk5f2keh3RO9j8tdzCDndVIhfoDUZYDSXk3T9ah-9C0";

export const checkout = async (amount) => {
  console.log('checkout', amount);
  try {
    const response = await axios.post(
      `${baseUrl}/api/payments/`,
      {
        amount: Math.floor(amount * 100),
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('checkout error');
    console.log(error);
    throw new Error(error);
  }
};

export async function deleteToken() {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    console.log('token deleted');
  } catch (error) {
    console.log('delete token error');
    throw new Error(error);
  }
}

export async function saveCredentials(token, user) {
  try {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', user.toString());
  } catch (error) {
    console.log('save credentials error');
    throw new Error(error);
  }
}

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('save token error');
    throw new Error(error);
  }
};

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser() {
  try {
    const user = await AsyncStorage.getItem('user');
    return user;
  } catch (error) {
    console.log('get user error');
    throw new Error(error);
  }
}

export async function checkLoginStatus() {
  try {
    const token = await getToken();
    return token === null ? false : true;
  } catch (error) {
    console.log('check login status error');
    return false;
  }
}

export async function loginUser(email, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/auth/mobile/login`, {
      username: email,
      password,
    });
    const data = response.data;
    if (data.statusCode === 200) {
      await saveCredentials(data.data.token, data.data.id);
      return data.data.fullName.split(' ')[0];
    } else {
      return false;
    }
  } catch (error) {
    console.log('login error');
    throw new Error(error);
  }
}

export async function registerUser(
  name,
  lastname,
  surname,
  cellphone,
  email,
  password
) {
  try {
    const response = await axios.post(`${baseUrl}/api/auth/register`, {
      name,
      lastname,
      surname,
      phoneNumber: cellphone,
      email,
      password,
    });
    const data = response.data;
    if (data.statusCode === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('register error');
    return false;
  }
}

export async function getCategories() {
  console.log(await getToken());
  try {
    const response = await axios.get(`${baseUrl}/api/categories/`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('get categories error');
    throw new Error(error);
  }
}

export async function getCourses() {
  try {
    const response = await axios.get(`${baseUrl}/api/courses/`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('get courses error');
    console.log('user token: ' + (await getToken()));
    throw new Error(error);
  }
}

export async function getCourseById(courseId) {
  try {
    const response = await axios.get(`${baseUrl}/api/courses/${courseId}`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('get course by id error');
    throw new Error(error);
  }
}

export async function getCoursesCart() {
  try {
    const user = await getUser();
    const response = await getCourses();
    const courses = response.filter((course) => {
      return course.inscriptions.some((inscription) => {
        return (
          inscription.user.id == user &&
          inscription.status == 'inscrito'
        );
      });
    });

    return courses;
  } catch (error) {
    console.log('get courses cart error');
    throw new Error(error);
  }
}

export async function getBoughtCourses() {
  let progress = [];
  let acc = 0;
  try {
    const user = await getUser();
    const response = await getCourses();
    const courses = response.filter((course) => {
      return course.inscriptions.some((inscription) => {
        if (inscription.user.id == user && inscription.status == 'comprado') {
          progress = [...progress, inscription.fullPercentage];
          course.progress = inscription.fullPercentage;
          course.progressId = acc++;
          return inscription.user.id == user && inscription.status == 'comprado';
        }

      });
    });
    return { courses, progress };
  } catch (error) {
    console.log('get bought courses error');
    throw new Error(error);
  }
}

export async function getInscriptions() {
  try {
    const response = await axios.get(`${baseUrl}/api/inscriptions/`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('get inscriptions error');
    throw new Error(error);
  }
}

export async function deleteInscription(course) {
  const user = await getUser();
  const inscription = course.inscriptions.find(
    (inscription) => inscription.user.id == user
  );
  const inscriptionId = inscription.id;
  try {
    const response = await axios.delete(
      `${baseUrl}/api/inscriptions/${inscriptionId}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return true;
  } catch (error) {
    console.log('error inscripciones');
    throw new Error(error);
  }
}

export async function buyCourseByCart(inscription) {
  const user = await getUser();
  console.log(inscription);
  console.log(inscription.user.user.id);
  try {
    if (inscription.user.user.id == user) {
      const response = await axios.patch(
        `${baseUrl}/api/inscriptions/changeStatus/${inscription.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
      console.log(response.data);
      return true;
    } else {
      console.log('nop');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo comprar el curso',
      });
      return false;
    }
  } catch (error) {
    console.log('error inscripciones');
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'No se pudo comprar el curso',
    });
    throw new Error(error);
  }
}

export async function getUserInfo() {
  try {
    const response = await axios.get(
      `${baseUrl}/api/users/${await getUser()}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('error info usuario');
    throw new Error(error);
  }
}

export async function getBankCards() {
  try {
    const response = await axios.get(
      `${baseUrl}/api/bankCards/user/${await getUser()}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('error tarjetas');
    throw new Error(error);
  }
}

export async function getBankCardById(bankCardId) {
  try {
    const response = await axios.get(
      `${baseUrl}/api/bankCards/user/${await getUser()}/card/${bankCardId}`,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log('error tarjeta id');
  }
}

export async function addBankCard(
  ownerName,
  alias,
  cardNumber,
  cardExpiration,
  cardCvv
) {
  const user = await getUserInfo();
  try {
    const response = await axios.post(
      `${baseUrl}/api/bankCards/`,
      {
        ownerName,
        alias,
        cardNumber,
        cardExpiration,
        cardCvv,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );

    if (response.data.statusCode === 201) {
      return response.data.data.id;
    } else if (response.data.message === 'Tarjeta ya registrada') {
      return false;
    }
  } catch (error) {
    console.log('error agregar tarjeta');
    throw new Error(error);
  }
}

export async function addCourseCart(courseId) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/inscriptions/`,
      {
        course: {
          id: courseId,
        },
        user: {
          id: `${await getUser()}`,
        },
        full_percentage: 0,
        status: 'inscrito',
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;

    if (data.message === 'Ya está inscrito en este curso') {
      return 'alreadyInCart';
    } else if (data.message === 'Ya compró este curso') {
      return 'alreadyBought';
    } else {
      return 'addedToCart';
    }
  } catch (error) {
    console.log(error);
  }
}

export async function setPercentageInscription(courseId, sectionId) {
  try {
    const userId = await getUser();
    const response = await axios.put(
      `${baseUrl}/api/inscriptions/changePercentage/`,
      {
        user: {
          id: userId,
        },
        section: {
          id: sectionId,
        },
        course: {
          id: courseId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserInfo(
  name,
  lastname,
  surname,
  cellphone,
  email
) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${await getUser()}`,
      {
        name,
        lastname,
        surname,
        phoneNumber: cellphone,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;

    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export const changePassword = async (currentPassword, newPassword) => {
  try {
    const url = `${baseUrl}/api/users/changePass/${await getUser()}`;
    console.log('URL:', url);
    const response = await axios.patch(
      url,
      {
        password: currentPassword,
        newPassword: newPassword,
        repeatNwPassword: newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    return { success: true, message: 'Contraseña cambiada con éxito' };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error('La contraseña actual es incorrecta');
    }
    return { success: false, message: error.message };
  }
};

export const verifyPassword = async (
  currentPassword,
  newPassword,
  confirmPassword
) => {
  try {
    const url = `${baseUrl}/api/users/confirmPass/${await getUser()}`;
    console.log(url);
    const response = await axios.post(
      url,
      {
        password: currentPassword,
        newPassword: newPassword,
        repeatNewPassword: confirmPassword,
      },
      { headers: { Authorization: `Bearer ${await getToken()}` } }
    );
    return response.data;
  } catch (error) {
    if (
      error.response?.data?.message ===
      'La contraseña actual es incorrecta'
    ) {
      return false;
    }
    throw new Error(
      error.response?.data?.message ||
      'Ha ocurrido un error al actualizar la contraseña'
    );
  }
};

export async function uploadImage(email, image) {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('image', image);

    const response = await axios.patch(
      `${baseUrl}/api/users/loadimage`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postScore(score, courseId) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/scores/`,
      {
        user: {
          id: `${await getUser()}`,
        },
        course: {
          id: courseId,
        },
        score,
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log('error score');
    throw error;
  }
}

export async function postComment(comment, courseId) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/comments/`,
      {
        user: {
          id: `${await getUser()}`,
        },
        course: {
          id: courseId,
        },
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log('error comment');
    throw error;
  }
}

export const buyCourses = async (courses, userId) => {
  try {
    const response = await axios.patch(
      `${baseUrl}/api/inscriptions/changeStatus/`,
      {
        courses,
        user: {
          id: userId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveAnswers = async (questions, answers, courseId) => {
  const answersArr = [
    {
      question: {
        id: questions[0].id,
      },
      answer: answers[0].answer + 1,
    },
    {
      question: {
        id: questions[1].id,
      },
      answer: answers[1].answer + 1,
    },
    {
      question: {
        id: questions[2].id,
      },
      answer: answers[2].answer + 1,
    },
    {
      question: {
        id: questions[3].id,
      },
      answer: answers[3].answer + 1,
    },
    {
      question: {
        id: questions[4].id,
      },
      answer: answers[4].answer + 1,
    },
    {
      question: {
        id: questions[5].id,
      },
      answer: answers[5].answer + 1,
    },
    {
      question: {
        id: questions[6].id,
      },
      answer: answers[6].answer + 1,
    },
    {
      question: {
        id: questions[7].id,
      },
      answer: answers[7].answer + 1,
    },
    {
      question: {
        id: questions[8].id,
      },
      answer: answers[8].answer + 1,
    },
    {
      question: {
        id: questions[9].id,
      },
      answer: answers[9].answer + 1,
    },
  ];

  try {
    const response = await axios.post(
      `${baseUrl}/api/user_answers/saveAll`,
      {
        answers: answersArr,
        user: {
          id: await getUser(),
        },
        course: {
          id: courseId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const buyCourse = async (courseId, userId) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/inscriptions/`,
      {
        course: {
          id: courseId,
        },
        user: {
          id: userId,
        },
        status: 'comprado',
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/auth/forgot-password`,
      {
        email,
      }
    );
    const data = response.data;
    const success = data.error ? false : true;
    return { success, message: data.message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return {
        success: false,
        message: ' El correo electrónico no esta registrado en la aplicación',
      };
    } else {
      return {
        success: false,
        message: 'Error al enviar el correo',
      };
    }
  }
};
