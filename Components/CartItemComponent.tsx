import AntDesign from "@expo/vector-icons/build/AntDesign";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import colors from "../Constants/colors";
import { addToCart, removeFromCart } from "../Redux/Actions/cartActions";
import { deleteFromCart } from "./../Redux/Actions/cartActions";
import { useRoute } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");

const CartItemComponent = (props: any) => {
	const { title, price, image, category, quantity } = props.item;

	const dispatch = useDispatch();

	const route = useRoute();

	const handleAddToCart = (item: any) => {
		dispatch(addToCart(item));
	};

	const handleRemove = (data: any) => {
		dispatch(removeFromCart(data));
	};

	const handleDelete = (data: any) => {
		dispatch(deleteFromCart(data));
	};

	return (
		<View style={[styles.mainContainer, { ...props.style }]}>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.imageContainer}
				onPress={() =>
					props.navigation.navigate("Product Detail", { item: props.item })
				}
			>
				<Image style={styles.image} source={{ uri: image }} />
			</TouchableOpacity>
			<View style={styles.details}>
				<View style={styles.titleAndDeleteCart}>
					<Text style={styles.title}>
						{title.length > 16 ? title.substring(0, 16 - 3) + "..." : title}
					</Text>
					{route.name !== "Confirm" && (
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => handleDelete(props.item)}
						>
							<AntDesign name="delete" size={24} color="red" />
						</TouchableOpacity>
					)}
				</View>
				<Text style={styles.category}>{category.name}</Text>
				<View style={styles.priceAndQuantity}>
					<Text style={styles.price}>₹ {price}</Text>
					{route.name !== "Confirm" ? (
						<View style={styles.quantityAdjuster}>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => handleRemove(props.item)}
							>
								<AntDesign
									name="minus"
									size={20}
									color={colors.colorSecondary}
								/>
							</TouchableOpacity>

							<Text style={styles.quantity}>{quantity}</Text>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => handleAddToCart(props.item)}
							>
								<AntDesign
									name="plus"
									size={20}
									color={colors.colorSecondary}
								/>
							</TouchableOpacity>
						</View>
					) : (
						<View style={styles.quantityAdjuster}>
							<Text>x {quantity}</Text>
						</View>
					)}
				</View>
			</View>
		</View>
	);
};

export default CartItemComponent;

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
		paddingRight: 10,
		flex: 1,
	},
	category: {
		color: "grey",
		fontSize: 14,
		marginBottom: 5,
	},
	quantityAdjuster: {
		flexDirection: "row",
		backgroundColor: colors.colorPrimary,
		padding: 5,
		borderRadius: 10,
		alignItems: "center",
	},
	price: {
		fontWeight: "bold",
		fontSize: 16,
		color: colors.colorGreen,
	},
	priceAndQuantity: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 5,
	},
	quantity: {
		marginHorizontal: 10,
		fontSize: 16,
		color: colors.colorSecondary,
	},
	titleAndDeleteCart: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
