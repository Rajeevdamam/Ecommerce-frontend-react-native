import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import colors from "../Constants/colors";

const CartBadge = () => {
	const state = useSelector((state: any) => state.cartItems.cartData);

	const numItemsInCart = Object.keys(state).length;

	return (
		<View style={{ position: "absolute" }}>
			{numItemsInCart > 0 && (
				<Badge
					value={numItemsInCart}
					badgeStyle={{
						backgroundColor: colors.colorSecondary,
					}}
					containerStyle={{ position: "absolute", top: -4, left: 20 }}
				/>
			)}
		</View>
	);
};

export default CartBadge;

const styles = StyleSheet.create({});
