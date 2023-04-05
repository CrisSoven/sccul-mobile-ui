import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function SectionSurvey(props) {
  const { navigation, survey } = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Survey", { survey })}
      >
        <Text style={styles.punto}>•</Text>
        {/* <Icon name="lock-outline" type="material-community" /> */}
        <Icon name="lock-open-outline" type="material-community" />
        <Text style={styles.survey}>Encuesta del curso</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.PalleteGreenBackground,
    marginHorizontal: 5,
    marginTop: 15,
  },
  punto: {
    fontSize: 24,
    marginHorizontal: 12,
  },
  survey: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 5,
  },
});
