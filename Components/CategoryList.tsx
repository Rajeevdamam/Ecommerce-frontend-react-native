import React from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import Colors from "../Constants/colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryList = (props: any) => {
	const { categories, active } = props;

	return (
		<FlatList
			horizontal
			bounces
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 10 }}
			data={categories}
			renderItem={({ item }: any) => (
				<TouchableOpacity
					style={
						active == props.categories.indexOf(item)
							? styles.categoryActive
							: styles.category
					}
					onPress={() => {
						props.filterCategory(item.name),
							props.setActive(props.categories.indexOf(item));
					}}
					activeOpacity={0.9}
				>
					{item.name === "Garden" ? (
						<MaterialCommunityIcons
							name={item.icon}
							color={
								active == props.categories.indexOf(item)
									? Colors.colorTeritiary
									: Colors.colorSecondary
							}
							size={24}
						/>
					) : (
						<MaterialIcons
							name={item.icon}
							color={
								active == props.categories.indexOf(item)
									? Colors.colorTeritiary
									: Colors.colorSecondary
							}
							size={24}
						/>
					)}
					<Text
						style={
							active == props.categories.indexOf(item)
								? styles.categoryTitleActive
								: styles.categoryTitle
						}
					>
						{item.name}
					</Text>
				</TouchableOpacity>
			)}
			keyExtractor={(item: any) => item._id}
		/>
	);
};

export default CategoryList;

const styles = StyleSheet.create({
	category: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: Colors.colorTeritiary,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: Colors.borderColor,
		marginVertical: 10,
		marginLeft: 8,
	},
	categoryTitle: {
		color: Colors.colorSecondary,
		fontFamily: "Montserrat-Regular",
	},
	categoryActive: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: Colors.colorSecondary,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: Colors.borderColor,
		marginVertical: 10,
		marginLeft: 8,
	},
	categoryTitleActive: {
		color: Colors.colorTeritiary,
		fontFamily: "Montserrat-Regular",
	},
});
