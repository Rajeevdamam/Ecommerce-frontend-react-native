import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import axios from "axios";
import { Select } from "native-base";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputText from "../../Components/InputText";
import colors from "../../Constants/colors";
import baseURL from "./../../assets/common/baseurl";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../../Components/CustomButton";
import Entypo from "react-native-vector-icons/Entypo";
import ErrorComponent from "../../Components/Error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import mime from "mime";

const ProductsForm = (props: any) => {
	const [title, setTitle] = useState("");
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [inStock, setInStock] = useState("");
	const [image, setImage] = useState("");
	const [mainImage, setMainImage] = useState("");
	const [category, setCategory] = useState("");
	const [categories, setCategories] = useState<any>([]);
	const [rating, setRating] = useState("0");
	const [numReviews, setNumReviews] = useState("0");
	const [token, setToken] = useState("");
	const [error, setError] = useState("");
	const [isFeatured, setIsFeatured] = useState("");
	const [richDescription, setRichDescription] = useState("");
	const [option, setOption] = useState("");

	const [item, setItem] = useState<any>();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!props.route.params) {
			setItem(null);
		} else {
			setItem(props.route.params.item);
			setTitle(props.route.params.item.title);
			setBrand(props.route.params.item.brand);
			setPrice(props.route.params.item.price.toString());
			setDescription(props.route.params.item.description);
			setImage(props.route.params.item.image);
			setMainImage(props.route.params.item.image);
			setCategory(props.route.params.item.category.name);
			setIsFeatured(props.route.params.item.isFeatured.toString());
			setInStock(props.route.params.item.countInStock.toString());
		}

		AsyncStorage.getItem("JWTtoken")
			.then((res: any) => {
				setToken(res);
			})
			.catch((err: any) => {
				console.log(err);
			});

		// categories
		axios
			.get(`${baseURL}category`)
			.then((res: any) => {
				setCategories(res.data.data);
			})
			.catch((err: any) => {
				alert(err.message);
			});

		// Image picker

		(async () => {
			if (Platform.OS !== "web") {
				const { status } = await ImagePicker.requestCameraPermissionsAsync();
				if (status !== "granted") {
					alert("Sorry, we need camera permissions to make this work");
				}
			}
		})();

		return () => {
			setCategories([]);
			setItem("");
			setTitle("");
			setBrand("");
			setPrice("");
			setDescription("");
			setImage("");
			setMainImage("");
			setCategory("");
			setIsFeatured("");
			setInStock("");
		};
	}, [props.route.params]);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [5, 5],
			quality: 1,
		});
		if (!result.cancelled) {
			setMainImage(result.uri);
			setImage(result.uri);
		}
	};

	const addProduct = () => {
		if (
			image === "" ||
			title === "" ||
			brand === "" ||
			price === "" ||
			description === "" ||
			category === "" ||
			inStock === "" ||
			isFeatured === ""
		) {
			setError("Please Provide the details which are marked *");
		}
		setLoading(true);
		let formData = new FormData();

		// const newImageUri = "file:///" + image.split("file:/").join("");

		// console.log("====================================");
		// console.log(newImageUri);
		// console.log("====================================");

		formData.append("image", {
			uri: image,
			type: mime.getType(image),
			name: image.split("/").pop(),
		});
		formData.append("title", title);
		formData.append("brand", brand);
		formData.append("price", price);
		formData.append("description", description);
		formData.append("category", category);
		formData.append("countInStock", inStock);
		formData.append("richDescription", richDescription);
		formData.append("rating", rating);
		formData.append("isFeatured", isFeatured);
		formData.append("numReviews", numReviews);

		console.log(formData);

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		if (item !== null) {
			axios
				.put(`${baseURL}products/${item._id}`, formData, config)
				.then((res: any) => {
					Toast.show({
						topOffset: 60,
						type: "success",
						text1: "Product Updated Successfully",
					});
					setTimeout(() => {
						setLoading(false);
						props.navigation.navigate("Products");
					}, 500);
				})
				.catch((err: any) => {
					setLoading(false);
					Toast.show({
						topOffset: 60,
						type: "error",
						text1: "Something went wrong",
					});
					console.log(err.message);
				});
		} else {
			axios
				.post(`${baseURL}products`, formData, config)
				.then((res: any) => {
					Toast.show({
						topOffset: 60,
						type: "success",
						text1: "Product Added Successfully",
					});
					setTimeout(() => {
						setLoading(false);
						props.navigation.navigate("Products");
					}, 500);
				})
				.catch((err: any) => {
					setLoading(false);
					Toast.show({
						topOffset: 60,
						type: "error",
						text1: "Something went wrong",
					});
					console.log(err.message);
				});
		}
	};

	console.log(option);

	return (
		<View style={styles.mainContainer}>
			<KeyboardAwareScrollView
				contentContainerStyle={{ flexGrow: 1, width: "100%" }}
			>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						resizeMode="contain"
						source={{ uri: mainImage }}
					/>
					{mainImage !== "" && (
						<TouchableOpacity
							onPress={() => setMainImage("")}
							activeOpacity={0.7}
							style={styles.removeImage}
						>
							<Entypo color={colors.colorPrimary} name="cross" size={20} />
						</TouchableOpacity>
					)}
					{mainImage === "" && (
						<TouchableOpacity
							onPress={pickImage}
							activeOpacity={0.7}
							style={styles.imagePicker}
						>
							<MaterialIcons
								color={colors.colorPrimary}
								name="camera-alt"
								size={20}
							/>
						</TouchableOpacity>
					)}
				</View>
				<View style={{ paddingHorizontal: 20 }}>
					<View>
						<Text style={styles.labeltext}>Product Title *</Text>
						<InputText
							placeholder="Product Title"
							value={title}
							onChangeText={(text: string) => setTitle(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Brand *</Text>

						<InputText
							placeholder="Brand"
							value={brand}
							onChangeText={(text: string) => setBrand(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Price *</Text>

						<InputText
							placeholder="Price"
							value={price}
							keyboardType="numeric"
							onChangeText={(text: string) => setPrice(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Description *</Text>

						<InputText
							placeholder="Description"
							value={description}
							onChangeText={(text: string) => setDescription(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Rich Description</Text>

						<InputText
							placeholder="Rich Description"
							value={richDescription}
							onChangeText={(text: string) => setRichDescription(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Is Featured</Text>

						<InputText
							placeholder="Is Featured"
							value={isFeatured}
							onChangeText={(text: any) => setIsFeatured(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Count In Stock *</Text>
						<InputText
							placeholder="Count In Stock"
							value={inStock}
							keyboardType="numeric"
							onChangeText={(text: string) => setInStock(text)}
						/>
					</View>
					<View>
						<Text style={styles.labeltext}>Category *</Text>
						<View
							style={{
								width: "100%",
								backgroundColor: colors.colorTeritiary,
								borderRadius: 10,
							}}
						>
							<Select
								backgroundColor={"transparent"}
								borderWidth={0}
								padding={15}
								fontSize={14}
								placeholder="Category"
								color="black"
								selectedValue={option}
								width={"100%"}
								onValueChange={(itemValue: any) => [
									setOption(itemValue),
									setCategory(itemValue),
								]}
							>
								{categories.map((item: any) => (
									<Select.Item
										key={item._id}
										label={item.name}
										value={item._id}
									/>
								))}
							</Select>
						</View>
					</View>
					{error.length > 0 && <ErrorComponent message={error} />}
					<CustomButton
						loading={loading}
						iconVisible={true}
						disabled={false}
						styles={styles.submit}
						styleText={styles.submitText}
						onPress={addProduct}
						text="Submit"
					/>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default ProductsForm;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	labeltext: {
		color: colors.navIconColor,
		marginLeft: 5,
		fontSize: 16,
		fontFamily: "Montserrat-Regular",
	},
	imageContainer: {
		width: 250,
		height: 250,
		borderStyle: "solid",
		borderWidth: 5,
		padding: 0,
		justifyContent: "center",
		borderRadius: 200,
		borderColor: colors.borderColor,
		alignSelf: "center",
		marginVertical: 10,
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 200,
	},
	imagePicker: {
		position: "absolute",
		right: 15,
		bottom: 5,
		backgroundColor: colors.colorSecondary,
		padding: 10,
		borderRadius: 100,
		elevation: 20,
	},
	removeImage: {
		position: "absolute",
		right: 30,
		top: 10,
		backgroundColor: "red",
		padding: 5,
		borderRadius: 100,
		elevation: 20,
	},
	submit: {
		width: "100%",
		marginVertical: 10,
	},
	submitText: {},
});
