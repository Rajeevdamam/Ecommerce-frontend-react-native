import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../Constants/colors";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../Redux/Actions/cartActions";

let { width, height } = Dimensions.get("window");

const ProductCard = (props: any) => {
	const { title, price, image, category, rating, countInStock } = props;

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(props));
		// props.navigation.navigate("My Cart");
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={{
						uri: image
							? image
							: "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
					}}
				/>
				<View style={styles.heartIcon}>
					<Ionicons name="ios-heart-circle-outline" size={30} color="grey" />
				</View>
			</View>
			<View style={styles.productDetails}>
				<View style={styles.titleAndAdd}>
					<Text style={styles.title} numberOfLines={1}>
						{title.length > 12 ? title.substring(0, 12 - 3) + "..." : title}
					</Text>

					<TouchableOpacity
						onPress={() => handleAddToCart()}
						disabled={countInStock < 5}
					>
						<AntDesign
							name="pluscircleo"
							size={24}
							color={Colors.colorSecondary}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.categoryContainer}>
					<Text style={styles.category} numberOfLines={1}>
						{category.name.length > 16
							? category.name.substring(0, 16 - 3) + "..."
							: category.name}
					</Text>
				</View>
				<View style={styles.priceAndRating}>
					<View style={styles.rating}>
						<SimpleLineIcons name="star" size={14} color="orange" />
						<Text style={styles.rate}>{rating}</Text>
					</View>
					<Text style={styles.price}>₹ {price}</Text>
				</View>
			</View>
		</View>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "space-evenly",
		height: width / 2 - 20 - 30,
		flex: 1,
		overflow: "hidden",
	},
	imageContainer: {
		width: "100%",
		height: height / 4 - 20 - 5,
		flex: 2,
		backgroundColor: Colors.colorTeritiary,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	productDetails: {
		width: "100%",
		backgroundColor: Colors.colorPrimary,
		flex: 1,
		paddingVertical: 5,
	},

	title: {
		color: Colors.colorSecondary,
		fontFamily: "Montserrat-Bold",
		fontSize: 14,
	},
	category: {
		color: "grey",
		fontSize: 12,
		fontFamily: "Montserrat-Regular",
	},

	price: {
		fontWeight: "bold",
		fontSize: 14,
		color: "orange",
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
		fontSize: 12,
		fontFamily: "Montserrat-Regular",
		marginHorizontal: 6,
		color: "orange",
	},
	heartIcon: {
		position: "absolute",
		right: 3,
		top: 3,
		// zIndex: 2,
	},
	titleAndAdd: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 6,
		alignItems: "center",
	},
	priceAndRating: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 6,
		alignItems: "center",
	},
	categoryContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 6,
		alignItems: "center",
	},
});
