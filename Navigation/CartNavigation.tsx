import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../Constants/colors";
import Cart from "./../Screens/Cart/Cart";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CheckoutNavigation from "./CheckoutNavigation";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/Actions/cartActions";
import { isObjEmpty } from "./../Utils/isObjectEmpty";

const Stack = createStackNavigator();

const CartNavigation = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: any) => state.cartItems.cartData);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cart"
				component={Cart}
				options={({ navigation }) => ({
					headerTitleAlign: "center",
					headerTitleStyle: {
						color: colors.colorSecondary,
					},
					headerStyle: {
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
					},
					headerLeft: () => (
						<TouchableOpacity
							style={{
								marginHorizontal: 10,
								borderRadius: 10,
							}}
							onPress={() => navigation.goBack(null)}
						>
							<Ionicons
								name="arrow-back"
								size={30}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
					headerRight: () => (
						<View>
							{!isObjEmpty(state) ? (
								<TouchableOpacity
									style={{
										marginHorizontal: 10,
										borderRadius: 10,
										flexDirection: "row",
										alignItems: "center",
									}}
									onPress={() => dispatch(clearCart())}
								>
									<MaterialIcons name="clear" size={22} color={"red"} />
									<Text style={{ color: "red", fontSize: 14 }}>CLEAR</Text>
								</TouchableOpacity>
							) : (
								<View></View>
							)}
						</View>
					),
				})}
			/>
			<Stack.Screen
				name="Checkout"
				component={CheckoutNavigation}
				options={({ navigation }) => ({
					headerStyle: {
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
					},
					headerShown: false,
					headerTitleStyle: {
						color: colors.colorSecondary,
					},
				})}
			/>
		</Stack.Navigator>
	);
};

export default CartNavigation;

const styles = StyleSheet.create({});
