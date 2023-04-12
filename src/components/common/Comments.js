import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { Avatar, Rating } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Comments({ comments, rating, sent }) {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>
        {sent ? "Tu calificación del curso" : `Comentarios (${comments.length})`}
      </Text>
      {
        comments.map((comment) => (
          <TouchableOpacity
            style={styles.content}
            key={comment.id}
            activeOpacity={sent ? 0.5 : 1}
            onPress={sent ? () => navigation.navigate('HomeStack', {screen: 'HomeS'}) : () => { }}
          >
            {
              comment.user.image ? (
                <Avatar
                  rounded
                  source={{ uri: comment.user.image }}
                />
              ) : (
                <Avatar
                  rounded
                  title={comment.user.name[0]}
                  overlayContainerStyle={{ backgroundColor: Colors.PalleteAuxiliarBlue }}
                />
              )
            }
            <View style={styles.infoContainer}>
              <View style={styles.commentHeader}>
                <Text style={styles.name} numberOfLines={1}>
                  {comment.user.name + " " + comment.user.lastname}
                </Text>
                <Text style={styles.createdAt}>{comment.created_at.split(" ")[0]}</Text>
                {
                  rating.map((score) => (
                    comment.user.id === score.user.id ? (
                      <Rating
                        key={score.id}
                        startingValue={score.score}
                        imageSize={16}
                        readonly
                      />
                    ) : (<></>)
                  ))
                }
              </View>
              <Text>{comment.comment}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,

  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  createdAt: {
    opacity: 0.5,
    marginHorizontal: 10,
  },
});
