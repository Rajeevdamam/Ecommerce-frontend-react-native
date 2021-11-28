import { Fab } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SvgShippingOptionsComponent from "../../Components/SvgShippingOptions";
import colors from "../../Constants/colors";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

const { width, height } = Dimensions.get("window");

const ShippingOptions = () => {
	return (
		<View style={styles.mainContainer}>
			<SvgShippingOptionsComponent width={width / 2} height={width} />
			<Fab
				style={{ backgroundColor: colors.colorSecondary }}
				position="absolute"
				size="lg"
				icon={
					<MaterialIcons
						name="add-location-alt"
						color={colors.colorPrimary}
						size={30}
					/>
				}
			/>
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
