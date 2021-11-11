import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Checkout from "./../Screens/Checkout/Checkout";
import Confirm from "./../Screens/Checkout/Confirm";
import Payment from "./../Screens/Checkout/Payment";
import colors from "../Constants/colors";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createStackNavigator();

const CheckoutNavigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Shipping"
				component={Checkout}
				options={{
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: colors.colorPrimary,
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
					},
				}}
			/>

			<Tab.Screen
				name="Payment"
				component={Payment}
				options={{
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: colors.colorPrimary,
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
					},
				}}
			/>

			<Tab.Screen
				name="Confirm"
				component={Confirm}
				options={{
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: colors.colorPrimary,
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default CheckoutNavigation;

const styles = StyleSheet.create({});
