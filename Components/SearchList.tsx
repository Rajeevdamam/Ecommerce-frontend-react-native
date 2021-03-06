import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import SearchedComponent from "./SearchedComponent";
import { useRoute } from "@react-navigation/native";

const SearchList = (props: any) => {
	const { data, searchText } = props;

	return (
		<View style={{ width: "100%", flex: 1 }}>
			{data.length ? (
				<FlatList
					contentContainerStyle={{
						alignItems: "center",
						paddingBottom: 10,
					}}
					data={data}
					style={{ backgroundColor: Colors.colorPrimary }}
					renderItem={({ item }: any) => (
						<SearchedComponent
							key={item.id}
							item={item}
							navigation={props.navigation}
						/>
					)}
					keyExtractor={(item: any) => item._id}
				/>
			) : (
				<Text
					style={{
						fontSize: 16,
						textAlign: "center",
						color: "grey",
						fontFamily: "Montserrat-Regular",
					}}
				>
					No Products found for "
					<Text style={{ fontFamily: "Montserrat-Bold" }}>{searchText}</Text>"
				</Text>
			)}
		</View>
	);
};

export default SearchList;

const styles = StyleSheet.create({});
