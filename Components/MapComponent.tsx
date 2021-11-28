import React, { useState } from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import MapView,{Marker} from "react-native-maps";
import { MAPS_API_KEY } from "./../Constants/env";

const { width, height } = Dimensions.get("window");


const MapComponent = (props: any) => {
	// const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.latitude},${props.location.longitude}&key=${MAPS_API_KEY}`;
	const [selectedLocation, setselectedLocation] = useState<any>()
	const imagePreview =
		"https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyBINOd6aXFjFoutntzlO6EmuPPfkRhfcys";

	const mapRegion={
		latitude:props.location.latitude,
		longitude:props.location.longitude,latitudeDelta:0.0922,longitudeDelta:0.0421,
	}

	const selectLoctionHandler=(event:any)=>{
		setselectedLocation({
			lat:event.nativeEvent.coordinate.latitude,
			lng:event.nativeEvent.coordinate.longitude
		})
	}

	let marker:any;

	if(selectedLocation){
		marker={
			latitude:selectedLocation.lat,
			longitude:selectedLocation.lng
		}
	}

	return (
		<View style={styles.mapPreview}>
			{/* <Image
				source={{ uri: imagePreview }}
				style={styles.mapImage}
				resizeMode="contain"
			/> */}

			<MapView style={styles.mapImage} region={mapRegion} onPress={selectLoctionHandler}>
				{marker && <Marker title="Picked location" coordinate={marker}/>}
			</MapView>
		</View>
	);
};

export default MapComponent;

const styles = StyleSheet.create({
	mapPreview: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: height/2,
	},
	mapImage: {
		width: "100%",
		height: "100%",
	},
});
