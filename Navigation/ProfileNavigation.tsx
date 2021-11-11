import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import RecentOrders from "../Screens/User/RecentOrders";
import { Ionicons } from "@expo/vector-icons";
import UserProfile from "../Screens/User/UserProfile";
import colors from "../Constants/colors";
import ShippingOptions from "../Screens/User/ShippingOptions";
import AboutPage from "../Screens/User/AboutPage";
import PaymentCards from "../Screens/User/PaymentCards";
import Support from "../Screens/User/Support";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

const ProfileNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="UserProfile"
				component={UserProfile}
				options={({ navigation }) => ({
					headerTitle: "",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerStyle: {
						backgroundColor: colors.colorPrimary,
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
						height: height / 10,
					},
					headerLeft: () => (
						<TouchableOpacity
							style={{ marginLeft: 10, marginTop: 10 }}
							onPress={() => navigation.navigate("Home")}
						>
							<Ionicons
								name="arrow-back"
								size={24}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			></Stack.Screen>
			<Stack.Screen
				name="RecentOrders"
				component={RecentOrders}
				options={{
					headerTitle: "Recent Orders",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
				}}
			></Stack.Screen>

			<Stack.Screen
				name="PaymentCards"
				component={PaymentCards}
				options={{
					headerTitle: "Payment Cards",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
				}}
			></Stack.Screen>

			<Stack.Screen
				name="ShippingOptions"
				component={ShippingOptions}
				options={{
					headerTitle: "Shipping Options",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
				}}
			></Stack.Screen>

			<Stack.Screen
				name="Support"
				component={Support}
				options={{
					headerTitle: "Support",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
				}}
			></Stack.Screen>

			<Stack.Screen
				name="AboutPage"
				component={AboutPage}
				options={{
					headerTitle: "About Page",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
				}}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
