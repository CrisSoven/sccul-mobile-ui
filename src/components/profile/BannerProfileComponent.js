import React from 'react';
import { useState } from 'react';
import Colors from '../../utils/Colors';
import { Avatar } from 'react-native-elements';
import { uploadImage } from '../../utils/Axios';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View } from 'react-native';

export default function BannerProfileComponent({ user, setUser, onReload }) {
  const [uploading, setUploading] = useState(false);
  const fullName = user.name + ' ' + user.lastname + ' ' + user.surname;
  const changePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (!result.canceled) {
        const imageUrl = result.assets[0].uri;
        console.log('Image URL:', imageUrl);
        const image = {
          uri: imageUrl,
          type: 'image/jpeg',
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
      setUploading(false);
    }
  };

  return (
    <View style={styles.banner}>
      <Avatar
        size='xlarge'
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
      <Text style={styles.textName}>
        {uploading ? `Cargando imagen...` : fullName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 150,
    backgroundColor: Colors.PalleteBlueSecundary,
    marginHorizontal: 20,
    marginBottom: 90,
    borderRadius: 20,
    alignItems: 'center',
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
