import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/common/SearchBar';
import Banner from '../../components/home/Banner';
import ScrollViewCategories from '../../components/home/ScrollViewCategories';
import FeaturedCourses from '../../components/FeaturedCourses';
import SplashScreen from '../sccul/SplashScreen';
import { getCourses } from '../../utils/Axios';

export default function HomeScreen() {
	const [courses, setCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [inputText, setInputText] = useState('');

	useEffect(() => {
		const fetchCourses = async () => {
			setIsLoading(true);
			const fetchedCourses = await getCourses();
			setCourses(fetchedCourses);
			setIsLoading(false);
		};
		fetchCourses();
	}, []);

	const listOfCourses = () => {
		if (inputText === '') {
			return courses;
		}

		return courses.filter((course) => {
			return course.name.toLowerCase().includes(inputText.toLowerCase());
		});
	};

	if (isLoading) {
		return <SplashScreen />;
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<SearchBar setInputValue={setInputText} value={inputText} />
				<Banner />
				<ScrollViewCategories />
				<FeaturedCourses courses={listOfCourses()} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
});
