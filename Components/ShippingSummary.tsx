import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import colors from "../Constants/colors";

let { width } = Dimensions.get("window");

interface Props {
	shippingDetails: any;
	openCloseModal: any;
}

const ShippingSummary = ({ shippingDetails, openCloseModal }: Props) => {
	const { shippingAddress1, shippingAddress2, zip, phone, city, country } =
		shippingDetails;

	return (
		<View style={styles.mainContainer}>
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>Shipping Information</Text>
				<TouchableOpacity onPress={() => openCloseModal()}>
					<MaterialIcons
						name="edit"
						color={colors.shippingSummaryTextColor}
						size={22}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.detailsContiner}>
				<SimpleLineIcons
					name="user"
					size={24}
					color={colors.shippingSummaryTextColor}
				/>
				<Text style={styles.details}>Someone</Text>
			</View>
			<View style={styles.detailsContiner}>
				<SimpleLineIcons
					name="location-pin"
					size={24}
					color={colors.shippingSummaryTextColor}
				/>
				<Text style={styles.details}>
					{shippingAddress1 +
						", " +
						shippingAddress2 +
						", " +
						city +
						"-" +
						zip +
						", " +
						country}
				</Text>
			</View>
			<View style={styles.detailsContiner}>
				<SimpleLineIcons
					name="phone"
					size={22}
					color={colors.shippingSummaryTextColor}
				/>
				<Text style={styles.details}>+91 {phone}</Text>
			</View>
		</View>
	);
};

export default ShippingSummary;

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
		fontFamily: "Montserrat-Bold",
		fontSize: 16,
		color: colors.shippingSummaryTextColor,
	},
	detailsContiner: {
		flexDirection: "row",
		alignItems: "center",
	},
	details: {
		color: colors.shippingSummaryTextColor,
		marginLeft: 10,
		flex: 1,
		fontSize: 14,
		fontFamily: "Montserrat-Regular",
	},
	headingContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
