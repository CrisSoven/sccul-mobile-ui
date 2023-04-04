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
			<View style={styles.column}>
				<Text style={titleStyle}>{textTitle}</Text>
			</View>
			<View style={styles.column}>
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
		flexGlow: 1,
		paddingTop: 20,
		paddingLeft: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
