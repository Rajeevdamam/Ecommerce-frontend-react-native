import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";
import BottomNavigator from "./BottomNavigator";

const Navigation = () => {
	return (
		<NavigationContainer>
			{/* <RootNavigator /> */}
			<BottomNavigator />
		</NavigationContainer>
	);
};

export default Navigation;

const styles = StyleSheet.create({});
