import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading";
import Toast from "react-native-toast-message";
import MapComponent from "./MapComponent";

const LoactionComponent = () => {
	const [location, setLocation] = useState<any>();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				return;
			}
			try {
				let location = await Location.getCurrentPositionAsync({
					timeInterval: 5000,
				});
				setLocation({
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				});
			} catch (err: any) {
				Toast.show({
					topOffset: 60,
					type: "error",
					text1: "Could not fetch Location!",
					text2: "Please try again Later",
				});
			}
		})();

		return () => {
			setLocation({});
		};
	}, []);

	return (
		<View>
			{!location ? <Loading /> : <MapComponent location={location} />}
		</View>
	);
};

export default LoactionComponent;

const styles = StyleSheet.create({});
