import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-elements";
import Swiper from "react-native-swiper";
import colors from "../../Constants/colors";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../Redux/Actions/cartActions";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ProductDetail = (props: any) => {
	const [productImages, setProductImages] = useState<string[]>([]);
	const [item, setItem] = useState(props.route.params.item);
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(addToCart(item));
		props.navigation.navigate("My Cart");
	};

	useEffect(() => {
		setProductImages([item.image, item.image, item.image]);
		return () => {
			setProductImages([]);
		};
	}, []);
	return (
		<View style={{ flex: 1, backgroundColor: colors.colorPrimary }}>
			<ScrollView style={{ flex: 1 }}>
				<View
					style={{
						backgroundColor: colors.colorTeritiary,
						borderBottomLeftRadius: 70,
						borderBottomRightRadius: 70,
						overflow: "hidden",
					}}
				>
					<Swiper
						style={styles.swiper}
						showsButtons={false}
						autoplay={false}
						dotColor={colors.colorPrimary}
						activeDotColor={colors.colorSecondary}
					>
						{productImages.map((item: any) => {
							return (
								<Image
									key={item}
									style={styles.image}
									resizeMode="contain"
									source={{ uri: item }}
								/>
							);
						})}
					</Swiper>
				</View>
				<View style={styles.nameRatingAndPriceContainer}>
					<Text style={{ color: "grey" }}>{item.category.name}</Text>
					<Text style={styles.productTitle}>{item.title}</Text>
					<View style={styles.rating}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Text style={styles.rate}>{item.rating}</Text>
							<View>
								<Rating
									type="star"
									startingValue={item.rating}
									ratingCount={5}
									imageSize={22}
									style={{ alignSelf: "flex-start" }}
								/>
							</View>
						</View>

						<Text style={{ color: colors.colorSecondary }}>
							({item.numReviews} Reviews)
						</Text>
					</View>
					<View style={styles.priceAndStock}>
						<Text style={styles.price}>₹ {item.price}</Text>
						{item.countInStock >= 5 ? (
							<Text style={styles.stockStatus}>Available In Stock</Text>
						) : (
							<Text style={styles.outOfStockStatus}>Out Of Stock</Text>
						)}
					</View>
				</View>

				<View style={styles.descriptionContainer}>
					<Text style={styles.descriptionHeader}>Description</Text>
					<Text style={styles.description}>{item.description}</Text>
				</View>
			</ScrollView>
			<View style={styles.bottomContainer}>
				<TouchableOpacity activeOpacity={0.7} style={styles.addToFavorites}>
					<Icon name="hearto" size={30} color={colors.colorSecondary} />
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.addToCart}
					disabled={item.countInStock < 5}
					onPress={() => handleAddToCart()}
				>
					<Text style={styles.addToCartText}>Add To Cart</Text>
					<View style={styles.cartIcon}>
						<Icon name="shoppingcart" size={24} color={colors.colorSecondary} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProductDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.colorTeritiary,
	},
	swiper: {
		height: height / 2,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: "100%",
		width: "80%",
		alignSelf: "center",
	},
	productTitle: {
		fontSize: 22,
		fontWeight: "bold",
		color: colors.colorSecondary,
	},
	nameRatingAndPriceContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
		height: width / 3,
		justifyContent: "space-between",
	},
	rating: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	priceAndStock: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	price: {
		fontWeight: "bold",
		fontSize: 16,
		color: "orange",
	},
	stockStatus: {
		color: colors.colorGreen,
	},
	outOfStockStatus: {
		color: "red",
	},
	descriptionHeader: {
		fontSize: 18,
		fontWeight: "bold",
		color: colors.colorSecondary,
	},
	descriptionContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
	description: {
		marginVertical: 10,
		textAlign: "justify",
		color: "grey",
	},
	bottomContainer: {
		flexDirection: "row",
		marginVertical: 10,
		justifyContent: "space-around",
		alignItems: "center",
	},
	addToFavorites: {
		borderRadius: 50,
		padding: 20,
		shadowColor: "rgb(241,241,241)",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 5,
		backgroundColor: colors.colorPrimary,
		flexWrap: "nowrap",
	},
	addToCart: {
		flexDirection: "row",
		backgroundColor: colors.colorSecondary,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "space-around",
		width: width / 1.5,
	},
	addToCartText: {
		color: colors.colorPrimary,
		fontSize: 18,
		fontWeight: "bold",
	},
	cartIcon: {
		borderRadius: 50,
		padding: 10,
		backgroundColor: colors.colorPrimary,
	},
	rate: {
		marginRight: 10,
		fontSize: 20,
		fontWeight: "bold",
	},
});