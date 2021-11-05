import SimpleLineIcons from "@expo/vector-icons/build/SimpleLineIcons";
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

const SearchedComponent = (props: any) => {
	const { title, price, image, category, rating } = props.item;

	return (
		<TouchableOpacity
			style={styles.mainContainer}
			activeOpacity={0.7}
			onPress={() =>
				props.navigation.navigate("Product Detail", { item: props.item })
			}
		>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: image }} />
			</View>
			<View style={styles.details}>
				<Text style={styles.title}>
					{title.length > 20 ? title.substring(0, 20 - 3) + "..." : title}
				</Text>
				<Text style={styles.category}>{category.name}</Text>
				<View style={styles.priceAndRating}>
					<Text style={styles.price}>₹ {price}</Text>
					<View style={styles.rating}>
						<SimpleLineIcons name="star" size={16} color="orange" />
						<Text style={styles.rate}>{rating}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default SearchedComponent;

const styles = StyleSheet.create({
	mainContainer: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.colorTeritiary,
		marginTop: 10,
		borderRadius: 15,
	},
	imageContainer: {
		width: width / 4,
		height: height / 7.5,
		backgroundColor: colors.colorPrimary,
		margin: 10,
		borderRadius: 15,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		backgroundColor: "transparent",
	},
	title: {
		color: colors.colorSecondary,
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 5,
	},
	details: {
		paddingHorizontal: 6,
		flex: 1,
	},
	category: {
		color: "grey",
		fontSize: 14,
		marginBottom: 5,
	},
	rating: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "rgba(255,170,102,0.2)",
		paddingHorizontal: 6,
		borderRadius: 10,
	},
	rate: {
		fontSize: 14,
		marginHorizontal: 3,
		color: "orange",
	},
	price: {
		fontWeight: "bold",
		fontSize: 16,
		color: "orange",
	},
	priceAndRating: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 5,
	},
});
