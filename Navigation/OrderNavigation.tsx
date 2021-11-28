import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import ManageOrder from "../Screens/Admin/ManageOrder";
import OrdersAccess from "./../Screens/Admin/OrdersAccess";

const Stack = createStackNavigator();

const OrderNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName="Orders"
			screenOptions={{
				headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
			}}
		>
			<Stack.Screen
				name="Orders"
				component={OrdersAccess}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="ManageOrder"
				component={ManageOrder}
				options={{
					headerTitle: "Manage Order",
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default OrderNavigation;

const styles = StyleSheet.create({});
