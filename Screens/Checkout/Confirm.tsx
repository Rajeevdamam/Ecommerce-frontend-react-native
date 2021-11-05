import { useToast } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import PaymentSummary from "../../Components/PaymentSummary";
import ShippingSummary from "../../Components/ShippingSummary";
import SvgOrderConfirm from "../../Components/SvgOrderConfirm";
import colors from "../../Constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import OrderSummary from "../../Components/OrderSummary";
import CartItemComponent from "../../Components/CartItemComponent";
import { useSelector } from "react-redux";
import EditShipping from "../../Components/EditShipping";
import { style } from "styled-system";

let { width, height } = Dimensions.get("window");

const Confirm = (props: any) => {
	let cartItem = useSelector((state: any) => state.cartItems.cartData);

	const toast = useToast();

	cartItem = Object.keys(cartItem).map((id: any) => cartItem[id]);

	const totalPrice = cartItem.reduce(
		(a: number, b: any) => a + b.price * b.quantity,
		0
	);

	const shippingDetails = useSelector(
		(state: any) => state.shippingDetails.shippingData
	);

	const paymentDetails = useSelector(
		(state: any) => state.paymentDetails.paymentData
	);

	const openCloseModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const [modal, setModal] = useState(false);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<View style={styles.screen}>
			<View style={{ flex: 1, width: "100%" }}>
				<ScrollView
					contentContainerStyle={{
						alignItems: "center",
						flexGrow: 1,
						justifyContent: "center",
					}}
				>
					<SvgOrderConfirm width={width} height={width / 1.7} />
					<View
						style={{
							width: "100%",
							flex: 1,
							backgroundColor: colors.colorPrimary,
							alignItems: "center",
							marginTop: 10,
						}}
					>
						<Text
							style={{
								alignSelf: "flex-start",
								paddingLeft: 20,
								color: colors.colorSecondary,
								fontSize: 18,
								fontWeight: "bold",
							}}
						>
							Cart Items
						</Text>

						{cartItem.map((item: any) => {
							return (
								<CartItemComponent
									navigation={props.navigation}
									key={item.id}
									item={item}
									style={{ width: "95%" }}
								/>
							);
						})}
					</View>
					<ShippingSummary
						shippingDetails={shippingDetails}
						openCloseModal={openCloseModal}
					/>
					<PaymentSummary
						paymentDetails={paymentDetails}
						navigation={props.navigation}
					/>
					<OrderSummary totalPrice={totalPrice} />
					<View style={styles.container}>
						<CustomButton
							disabled={false}
							styles={styles.confirm}
							styleText={styles.confirmText}
							onPress={() => {}}
							text="Confirm"
						/>
					</View>
				</ScrollView>
			</View>
			<EditShipping
				state={modal}
				closeModal={closeModal}
				shippingDetails={shippingDetails}
			/>
		</View>
	);
};

export default Confirm;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
		alignItems: "center",
	},
	confirm: {
		width: "95%",
	},
	confirmText: {},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		marginVertical: 10,
		alignItems: "center",
		width: "100%",
	},
});
