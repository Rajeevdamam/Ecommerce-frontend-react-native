import React from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import Colors from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

let { width, height } = Dimensions.get("window");

const Search = (props: any) => {
	return (
		<View style={styles.searchBar}>
			<Ionicons
				style={{ marginHorizontal: 15 }}
				name="ios-search-outline"
				size={24}
				color="grey"
			/>
			<TextInput
				style={styles.input}
				placeholder="Search"
				onFocus={() => (props.isFocused ? props.isFocused() : null)}
				onBlur={() => (props.onBlurred ? props.onBlurred() : null)}
				onChangeText={props.onChangeText}
				value={props.searchText}
			/>
			<MaterialIcons
				style={{ marginHorizontal: 10 }}
				name="clear"
				size={24}
				color="grey"
				onPress={() => props.onCancel()}
			/>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	searchBar: {
		flexDirection: "row",
		backgroundColor: Colors.colorTeritiary,
		paddingVertical: 18,
		marginVertical: 10,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	input: {
		flex: 1,
		fontFamily: "Montserrat-Regular",
	},
});
