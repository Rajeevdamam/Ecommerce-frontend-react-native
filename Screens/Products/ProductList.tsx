import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import ProductCard from "./ProductCard";
import Colors from "../../Constants/colors";

interface Props {
	key: string;
	item: any;
	navigation: any;
}

let { width, height } = Dimensions.get("window");

const ProductList = (props: Props) => {
	const { item } = props;

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={styles.grid}
			onPress={() =>
				props.navigation.navigate("Product Detail", { item: item })
			}
		>
			<ProductCard {...item} navigation={props.navigation} />
		</TouchableOpacity>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	grid: {
		height: height / 3,
		width: width / 2 - 20,
		margin: 10,
		overflow: "hidden",
		borderRadius: 15,
		backgroundColor: Colors.colorPrimary,
		shadowColor: "rgb(241,241,241)",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 2,
	},
});
