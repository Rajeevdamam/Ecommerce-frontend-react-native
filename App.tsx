import React from "react";
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import Colors from "./Constants/colors";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { NativeBaseProvider } from "native-base";
import { setCustomText } from "react-native-global-props";
import Toast from "react-native-toast-message";

const customTextProps = {
	style: {
		fontFamily: "sans-serif",
	},
};

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
]);

setCustomText(customTextProps);

export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider>
				<View style={styles.container}>
					<Navigation />
					<Toast ref={(ref) => Toast.setRef(ref)} />
				</View>
			</NativeBaseProvider>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.colorPrimary,
	},
});
