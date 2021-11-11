import { Heading, HStack, Spinner } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../Constants/colors";
import { getCategories } from "./CategoriesOperations";
import CategoryCard from "./CategoryCard";

const { width, height } = Dimensions.get("window");

const CategoriesAccess = (props: any) => {
	const [categories, setCategories] = useState<any>([]);
	const [categoryName, setCategoryName] = useState("");
	const [token, setToken] = useState("");
	const [loading, setLoading] = useState(true);

	const length = categories.length;

	useEffect(() => {
		getCategories()
			.then((res: any) => {
				setLoading(false);
				setCategories(res.data.data);
			})
			.catch((err: any) => {
				console.log(err.message);
				setLoading(false);
			});
		return () => {
			setLoading(true);
			setCategories([]);
		};
	}, []);

	return (
		<View style={styles.mainContainer}>
			{loading ? (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<HStack space={2} alignItems="center">
						<Spinner
							accessibilityLabel="Loading posts"
							color={colors.colorSecondary}
							size="lg"
						/>
						<Heading color={colors.colorSecondary} fontSize="lg">
							Loading
						</Heading>
					</HStack>
				</View>
			) : (
				<View style={{ alignItems: "center" }}>
					<FlatList
						data={[...categories, { addProduct: true }]}
						numColumns={2}
						contentContainerStyle={{
							justifyContent: "space-between",
							flexGrow: 1,
							width: "100%",
						}}
						renderItem={({ item }) => <CategoryCard {...item} />}
						keyExtractor={(item: any) => item._id}
					/>
				</View>
			)}
			<View></View>
		</View>
	);
};

export default CategoriesAccess;

const styles = StyleSheet.create({
	mainContainer: {
		position: "relative",
		height: "100%",
		backgroundColor: colors.colorPrimary,
	},
});
