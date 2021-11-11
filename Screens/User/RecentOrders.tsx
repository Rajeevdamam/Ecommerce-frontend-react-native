import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../../Constants/colors";
import SvgRecentOrdersComponent from "../../Components/SvgRecentOrders";

const { width, height } = Dimensions.get("window");

const RecentOrders = () => {
	return (
		<View style={styles.mainContainer}>
			<SvgRecentOrdersComponent width={width / 2} height={width} />
		</View>
	);
};

export default RecentOrders;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.colorPrimary,
	},
});
