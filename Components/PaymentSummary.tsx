import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import colors from "../Constants/colors";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

let { width } = Dimensions.get("window");

const PaymentSummary = (props: any) => {
	const { paymentDetails } = props;

	return (
		<View style={styles.mainContainer}>
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>Payment Details</Text>
				<TouchableOpacity
					onPress={() => {
						props.navigation.navigate("Payment");
					}}
				>
					<MaterialIcons
						name="edit"
						color={colors.paySummaryTextColor}
						size={22}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.detailsContiner}>
				<SimpleLineIcons
					name="credit-card"
					size={24}
					color={colors.paySummaryTextColor}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						flex: 1,
						alignItems: "center",
					}}
				>
					<Text style={styles.details}>
						{paymentDetails.cardNumber || paymentDetails.cardDetail}
					</Text>
					<Text style={styles.details}>
						{paymentDetails.expiry || paymentDetails.name}
					</Text>
					<Text style={styles.details}>{paymentDetails.cardName || "NA"} </Text>
				</View>
			</View>
		</View>
	);
};

export default PaymentSummary;

const styles = StyleSheet.create({
	mainContainer: {
		marginTop: 10,
		backgroundColor: colors.paySummaryBgColor,
		height: width / 3.5,
		width: "95%",
		borderRadius: 20,
		padding: 15,
		justifyContent: "space-around",
	},
	heading: {
		fontFamily: "Montserrat-Bold",
		fontSize: 16,
		color: colors.paySummaryTextColor,
	},
	detailsContiner: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	details: {
		color: colors.paySummaryTextColor,
		marginLeft: 10,
		fontSize: 12,
		fontFamily: "Montserrat-Regular",
	},
	headingContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
