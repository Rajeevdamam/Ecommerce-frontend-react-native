import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsAccess from "./../Screens/Admin/ProductsAccess";
import CategoriesAccess from "../Screens/Admin/CategoriesAccess";
import OrdersAccess from "../Screens/Admin/OrdersAccess";
import ProductsForm from "./../Screens/Admin/ProductsForm";
const Stack = createStackNavigator();

const AdminNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
			}}
		>
			<Stack.Screen
				name="Products"
				component={ProductsAccess}
				options={{ title: "Products", headerTitleAlign: "center" }}
			/>
			<Stack.Screen
				name="Category"
				component={CategoriesAccess}
				options={{ title: "Category", headerTitleAlign: "center" }}
			/>
			<Stack.Screen
				name="Orders"
				component={OrdersAccess}
				options={{ title: "Orders", headerTitleAlign: "center" }}
			/>
			<Stack.Screen
				name="ProductsForm"
				component={ProductsForm}
				options={{ title: "Product Form", headerTitleAlign: "center" }}
			/>
		</Stack.Navigator>
	);
};

export default AdminNavigator;

const styles = StyleSheet.create({});
