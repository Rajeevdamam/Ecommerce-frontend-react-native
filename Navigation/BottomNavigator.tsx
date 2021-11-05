import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../Constants/colors";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import RootNavigator from "./RootNavigator";
import CartNavigation from "./CartNavigation";
import CartBadge from "../Components/CartBadge";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
	const state = useSelector((state: any) => state.userReducer);

	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarActiveTintColor: colors.colorSecondary,
				tabBarInactiveTintColor: colors.navIconColor,
				tabBarShowLabel: false,
				headerShown: false,
				tabBarHideOnKeyboard: true,
			}}
		>
			<BottomTab.Screen
				name="HomeScreen"
				component={RootNavigator}
				options={({ navigation, route }) => ({
					tabBarIcon: ({ color }) => (
						<Icon
							name="home"
							style={{ position: "relative" }}
							color={color}
							size={28}
						/>
					),
					tabBarStyle: {
						display:
							getFocusedRouteNameFromRoute(route) == "Product Detail"
								? "none"
								: "flex",
					},
				})}
			/>

			<BottomTab.Screen
				name="My Cart"
				component={CartNavigation}
				options={({ route }) => ({
					tabBarIcon: ({ color }) => (
						<View>
							<Icon2 name="shoppingcart" color={color} size={30} />
							<CartBadge />
						</View>
					),
					tabBarStyle: { display: "none" },
				})}
			/>

			{state.userProfile.isAdmin && (
				<BottomTab.Screen
					name="Admin"
					component={AdminNavigator}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon
								name="settings"
								style={{ position: "relative" }}
								color={color}
								size={28}
							/>
						),
					}}
				/>
			)}

			<BottomTab.Screen
				name="User"
				component={UserNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon
							name="user"
							style={{ position: "relative" }}
							color={color}
							size={28}
						/>
					),
					tabBarStyle: { display: "none" },
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default BottomNavigator;

const styles = StyleSheet.create({});
