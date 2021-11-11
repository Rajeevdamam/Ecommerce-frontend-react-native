import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
	message: string;
}

const ErrorComponent = (props: Props) => {
	return (
		<View style={styles.errorContainer}>
			<Text style={styles.errorText}>{props.message}</Text>
		</View>
	);
};

export default ErrorComponent;

const styles = StyleSheet.create({
	errorContainer: {
		alignItems: "center",
	},
	errorText: {
		color: "red",
		fontFamily: "Montserrat-Regular",
	},
});
