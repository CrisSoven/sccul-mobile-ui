import { getCourses } from '../../utils/Axios';
import SplashScreen from '../sccul/SplashScreen';
import Banner from '../../components/home/Banner';
import SearchBar from '../../components/common/SearchBar';
import FeaturedCourses from '../../components/FeaturedCourses';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import ScrollViewCategories from '../../components/home/ScrollViewCategories';
import Title from '../../components/common/Title';

export default function HomeScreen() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchCourses = async () => {
    setIsLoading(true);
    const fetchedCourses = await getCourses();
    const filteredCourses = fetchedCourses.filter(
      (course) => course.status === 1
    );
    setCourses(filteredCourses);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourses();
    setRefreshing(false);
  }, []);

  const listOfCourses = () => {
    if (inputText === '') {
      return courses;
    }

    return courses.filter((course) => {
      return course.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  if (isLoading && !refreshing) {
    return <SplashScreen />;
  }

  if (isLoading && refreshing) {
    return <SplashScreen />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        {/* <Banner /> */}
        <Title title="Categorías" />
        <ScrollViewCategories />
        <SearchBar setInputValue={setInputText} value={inputText} />
        <Title title="Todos los cursos" />
          <FeaturedCourses courses={listOfCourses()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    marginTop: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
});
