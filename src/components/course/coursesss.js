import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
const Courses = () => {
  const data = [
    {
      key: "1",
      title: "Fundamentos de Java.",
      duration: "5 episodios - 1h 24min",
      progress: 10,
      image: require("../../../assets/img/dev.jpg"),
    },
    {
      key: "2",
      title: "Postres franceses",
      duration: "6 episodios - 1h 40min",
      progress: 100,
      image: require("../../../assets/img/diseño.jpg"),
    },
    {
      key: "3",
      title: "Introducción a React.",
      duration: "4 episodios - 1h 10min",
      progress: 20,
      image: require("../../../assets/img/dev.jpg"),
    },
    {
      key: "4",
      title: "Desarrollo de aplicaciones móviles con React Native.",
      duration: "7 episodios - 2h 30min",
      progress: 40,
      image: require("../../../assets/img/dev.jpg"),
    },
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Course")}
      >
        <View style={styles.blueBox}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.data}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
            <View style={styles.progressBar}>
              <View
                style={[styles.progress, { width: `${item.progress}%` }]}
              ></View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.key}
      renderItem={Courses}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    backgroundColor: Colors.PalleteGreenBackground,
    margin: 10,
    borderRadius: 10,
    width: 175,
    height: 190,
  },
  image: {
    width: 175,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 10,
    marginBottom: 5,
  },
  progressBar: {
    width: "90%",
    height: 10,
    backgroundColor: Colors.PalleteGray,
  },
  progress: {
    height: 10,
    backgroundColor: Colors.PalleteBluePrimary,
  },
  data: {
    padding: 10,
  },
});

export default Courses;