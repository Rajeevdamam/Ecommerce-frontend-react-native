import React, { useState, useCallback } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
	Dimensions,
	Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProducts } from "./ProductsOperations";
import Search from "./../../Components/Search";
import colors from "../../Constants/colors";
import { Heading, HStack, Spinner } from "native-base";
import ListItem from "./ListItem";

const { width, height } = Dimensions.get("window");

const ListHeader = () => {
	return (
		<View style={styles.listHeader}>
			<View
				style={[styles.headerItem, { backgroundColor: colors.colorTeritiary }]}
			>
				<Text style={styles.headerText}>Image</Text>
			</View>
			<View
				style={[styles.headerItem, { backgroundColor: colors.colorTeritiary }]}
			>
				<Text style={styles.headerText}>Brand</Text>
			</View>
			<View
				style={[styles.headerItem, { backgroundColor: colors.colorTeritiary }]}
			>
				<Text style={styles.headerText}>Name</Text>
			</View>
			<View
				style={[styles.headerItem, { backgroundColor: colors.colorTeritiary }]}
			>
				<Text style={styles.headerText}>Category</Text>
			</View>
			<View
				style={[styles.headerItem, { backgroundColor: colors.colorTeritiary }]}
			>
				<Text style={styles.headerText}>Price</Text>
			</View>
		</View>
	);
};

const ProductsAccess = (props: any) => {
	const [productList, setProductList] = useState<any>([]);
	const [productFilter, setProductFilter] = useState<any>([]);
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState("");
	const [searchText, setSearchText] = useState("");

	useFocusEffect(
		useCallback(() => {
			AsyncStorage.getItem("JWTtoken")
				.then((res: any) => {
					setToken(res);
				})
				.catch((err: any) => {
					console.log(err);
				});

			getProducts().then((res: any) => {
				setProductList(res.data.data);
				setProductFilter(res.data.data);
				setLoading(false);
			});

			return () => {
				setProductList([]);
				setProductFilter([]);
				setLoading(true);
			};
		}, [])
	);

	const onCancel = () => {
		Keyboard.dismiss();
		setSearchText("");
		setProductFilter(productList);
	};

	const onSearch = (text: string) => {
		setSearchText(text);
		if (text === "") {
			setProductFilter(productList);
		} else {
			setProductFilter(
				productList.filter((item: any) =>
					item.title.toLowerCase().includes(text.toLowerCase())
				)
			);
		}
	};

	return (
		<View style={styles.mainContainer}>
			<View style={{ width: "100%", backgroundColor: colors.colorPrimary }}>
				<Search
					onChangeText={onSearch}
					onCancel={onCancel}
					searchText={searchText}
				/>
			</View>
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
				<FlatList
					data={productFilter}
					ListHeaderComponent={ListHeader}
					contentContainerStyle={{ paddingBottom: 10, flexGrow: 1 }}
					renderItem={({ item, index }) => (
						<ListItem {...item} navigation={props.navigation} index={index} />
					)}
					keyExtractor={(item: any) => item._id}
				/>
			)}
		</View>
	);
};

export default ProductsAccess;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	listHeader: {
		flexDirection: "row",
		paddingHorizontal: 1,
	},
	headerItem: {
		margin: 1,
		width: width / 6,
		flex: 1,
		borderRadius: 6,
		paddingVertical: 5,
		paddingHorizontal: 3,
	},
	headerText: {
		fontWeight: "700",
		color: colors.colorSecondary,
	},
});
