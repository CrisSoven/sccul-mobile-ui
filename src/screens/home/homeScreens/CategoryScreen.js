import { StyleSheet, Text, View } from 'react-native';
import Courses from '../../../components/common/Courses';
import React, { useState, useEffect } from 'react';
import Goback from '../../../components/common/Goback';
import ScrollViewCategories from '../../../components/home/ScrollViewCategories';
import SearchBar from '../../../components/common/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';
import { getCourses } from '../../../utils/Axios';

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
			<View style={styles.scrollViewCategoriesContainer}>
				<ScrollViewCategories />
			</View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{`Cursos (${category.name})`}</Text>
			</View>
			<View style={styles.listContainer}>
				<Courses courses={listOfCourses()} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginTop: '5%',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginHorizontal: '2%',
		marginBottom: '5%',
	},
	listContainer: {
		marginHorizontal: '3.5%',
		flex: 1,
	},
	scrollViewCategoriesContainer: {
		marginTop: '5%',
	},
});
