import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonComponent from '../common/ButtonComponent'

export default function TitleBtnComponent({ textTitle, titleStyle, icon, textBtn, iconType, btnPrimary, onPress, loading = false }) {
	return (
		<View style={styles.container}>
			<Text style={titleStyle}>{textTitle}</Text>
			<View style={styles.buttonContainer}>
			<ButtonComponent
				icon={icon}
				title={textBtn}
				type={iconType}
				btnPrimary={btnPrimary}
				onPress={onPress}
				loading={loading}
			/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 20,
		marginHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});
