import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../Constants/colors";
import { useRoute } from "@react-navigation/native";

const CustomButton = (props: any) => {
	const route = useRoute();
	return (
		<TouchableOpacity
			disabled={props.disabled}
			activeOpacity={0.8}
			style={[styles.submit, { ...props.styles }]}
			onPress={() => props.onPress()}
		>
			<Text style={[styles.submitText, { ...props.styleText }]}>
				{props.text}
			</Text>
			{route.name !== "Login" && route.name !== "Register" && (
				<AntDesign name="checkcircle" size={30} color={colors.colorGreen} />
			)}
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	submit: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: colors.colorSecondary,
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	submitText: {
		fontSize: 20,
		color: colors.colorPrimary,
		fontWeight: "bold",
		marginRight: 10,
	},
});
