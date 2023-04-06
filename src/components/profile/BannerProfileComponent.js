import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import React from "react";
import Colors from "../../utils/Colors";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { getUser, uploadImage } from "../../utils/Axios";

export default function BannerProfileComponent(props) {
  const { user, setUser, onReload } = props;
  const [uploading, setUploading] = useState(false);
  const fullName = user.name + " " + user.lastname + " " + user.surname;

  const changePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (!result.canceled) {
        const imageUrl = result.assets[0].uri;
        console.log("Image URL:", imageUrl);
        const image = {
          uri: imageUrl,
          type: "image/jpeg",
          name: `${user.email}.jpg`,
        };
        setUploading(true);
        await uploadImage(user.email, image);
        const updatedUser = { ...user, image: imageUrl };
        setUser(updatedUser);
        onReload();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false); // establecer uploading en false para ocultar el loader
    }
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
        {uploading && <Text>Cargando imagen...</Text>}
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
