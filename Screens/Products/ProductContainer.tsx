import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { useFocusEffect } from "@react-navigation/core";
import React, { useCallback, useState } from "react";
import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Banner from "../../Components/Banner";
import CategoryList from "../../Components/CategoryList";
import Loading from "../../Components/Loading";
import Search from "../../Components/Search";
import SearchList from "../../Components/SearchList";
import Colors from "../../Constants/colors";
import ProductList from "./ProductList";
import { getProductCategories, getProducts } from "./Products";

let { width } = Dimensions.get("window");

const ProductContainer = (props: any) => {
	const [products, setProducts] = useState<any>([]);
	const [focused, setFocused] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [searchResult, setSearchResult] = useState<any>([]);
	const [initialState, setInitialState] = useState([]);
	const [productCategory, setProductCategory] = useState<any>([]);
	const [active, setActive] = useState<any>();
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	const isFocused = () => {
		setFocused(true);
	};

	const onBlurred = () => {
		Keyboard.dismiss();
	};

	const onCancel = () => {
		setFocused(false);
		setSearchText("");
	};

	const searchProduct = (text: string) => {
		setSearchText(text);
		setSearchResult(
			products.filter((product: any) =>
				product.title.toLowerCase().includes(text.toLowerCase())
			)
		);
	};

	const filterCategory = (category: string) => {
		category == "All"
			? [setProductCategory(initialState), setActive(true)]
			: [
					setProductCategory(
						products.filter(
							(product: any) => product.category.name === category
						)
					),
					setActive(true),
			  ];
	};

	useFocusEffect(
		useCallback(() => {
			setFocused(false);
			setLoading(true);
			getProducts()
				.then((res: any) => {
					setProducts(res.data.data);
					setProductCategory(res.data.data);
					setInitialState(res.data.data);
					setLoading(false);
				})
				.catch((err: any) => {
					console.log(err.message);
					setLoading(false);
				});

			getProductCategories()
				.then((res: any) => {
					setCategories(res.data.data);
					setLoading(false);
				})
				.catch((err: any) => {
					console.log(err.message);
					setLoading(false);
				});

			setActive(0);
			return () => {
				setProducts([]);
				setFocused(false);
				setSearchResult([]);
				setInitialState([]);
				setCategories([]);
				setActive(null);
				setProductCategory([]);
			};
		}, [])
	);

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				backgroundColor: Colors.colorPrimary,
			}}
		>
			{!focused && (
				<View style={styles.quoteContainer}>
					<Text style={styles.quote}>Best Place To Find Your Products</Text>
				</View>
			)}
			<View style={styles.searchAndFilter}>
				<View style={{ flex: 1 }}>
					<Search
						isFocused={isFocused}
						onBlurred={onBlurred}
						onChangeText={searchProduct}
						onCancel={onCancel}
						searchText={searchText}
					/>
				</View>
				{!focused && (
					<View>
						<FontAwesome
							style={styles.filter}
							name="sliders"
							size={24}
							color="grey"
						/>
					</View>
				)}
			</View>

			{focused == true ? (
				<SearchList
					data={searchResult}
					searchText={searchText}
					navigation={props.navigation}
				/>
			) : (
				<>
					{loading ? (
						<Loading />
					) : (
						<ScrollView
							keyboardShouldPersistTaps="always"
							keyboardDismissMode="on-drag"
						>
							<View>
								<Banner />
							</View>

							<View>
								<Text style={styles.categoryText}>Categories</Text>
								<CategoryList
									categories={categories}
									filterCategory={filterCategory}
									productCategory={productCategory}
									active={active}
									setActive={setActive}
								/>
							</View>

							{!focused && productCategory.length > 0 ? (
								<View
									style={{
										backgroundColor: Colors.colorPrimary,
										justifyContent: "space-between",
										flexDirection: "row",
										flexWrap: "wrap",
										flex: 1,
									}}
								>
									{productCategory.map((item: any) => {
										return (
											<ProductList
												key={item._id}
												item={item}
												navigation={props.navigation}
											/>
										);
									})}
								</View>
							) : (
								<View>
									<Text
										style={{
											fontFamily: "Montserrat-Regular",
											fontSize: 16,
											textAlign: "center",
											color: "grey",
										}}
									>
										No Products found
									</Text>
								</View>
							)}
						</ScrollView>
					)}
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	quote: {
		color: Colors.colorSecondary,
		fontSize: 26,
		padding: 0,
		fontFamily: "Montserrat-Bold",
	},
	quoteContainer: {
		width: width / 1.2,
		margin: 10,
		alignSelf: "flex-start",
		alignItems: "flex-start",
	},
	searchAndFilter: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-around",
	},
	filter: {
		backgroundColor: Colors.colorTeritiary,
		padding: 20,
		borderRadius: 10,
		marginRight: 10,
	},

	categoryText: {
		color: Colors.colorSecondary,
		fontSize: 22,
		fontFamily: "Montserrat-Bold",
		paddingHorizontal: 10,
	},
});

export default ProductContainer;

/* {!focused && (
					<FlatList
						key={"#"}
						numColumns={2}
						contentContainerStyle={{
							justifyContent: "center",
							alignItems: "center",
						}}
						style={{ width: "100%", backgroundColor: Colors.colorPrimary }}
						data={products}
						renderItem={({ item }: any) => (
							<ProductList key={item.id} item={item} />
						)}
						keyExtractor={(item: any) => "#" + item.id}
					/>
				)} */
