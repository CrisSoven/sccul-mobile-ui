import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { Rating, AirbnbRating } from "react-native-ratings";
import ButtonComponent from "../common/ButtonComponent";
export default function FeedbackComponent() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const handleRating = (value) => {
    setRating(value);
  };

  const onCommentChange = (text) => {
    setComment(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Califica este curso</Text>
      <View style={styles.rating}>
        <AirbnbRating
          count={5}
          reviews={["Terrible", "Malo", "Promedio", "Bueno", "Excelente"]}
          defaultRating={0}
          size={24}
          onFinishRating={handleRating}
        />
      </View>

      <TextInput
        style={styles.commentInput}
        onChangeText={(text) => onCommentChange(text)}
        value={comment}
        placeholder="Escribe un comentario"
        multiline={true}
      />
      <ButtonComponent 
       btnPrimary={true}
       title="Enviar"

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  commentInput: {
    height: 40,
    borderColor: Colors.PalleteGray,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
    textAlignVertical: "top",
    borderRadius: 10,
  },
  rating: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 10,
  },
});
