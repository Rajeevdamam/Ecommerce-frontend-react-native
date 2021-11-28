import React, { useState } from "react";
import "react-native-gesture-handler";
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import Colors from "./Constants/colors";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { extendTheme, NativeBaseProvider } from "native-base";
import Toast from "react-native-toast-message";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider as PaperProvider } from "react-native-paper";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = async () => {
	return Font.loadAsync({
		"Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
		"Montserrat-Bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
	});
};

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
	"source.uri should not be an empty string",
]);

const theme = extendTheme({
	components: {
		FAB: {
			baseStyle: {},
			defaultProps: {},
			variants: {},
			sizes: {},
		},
	},
});

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err: any) => console.log(err)}
			/>
		);
	} else {
		return (
			<Provider store={store}>
				<NativeBaseProvider theme={theme}>
					<PaperProvider>
						<View style={styles.container}>
							<Navigation />
							<Toast ref={(ref) => Toast.setRef(ref)} />
						</View>
					</PaperProvider>
				</NativeBaseProvider>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.colorPrimary,
	},
});
