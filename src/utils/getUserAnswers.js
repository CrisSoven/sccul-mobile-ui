import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const baseUrl = "http:/192.168.1.76:8080";

export const getUserAnswers = async (userId, courseId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      `${baseUrl}/api/user_answers/user/${userId}/course/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "No se pudo obtener las respuestas del usuario",
    });
  }
};
