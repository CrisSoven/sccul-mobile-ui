import { StyleSheet, View } from 'react-native'
import { getCourses } from '../../../utils/Axios'
import React, { useState, useEffect } from 'react'
import Title from '../../../components/common/Title'
import Goback from '../../../components/common/Goback'
import Courses from '../../../components/common/Courses'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBar from '../../../components/common/SearchBar'
import ScrollViewCategories from '../../../components/home/ScrollViewCategories'

export default function CategoryScreen({ route }) {
  const { category } = route.params;
  const [courses, setCourses] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((curso) =>
    curso.category.name.includes(category.name)
  );

  const listOfCourses = () => {
    if (inputText === '') {
      return filteredCourses;
    }

    return filteredCourses.filter((course) => {
      return course.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Goback title={'Categorías'} />
      <SearchBar setInputValue={setInputText} value={inputText} />
      <ScrollViewCategories />
      <Title title={`Cursos (${category.name})`} />
      <View style={styles.listContainer}>
        <Courses courses={listOfCourses()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 20,
    flex: 1,
  },
});
