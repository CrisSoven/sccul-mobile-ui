import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ButtonComponent from '../common/ButtonComponent';

export default function TitleBtnComponent(props) {
	const {
		textTitle,
		titleStyle,
		icon,
		textBtn,
		iconType,
		btnPrimary,
		onPress,
		loading = false,
	} = props;
	return (
		<View style={styles.container}>
			<Text style={titleStyle}>{textTitle}</Text>
			<ButtonComponent
				icon={icon}
				title={textBtn}
				type={iconType}
				btnPrimary={btnPrimary}
				onPress={onPress}
				loading={loading}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 20,
    marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
