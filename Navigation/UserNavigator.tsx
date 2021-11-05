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

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

const UserNavigator = () => {
	const state = useSelector((state: any) => state.userReducer);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			></Stack.Screen>
			<Stack.Screen
				name="Register"
				component={Register}
				options={{ headerShown: false }}
			></Stack.Screen>
			<Stack.Screen
				name="UserProfile"
				component={UserProfile}
				options={({ navigation }) => ({
					headerTitle: "",
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
				name="ForgotPassword"
				component={ForgotPassword}
				options={{ headerShown: false }}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default UserNavigator;

const styles = StyleSheet.create({});
