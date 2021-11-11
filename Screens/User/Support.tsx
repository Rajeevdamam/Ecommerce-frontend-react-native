import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SvgSupportComponent from "../../Components/SvgSupportComponent";
import colors from "../../Constants/colors";

const { width, height } = Dimensions.get("window");

const Support = () => {
	return (
		<View style={styles.mainContainer}>
			<SvgSupportComponent width={width / 2} height={width} />
		</View>
	);
};

export default Support;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.colorPrimary,
	},
});
