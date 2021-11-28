import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { Fab } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../../Constants/colors";
import SvgPaymentCardsComponent from "./../../Components/SvgPaymentCards";

const { width, height } = Dimensions.get("window");

const PaymentCards = () => {
	return (
		<View style={styles.mainContainer}>
			<SvgPaymentCardsComponent width={width / 2} height={width} />
			<Fab
				style={{ backgroundColor: colors.colorSecondary }}
				position="absolute"
				size="lg"
				icon={
					<MaterialCommunityIcons
						name="credit-card-plus-outline"
						color={colors.colorPrimary}
						size={30}
					/>
				}
			/>
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
