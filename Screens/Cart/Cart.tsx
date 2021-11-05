import React, { useEffect, useState } from "react";
import {
	Dimensions,
	ScrollView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
} from "react-native";
import colors from "../../Constants/colors";
import CartItemComponent from "./../../Components/CartItemComponent";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { useSelector } from "react-redux";
import SvgEmptyCartComponent from "../../Components/SvgEmptyCartComponent";
import CustomButton from "../../Components/CustomButton";
import { isObjEmpty } from "./../../Utils/isObjectEmpty";

let { width, height } = Dimensions.get("window");

const Cart = (props: any) => {
	let items = useSelector((state: any) => state.cartItems.cartData);

	items = Object.keys(items).map((id: any) => items[id]);

	const totalPrice = items.reduce(
		(a: number, b: any) => a + b.price * b.quantity,
		0
	);

	const shippingDetails = useSelector(
		(state: any) => state.shippingDetails.shippingData
	);

	const paymentDetails = useSelector(
		(state: any) => state.paymentDetails.paymentData
	);

	const moveToCheckout = () => {
		if (!isObjEmpty(shippingDetails)) {
			if (!isObjEmpty(paymentDetails)) {
				setTimeout(() => {
					props.navigation.navigate("Checkout", { screen: "Confirm" });
				}, 500);
			} else {
				setTimeout(() => {
					props.navigation.navigate("Checkout", { screen: "Payment" });
				}, 500);
			}
		} else {
			props.navigation.navigate("Checkout");
		}
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<View
			style={{ width: "100%", flex: 1, backgroundColor: colors.colorPrimary }}
		>
			<ScrollView
				contentContainerStyle={{
					alignItems: "center",
				}}
			>
				{items.length > 0 ? (
					items.map((item: any) => (
						<CartItemComponent
							navigation={props.navigation}
							key={item.id}
							item={item}
						/>
					))
				) : (
					<View
						style={{
							alignItems: "center",
						}}
					>
						<SvgEmptyCartComponent width={width / 2} height={width} />
						<Text style={styles.emptyCartText}>Your cart is Empty</Text>
					</View>
				)}
			</ScrollView>
			<View style={styles.totalAndCheckout}>
				<View style={styles.total}>
					<Text style={styles.totalText}>Total</Text>
					<Text style={styles.totalPrice}>
						₹ {parseFloat(totalPrice).toFixed(2)}
					</Text>
				</View>

				<CustomButton
					disabled={items.length === 0}
					styles={styles.checkout}
					styleText={styles.checkoutText}
					onPress={moveToCheckout}
					text="Checkout"
				/>
			</View>
		</View>
	);
};

export default Cart;

const styles = StyleSheet.create({
	totalAndCheckout: {
		paddingHorizontal: 15,
		marginVertical: 15,
	},
	total: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	totalText: { fontSize: 24 },
	totalPrice: { fontSize: 24, color: colors.colorGreen, fontWeight: "bold" },
	checkout: {},
	checkoutText: {},
	emptyCartText: {
		fontSize: 20,
		color: colors.colorSecondary,
		fontWeight: "bold",
	},
});
