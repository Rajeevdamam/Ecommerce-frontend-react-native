import EvilIcons from "@expo/vector-icons/build/EvilIcons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import colors from "../Constants/colors";

let { width } = Dimensions.get("window");

const BestSellingProducts = (props: any) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.imageContainer}
					source={{
						uri: props.item.image,
					}}
				/>
			</View>
			<View style={styles.detailsContainer}>
				<View>
					<Text>Top Five Products</Text>
				</View>
				<View style={styles.horizonal}>
					<EvilIcons name="star" size={24} color={"orange"} />
					<Text style={styles.rating}>{props.item.rating}</Text>
				</View>
				<View style={styles.horizonal}>
					<Image
						source={{
							uri: "https://cdn-icons-png.flaticon.com/512/3580/3580149.png",
						}}
						style={{ width: 20, height: 20 }}
						resizeMode="contain"
					/>
					<Text style={styles.ratingAggregate}>
						{((props.item.rating / 5) * 100).toFixed(2)}%
					</Text>
				</View>
			</View>
		</View>
	);
};

export default BestSellingProducts;

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		padding: 10,
		justifyContent: "space-around",
		alignItems: "center",
		height: width / 2.6,
		width: width,
	},
	imageContainer: {
		width: width / 2.4,
		height: width / 3,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	horizonal: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	rating: {
		color: "orange",
		fontFamily: "Montserrat-Bold",
	},
	ratingAggregate: {
		color: "#3b6df3",
		fontFamily: "Montserrat-Bold",
	},
	detailsContainer: {
		justifyContent: "space-evenly",
		height: width / 3,
	},
});
