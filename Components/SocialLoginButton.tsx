import { HStack, Spinner } from "native-base";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import colors from "../Constants/colors";

let { width, height } = Dimensions.get("window");

const SocialLoginButton = ({
	image,
	googleLogin,
	type,
	facebookLogIn,
	loading,
}: any) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			style={styles.imageContainer}
			onPress={() => (type == "google" ? googleLogin() : facebookLogIn())}
		>
			{loading ? (
				<HStack space={2} alignItems="center">
					<Spinner
						accessibilityLabel="Loading posts"
						color={type === "google" ? "warning.500" : "blue.500"}
						size="lg"
					/>
				</HStack>
			) : (
				<Image source={{ uri: image }} style={styles.image} />
			)}
		</TouchableOpacity>
	);
};

export default SocialLoginButton;

const styles = StyleSheet.create({
	imageContainer: {
		width: "48%",
		height: height / 14,
		backgroundColor: colors.colorTeritiary,
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		backgroundColor: "transparent",
	},
});
