import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import colors from "../Constants/colors";

let { width, height } = Dimensions.get("window");

const PaymentMethod = (props: any) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: props.imageUri }} />
			</View>
			<View style={styles.paymentMethodDetail}>
				<Text style={styles.paymentType}>{props.paymentType}</Text>
				{props.cardDetail.length > 0 && (
					<Text style={styles.cardNumber}>{props.cardDetail}</Text>
				)}
			</View>
			<View>{props.children}</View>
		</View>
	);
};

export default PaymentMethod;

const styles = StyleSheet.create({
	imageContainer: {
		width: width / 7,
		height: height / 14,
		backgroundColor: colors.colorPrimary,
		margin: 10,
		borderRadius: 15,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		backgroundColor: "transparent",
	},
	mainContainer: {
		flexDirection: "row",
		borderRadius: 15,
		marginTop: 10,
		backgroundColor: colors.colorTeritiary,
		padding: 2,
		width: width / 1.2,
		height: width / 5,
		justifyContent: "center",
		alignItems: "center",
	},
	paymentMethodDetail: {
		flex: 1,
	},
	paymentType: {
		color: colors.colorSecondary,
		fontFamily: "Montserrat-Bold",
		fontSize: 15,
	},
	cardNumber: {
		color: "grey",
		fontFamily: "Montserrat-Regular",
	},
});
