import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../../Constants/colors";
import SvgPaymentCardsComponent from "./../../Components/SvgPaymentCards";

const { width, height } = Dimensions.get("window");

const PaymentCards = () => {
	return (
		<View style={styles.mainContainer}>
			<SvgPaymentCardsComponent width={width / 2} height={width} />
		</View>
	);
};

export default PaymentCards;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.colorPrimary,
	},
});
