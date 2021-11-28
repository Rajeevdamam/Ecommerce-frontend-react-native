import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ProductsAccess from "./../Screens/Admin/ProductsAccess";
import CategoriesAccess from "../Screens/Admin/CategoriesAccess";
import OrdersAccess from "../Screens/Admin/OrdersAccess";
import ProductsForm from "./../Screens/Admin/ProductsForm";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../Constants/colors";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../Screens/Admin/Dashboard";
import OrderNavigation from "./OrderNavigation";

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const AdminNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
				drawerActiveBackgroundColor: colors.secondaryTransparent,
				drawerActiveTintColor: colors.colorPrimary,
				drawerInactiveTintColor: colors.colorSecondary,
				drawerItemStyle: {
					borderRadius: 7,
				},
			}}
		>
			<Drawer.Screen
				name="Dashboard"
				component={Dashboard}
				options={({ navigation }) => ({
					title: "Dashboard",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerLeft: () => (
						<TouchableOpacity
							style={{
								marginLeft: 10,
							}}
							onPress={() => navigation.openDrawer()}
						>
							<AntDesign
								name="appstore-o"
								size={24}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			/>

			<Drawer.Screen
				name="Products"
				component={ProductsAccess}
				options={({ navigation }) => ({
					title: "Products",
					headerTitleAlign: "center",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerLeft: () => (
						<TouchableOpacity
							style={{
								marginLeft: 10,
							}}
							onPress={() => navigation.openDrawer()}
						>
							<AntDesign
								name="appstore-o"
								size={24}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			/>
			<Drawer.Screen
				name="Category"
				component={CategoriesAccess}
				options={({ navigation }) => ({
					title: "Category",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerLeft: () => (
						<TouchableOpacity
							style={{
								marginLeft: 10,
							}}
							onPress={() => navigation.openDrawer()}
						>
							<AntDesign
								name="appstore-o"
								size={24}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			/>
			<Drawer.Screen
				name="Order Access"
				component={OrderNavigation}
				options={({ navigation }) => ({
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerLeft: () => (
						<TouchableOpacity
							style={{
								marginLeft: 10,
							}}
							onPress={() => navigation.openDrawer()}
						>
							<AntDesign
								name="appstore-o"
								size={24}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			/>
			<Drawer.Screen
				name="ProductsForm"
				component={ProductsForm}
				options={({ navigation }) => ({
					title: "Product Form",
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerLeft: () => (
						<TouchableOpacity
							style={{
								marginLeft: 10,
							}}
							onPress={() => navigation.openDrawer()}
						>
							<AntDesign
								name="appstore-o"
								size={24}
								color={colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			/>
		</Drawer.Navigator>
	);
};

export default AdminNavigator;

const styles = StyleSheet.create({});
