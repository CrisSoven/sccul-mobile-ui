import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { Icon, Rating } from "react-native-elements";

export default function Comments(comment) {
  const { comments } = comment;
  return (
    <View>
      {comments.map((comments, index) => (
        <View style={styles.mainContainer} key={index}>
          <Icon
            name="user-o"
            type="font-awesome"
            color={Colors.PalleteBlack}
            size={30}
          />
          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name} numberOfLines={1}>
                {comments.user.name + " " + comments.user.surname}
              </Text>
              <Text style={styles.createdAt}>{comments.createdAt}</Text>
              <Rating
                startingValue={comments.score}
                fractions={1}
                imageSize={16}
                readonly
                ratingColor="#FFAA0D"
                style={{ flex: 1 }}
              />
            </View>
            <Text style={styles.comment}>{comments.comment}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: "auto",
    marginBottom: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    marginHorizontal: "3%",
  },
  nameContainer: {
    flexDirection: "row",
    marginBottom: "2%",
  },
  name: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "2%",
  },
  createdAt: {
    fontSize: 14,
    opacity: 0.5,
    marginLeft: "3%",
  },
  comment: {
    fontSize: 14,
    marginHorizontal: "2%",
  },
});
