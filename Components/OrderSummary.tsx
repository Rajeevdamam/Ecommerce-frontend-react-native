import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../Constants/colors";

let { width } = Dimensions.get("window");

interface Props {
	totalPrice: any;
}

const OrderSummary = (props: Props) => {
	const { totalPrice } = props;

	const priceWithTax = (parseFloat(totalPrice) * 0.018).toFixed(2);

	const total = (
		parseFloat(totalPrice) +
		parseFloat(priceWithTax) +
		50
	).toFixed(2);

	return (
		<View style={styles.mainContainer}>
			<View>
				<Text style={styles.heading}>Order Summary</Text>
			</View>
			<View>
				<View style={styles.detailsContiner}>
					<Text style={styles.details}>Sub Total</Text>
					<Text style={styles.details}>
						₹{parseFloat(totalPrice).toFixed(2)}
					</Text>
				</View>
				<View style={styles.detailsContiner}>
					<Text style={styles.details}>Shipping Cost</Text>
					<Text style={styles.details}>+ ₹50</Text>
				</View>
				<View style={styles.detailsContiner}>
					<Text style={styles.details}>Tax </Text>
					<Text style={styles.details}>+ ₹{priceWithTax}</Text>
				</View>
			</View>
			<View
				style={{
					width: "100%",
					borderBottomWidth: 1.5,
					marginTop: 10,
					borderBottomColor: "#c9bdd3",
				}}
			></View>
			<View style={styles.total}>
				<Text style={styles.totalText}>Total</Text>
				<Text style={styles.totalPrice}>₹{total}</Text>
			</View>
		</View>
	);
};

export default OrderSummary;

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: colors.shippingSummaryBg,
		height: width / 2,
		width: "95%",
		borderRadius: 20,
		padding: 15,
		justifyContent: "space-around",
		marginTop: 10,
	},
	heading: {
		fontWeight: "bold",
		fontSize: 16,
		color: colors.shippingSummaryTextColor,
	},
	detailsContiner: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	details: {
		color: colors.shippingSummaryTextColor,
		fontSize: 14,
	},
	total: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	totalText: { fontSize: 18, color: colors.shippingSummaryTextColor },
	totalPrice: {
		fontSize: 18,
		color: colors.shippingSummaryTextColor,
		fontWeight: "bold",
	},
});
