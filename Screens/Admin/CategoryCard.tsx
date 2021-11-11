import React from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import colors from "../../Constants/colors";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const { width, height } = Dimensions.get("window");

const CategoryCard = (props: any) => {
	const { addProduct } = props;
	return (
		<View style={styles.mainContainer}>
			{!addProduct ? (
				<View>
					<View style={styles.imageContainer}>
						<Image
							resizeMode="cover"
							style={styles.image}
							source={{ uri: props.image }}
						/>
					</View>
					<Text
						style={{
							fontFamily: "Montserrat-Bold",
							marginTop: 10,
							textAlign: "center",
						}}
					>
						{props.name}
					</Text>
				</View>
			) : (
				<TouchableOpacity>
					<View style={styles.imageContainer}>
						<Image
							resizeMode="cover"
							style={styles.image}
							source={{
								uri: "https://cdn-icons-png.flaticon.com/128/864/864380.png",
							}}
						/>
					</View>
					<Text
						style={{
							fontFamily: "Montserrat-Bold",
							marginTop: 10,
							textAlign: "center",
						}}
					>
						Add
					</Text>
				</TouchableOpacity>
			)}
			{!addProduct && (
				<TouchableOpacity style={styles.settings}>
					<Icon name="settings" color={colors.colorSecondary} size={22} />
				</TouchableOpacity>
			)}
		</View>
	);
};

export default CategoryCard;

const styles = StyleSheet.create({
	mainContainer: {
		position: "relative",
		borderWidth: 0.7,
		borderColor: colors.colorSecondary,
		borderRadius: 6,
		height: width / 2.3,
		width: width / 2.3,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageContainer: {
		width: width / 6,
		height: width / 6,
		alignSelf: "center",
	},
	settings: { position: "absolute", top: 10, right: 10 },
});
