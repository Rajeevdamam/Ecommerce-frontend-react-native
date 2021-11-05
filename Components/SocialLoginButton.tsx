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

interface Props {
	image: string;
}

const SocialLoginButton = ({ image }: Props) => {
	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.imageContainer}>
			<Image source={{ uri: image }} style={styles.image} />
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
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		backgroundColor: "transparent",
	},
});
