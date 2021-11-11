import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./../Screens/User/Login";
import Register from "./../Screens/User/Register";
import UserProfile from "./../Screens/User/UserProfile";
import ForgotPassword from "./../Screens/User/ForgotPassword";
import { useSelector } from "react-redux";
import colors from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import ProfileNavigation from "./ProfileNavigation";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

const UserNavigator = () => {
	const state = useSelector((state: any) => state.userReducer);

	return (
		<Stack.Navigator>
			{!state.isAuthenticated && (
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				></Stack.Screen>
			)}
			{!state.isAuthenticated && (
				<Stack.Screen
					name="Register"
					component={Register}
					options={{ headerShown: false }}
				></Stack.Screen>
			)}
			{!state.isAuthenticated && (
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPassword}
					options={{ headerShown: false }}
				></Stack.Screen>
			)}
			{state.isAuthenticated && (
				<Stack.Screen
					name="ProfileNavigation"
					component={ProfileNavigation}
					options={({ navigation }) => ({
						headerShown: false,
					})}
				></Stack.Screen>
			)}
		</Stack.Navigator>
	);
};

export default UserNavigator;

const styles = StyleSheet.create({});
