import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductContainer from "./../Screens/Products/ProductContainer";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import Colors from "../Constants/colors";
import ProductDetail from "./../Screens/Products/ProductDetail";
import colors from "../Constants/colors";

const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
			}}
		>
			<Stack.Screen
				name="Home"
				component={ProductContainer}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<View
							style={{
								marginLeft: 10,
							}}
						>
							<AntDesign
								name="appstore-o"
								size={24}
								color={Colors.colorSecondary}
							/>
						</View>
					),
					headerRight: () => (
						<View
							style={{
								marginRight: 10,
							}}
						>
							<Avatar
								rounded
								size={35}
								source={{
									uri: "https://www.w3schools.com/w3images/avatar2.png",
								}}
							/>
						</View>
					),
				}}
			/>

			<Stack.Screen
				name="Product Detail"
				component={ProductDetail}
				options={({ navigation, route }) => ({
					headerTitleAlign: "center",
					headerStatusBarHeight: Dimensions.get("window").width / 7,
					headerStyle: {
						backgroundColor: colors.colorTeritiary,
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
					},
					headerTitleStyle: {
						color: colors.colorSecondary,
						fontFamily: "Montserrat-Bold",
					},
					headerLeft: () => (
						<TouchableOpacity
							style={{
								margin: 15,
								padding: 10,
								borderRadius: 10,
								backgroundColor: colors.colorPrimary,
							}}
							onPress={() => navigation.goBack(null)}
						>
							<Ionicons
								name="arrow-back"
								size={30}
								color={Colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
					headerRight: () => (
						<TouchableOpacity
							style={{
								margin: 15,
								padding: 10,
								borderRadius: 10,
								backgroundColor: colors.colorPrimary,
							}}
						>
							<MaterialCommunityIcons
								size={30}
								name="dots-vertical"
								color={Colors.colorSecondary}
							/>
						</TouchableOpacity>
					),
				})}
			/>
		</Stack.Navigator>
	);
};

export default RootNavigator;

const styles = StyleSheet.create({});
