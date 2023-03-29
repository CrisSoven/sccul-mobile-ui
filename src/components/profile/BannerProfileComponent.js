import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";
import Colors from "../../utils/Colors";
import * as ImagePicker from "expo-image-picker";

export default function BannerProfileComponent(props) {
  const { user } = props;
  const fullName = user.name + " " + user.lastname + " " + user.surname;

  const changePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
    console.log("result: ", result.assets[0].uri);
  };

  return (
    <>
      <View style={styles.banner}>
        <Avatar
          size="xlarge"
          rounded
          source={{ uri: user.image }}
          title={user.name[0] + user.lastname[0]}
          titleStyle={styles.textProfile}
          containerStyle={styles.iconProfile}
        >
          <Avatar.Accessory
            style={{ backgroundColor: Colors.PalleteBlueSecundary }}
            iconStyle={{ fontSize: 20 }}
            size={30}
            onPress={changePhoto}
          />
        </Avatar>
      </View>
      <Text style={styles.textName}>{fullName}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 150,
    backgroundColor: Colors.PalleteBlueSecundary,
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: "20%",
  },
  iconProfile: {
    backgroundColor: Colors.PalleteWhite,
    borderColor: Colors.PalleteBlueSecundary,
    borderWidth: 5,
    marginTop: 60,
  },
  textProfile: {
    fontSize: 50,
    color: Colors.PalleteBlack,
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
