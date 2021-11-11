import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../Constants/colors";
import { useRoute } from "@react-navigation/native";
import { HStack, Spinner } from "native-base";

const CustomButton = (props: any) => {
	const route = useRoute();
	return (
		<TouchableOpacity
			disabled={props.disabled}
			activeOpacity={0.8}
			style={[styles.submit, { ...props.styles }]}
			onPress={() => props.onPress()}
		>
			{!props.loading && (
				<Text style={[styles.submitText, { ...props.styleText }]}>
					{props.text}
				</Text>
			)}
			{props.loading && (
				<HStack space={2} alignItems="center">
					<Spinner
						accessibilityLabel="Loading posts"
						color={colors.colorPrimary}
						size="lg"
					/>
				</HStack>
			)}
			{props.iconVisible && !props.loading && (
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
		fontFamily: "Montserrat-Bold",
		marginRight: 10,
	},
});
