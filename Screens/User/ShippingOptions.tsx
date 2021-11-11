import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SvgShippingOptionsComponent from "../../Components/SvgShippingOptions";
import colors from "../../Constants/colors";

const { width, height } = Dimensions.get("window");

const ShippingOptions = () => {
	return (
		<View style={styles.mainContainer}>
			<SvgShippingOptionsComponent width={width / 2} height={width} />
		</View>
	);
};

export default ShippingOptions;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.colorPrimary,
	},
});
