import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../utils/Colors';
import Line from '../common/Line';
import { Icon } from 'react-native-elements';

export default function SurveyCourse({
	survey,
	setQuestions,
	errors,
	values,
	setFieldValue,
	isSurveyCompleted,
}) {
	const handlePress = (questionIndex, answerIndex, setFieldValue) => {
		const answer = {
			answer: answerIndex,
		};
		setFieldValue(`answers[${questionIndex}]`, answer);

		setQuestions((prevQuestions) => {
			const newQuestions = [...prevQuestions];
			newQuestions[questionIndex] = survey.questions[questionIndex];
			return newQuestions;
		});
	};

	return (
		<View>
			{survey.questions.map((question, index) => (
				<>
					<View key={question.id} style={styles.questionContainer}>
						<Text style={styles.question}>{question.question}</Text>
						<View style={styles.questionAspect}>
							<TouchableOpacity
								style={[
									styles.button,
									values?.answers[index]?.answer === 0 &&
										styles.selectedButton,
								]}
								onPress={() =>
									handlePress(index, 0, setFieldValue)
								}
								disabled={isSurveyCompleted}
							>
								<Icon
									name='emoticon-confused-outline'
									type='material-community'
									color={
										values?.answers[index]?.answer === 0
											? Colors.PalleteWhite
											: Colors.PalleteAuxiliarBlue
									}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									values?.answers[index]?.answer === 1 &&
										styles.selectedButton,
								]}
								onPress={() =>
									handlePress(index, 1, setFieldValue)
								}
								disabled={isSurveyCompleted}
							>
								<Icon
									name='emoticon-sad-outline'
									type='material-community'
									color={
										values?.answers[index]?.answer === 1
											? Colors.PalleteWhite
											: Colors.PalleteAuxiliarBlue
									}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									values?.answers[index]?.answer === 2 &&
										styles.selectedButton,
								]}
								onPress={() =>
									handlePress(index, 2, setFieldValue)
								}
								disabled={isSurveyCompleted}
							>
								<Icon
									name='emoticon-neutral-outline'
									type='material-community'
									color={
										values?.answers[index]?.answer === 2
											? Colors.PalleteWhite
											: Colors.PalleteAuxiliarBlue
									}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									values?.answers[index]?.answer === 3 &&
										styles.selectedButton,
								]}
								onPress={() =>
									handlePress(index, 3, setFieldValue)
								}
								disabled={isSurveyCompleted}
							>
								<Icon
									name='emoticon-happy-outline'
									type='material-community'
									color={
										values?.answers[index]?.answer === 3
											? Colors.PalleteWhite
											: Colors.PalleteAuxiliarBlue
									}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									values?.answers[index]?.answer === 4 &&
										styles.selectedButton,
								]}
								onPress={() =>
									handlePress(index, 4, setFieldValue)
								}
								disabled={isSurveyCompleted}
							>
								<Icon
									name='emoticon-excited-outline'
									type='material-community'
									color={
										values?.answers[index]?.answer === 4
											? Colors.PalleteWhite
											: Colors.PalleteAuxiliarBlue
									}
								/>
							</TouchableOpacity>
						</View>
						<View key={`${index}${question.id}`}>
							{errors?.answers?.[index]?.answer && (
								<Text style={styles.error}>
									{errors?.answers?.[index].answer}
								</Text>
							)}
						</View>
					</View>
					<Line key={`${question.id}${index}`} />
				</>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	questionContainer: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
	question: {
		fontSize: 18,
		marginBottom: 15,
		alignSelf: 'center',
	},
	questionAspect: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		flex: 1,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: Colors.PalleteAuxiliarBlue,
		padding: 8,
		marginRight: 15,
		textAlign: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	selectedButton: {
		backgroundColor: Colors.PalleteAuxiliarBlue,
	},
	textBtn: {
		fontSize: 14,
		color: Colors.PalleteAuxiliarBlue,
	},
	textBtnSelected: {
		color: Colors.PalleteWhite,
	},
	error: {
		color: Colors.PalletteRed,
		fontSize: 15,
		marginHorizontal: 20,
		marginTop: 5,
		textAlign: 'center',
		marginTop: 15,
	},
});
