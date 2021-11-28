import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";
import React, { useCallback, useState } from "react";
import {
	Dimensions,
	FlatList,
	Keyboard,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { DataTable } from "react-native-paper";
import Toast from "react-native-toast-message";
import Loading from "../../Components/Loading";
import colors from "../../Constants/colors";
import Search from "./../../Components/Search";
import ListItem from "./ListItem";
import { deleteProduct, getProducts } from "./ProductsOperations";

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
				setSearchText("");
				setToken("");
			});

			return () => {
				setProductList([]);
				setProductFilter([]);
				setLoading(true);
				setSearchText("");
				setToken("");
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

	const handleDelete = (id: string) => {
		deleteProduct(id)
			.then((res: any) => {
				const products = productFilter.filter((item: any) => item._id !== id);
				setProductFilter(products);
			})
			.catch((err: any) => {
				Toast.show({
					topOffset: 60,
					type: "error",
					text1: "Something went wrong",
				});
			});
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
				<Loading />
			) : (
				<View style={{ flex: 1 }}>
					<FlatList
						data={productFilter}
						ListHeaderComponent={ListHeader}
						contentContainerStyle={{ paddingBottom: 10, flexGrow: 1 }}
						stickyHeaderIndices={[0]}
						renderItem={({ item, index }) => (
							<ListItem
								{...item}
								navigation={props.navigation}
								index={index}
								onDelete={handleDelete}
							/>
						)}
						keyExtractor={(item: any) => item._id}
					/>
				</View>
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
		marginHorizontal: 1,
		width: width / 6,
		flex: 1,
		borderRadius: 6,
		paddingVertical: 5,
		paddingHorizontal: 3,
	},
	headerText: {
		fontFamily: "Montserrat-Bold",
		fontSize: 12,
		color: colors.colorSecondary,
	},
});

{
	/* <DataTable>
						<DataTable.Header>
							<DataTable.Title
								style={{ justifyContent: "space-around", padding: 3 }}
							>
								Image
							</DataTable.Title>
							<DataTable.Title
								style={{ justifyContent: "space-around", padding: 3 }}
							>
								Brand
							</DataTable.Title>
							<DataTable.Title
								style={{ justifyContent: "space-around", padding: 3 }}
							>
								Name
							</DataTable.Title>
							<DataTable.Title
								style={{ justifyContent: "space-around", padding: 3 }}
							>
								Category
							</DataTable.Title>
							<DataTable.Title
								style={{ justifyContent: "space-around", padding: 3 }}
								numeric
							>
								Price
							</DataTable.Title>
						</DataTable.Header>

						<FlatList
							data={productFilter}
							contentContainerStyle={{
								paddingBottom: 50,
								flexGrow: 1,
							}}
							renderItem={({ item, index }) => (
								<ListItem
									{...item}
									navigation={props.navigation}
									index={index}
									onDelete={handleDelete}
								/>
							)}
							keyExtractor={(item: any) => item._id}
						/>
					</DataTable> */
}
