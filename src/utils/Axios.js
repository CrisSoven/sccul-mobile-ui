import axios from "axios";

const baseUrl = "http://192.168.1.74:8080";
let localEmail = "no@email.com"
let localPassword = "empty"
let localToken = "empty"
let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcmlzQGdtYWlsLmNvbSIsImlhdCI6MTY3OTI2OTY0MiwiZXhwIjo0Njc5MjcxNDQyfQ.Qk5f2keh3RO9j8tdzCDndVIhfoDUZYDSXk3T9ah-9C0";
//cris@gmail.com

export async function checkLoginStatus() {
  try {
    loginUser(localEmail, localPassword)
    if (localToken === token) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export async function loginUser(email, password) {
  localEmail = email;
  localPassword = password;
  try {
    const response = await axios.post(`${baseUrl}/api/auth/mobile/login`, {
      username: email,
      password,
    });
    const data = response.data;
    if (data.statusCode === 200) {
      token = data.data;
      return true;
    }
  } catch (error) {
  }
};

export async function registerUser(name, lastname, surname, cellphone, email, password) {
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
      token = data.data;
      return true;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export async function getCategories() {
  try {
    const response = await axios.get(`${baseUrl}/api/categories/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export async function getCourses() {
  try {
    const response = await axios.get(`${baseUrl}/api/courses/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("error cursos");
  }
};

export async function getCourseById(courseId) {
  try {
    const response = await axios.get(`${baseUrl}/api/courses/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("error curso id");
  }
}

// export async function getInscriptions() {
//   try {
//     const response = await axios.get(`${baseUrl}/api/inscriptions/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = response.data;
//     return data.data;
//   } catch (error) {
//     console.log("error inscripciones");
//   }
// }

export async function deleteInscription(inscriptionId) {
  try {
    const response = await axios.delete(`${baseUrl}/api/inscriptions/${inscriptionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("error inscripciones");
  }
};

export async function buyCourse(inscriptionId) {
  try {
    const response = await axios.patch(`${baseUrl}/api/inscriptions/changeStatus/${inscriptionId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo() {
  try {
    const response = await axios.get(`${baseUrl}/api/users/1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("error info usuario");
  }
};

export async function getBankCards() {
  try {
    const response = await axios.get(`${baseUrl}/api/bankCards/user/1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("error tarjetas");
  }
}

export async function getBankCardById(bankCardId) {
  try {
    const response = await axios.get(`${baseUrl}/api/bankCards/user/1/card/${bankCardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("error tarjeta id");
  }
};

export async function addCourseCart(courseId) {
  try {
    const response = await axios.post(`${baseUrl}/api/inscriptions/`, {
      "course": {
        "id": courseId
      },
      "user": {
        "id": 1
      },
      full_percentage: 0,
      status: "inscrito"
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = response.data;

    if (data.message === "Ya está inscrito en este curso") {
      return "alreadyInCart";
    } else if (data.message === "Ya compró este curso") {
      return "alreadyBought";
    } else {
      return "addedToCart";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function setPercentageInscription(inscriptionId, percentage){
  try {
    // const response = await axios.patch(`${baseUrl}/api/inscriptions/changePercentage/${inscriptionId}`, {
    //   percentage
    // }, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    // const data = response.data;
    // return data.data;
  }
  catch (error) {
    console.log(error);
  }
}