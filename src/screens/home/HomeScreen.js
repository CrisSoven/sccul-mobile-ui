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

	useEffect(() => {
		const fetchCourses = async () => {
			setIsLoading(true);
			const fetchedCourses = await getCourses();
			setCourses(fetchedCourses);
			setIsLoading(false);
		};
		fetchCourses();
	}, []);

	if (isLoading) {
		return <SplashScreen />;
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<SearchBar />
				<Banner />
				<ScrollViewCategories />
				<FeaturedCourses courses={courses} />
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
