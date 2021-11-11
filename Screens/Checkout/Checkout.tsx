import AntDesign from "@expo/vector-icons/build/AntDesign";
import React, { useEffect, useRef, useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import InputText from "../../Components/InputText";
import SvgShippingComponent from "../../Components/SvgShippingComponent";
import colors from "../../Constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Select, useToast } from "native-base";
import countries from "../../assets/countries.json";
import { useDispatch, useSelector } from "react-redux";
import cartItems from "./../../Redux/Reducers/cartItem";
import CustomButton from "../../Components/CustomButton";
import { addToShipping } from "./../../Redux/Actions/ShippingActions";
import { isObjEmpty } from "../../Utils/isObjectEmpty";

let { width, height } = Dimensions.get("window");

const Checkout = (props: any) => {
	const [orderItems, setOrderItems] = useState<any>();
	const [address, setAddress] = useState<any>();
	const [address2, setAddress2] = useState<any>();
	const [city, setCity] = useState<any>();
	const [zip, setZip] = useState<any>();
	const [country, setCountry] = useState<any>();
	const [phone, setPhone] = useState<any>();
	const [user, setUser] = useState<any>();

	const [loading, setLoading] = useState(false);

	const cartData = useSelector((state: any) => state.cartItems.cartData);

	const shippingDetails = useSelector(
		(state: any) => state.shippingDetails.shippingData
	);

	const paymentDetails = useSelector(
		(state: any) => state.paymentDetails.paymentData
	);

	const dispatch = useDispatch();

	const toast = useToast();

	useEffect(() => {
		setOrderItems(cartData);
		return () => {
			setOrderItems({});
		};
	}, []);

	const checkOut = () => {
		setLoading(true);
		if (!isObjEmpty(shippingDetails)) {
			if (!isObjEmpty(paymentDetails)) {
				setTimeout(() => {
					setLoading(false);
					props.navigation.navigate("Confirm");
				}, 500);
			} else {
				setTimeout(() => {
					setLoading(false);
					props.navigation.navigate("Payment");
				}, 500);
			}
		} else if (city && country && phone && address && address2 && zip) {
			const shipping = {
				city,
				country,
				dateOrdered: Date.now(),
				phone,
				shippingAddress1: address,
				shippingAddress2: address2,
				zip,
			};
			dispatch(addToShipping(shipping));
			setTimeout(() => {
				setLoading(false);
				props.navigation.navigate("Payment");
			}, 500);
		} else {
			setLoading(false);
			toast.show({
				title: "Please Fill all details",
				placement: "bottom",
			});
		}
	};

	return (
		<View style={styles.screen}>
			<SvgShippingComponent width={width / 2} height={width / 2} />

			<View style={styles.formContainer}>
				<View style={{ width: "100%", flex: 1 }}>
					<Text style={styles.shippingHeading}>Shipping Details</Text>
					<KeyboardAwareScrollView
						viewIsInsideTabBar={true}
						enableOnAndroid={false}
						extraScrollHeight={10}
						contentContainerStyle={{
							width: "100%",
							alignItems: "center",
							paddingHorizontal: 20,
							paddingVertical: 10,
						}}
						style={{ position: "relative" }}
					>
						<InputText
							placeholder="Phone"
							keyboardType={"numeric"}
							value={phone}
							onChangeText={(text: any) => {
								if (text.length <= 10) setPhone(text);
							}}
						/>
						<InputText
							placeholder="Shipping Address 1"
							value={address}
							onChangeText={(text: string) => setAddress(text)}
						/>
						<InputText
							placeholder="Shipping Address 2"
							value={address2}
							onChangeText={(text: string) => setAddress2(text)}
						/>
						<InputText
							placeholder="City"
							value={city}
							onChangeText={(text: string) => setCity(text)}
						/>
						<InputText
							placeholder="Zip Code"
							value={zip}
							keyboardType={"numeric"}
							onChangeText={(text: string) => {
								if (text.length <= 8) setZip(text);
							}}
						/>
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
								placeholder="Country"
								color="black"
								selectedValue={country}
								width={"100%"}
								onValueChange={(itemValue: string) => setCountry(itemValue)}
							>
								{countries.map((item: any) => (
									<Select.Item
										key={item.code}
										label={item.name}
										value={item.name}
									/>
								))}
							</Select>
						</View>

						<CustomButton
							loading={loading}
							iconVisible={true}
							disabled={false}
							styles={styles.submit}
							styleText={styles.submitText}
							onPress={checkOut}
							text="Submit"
						/>
					</KeyboardAwareScrollView>
				</View>
			</View>
		</View>
	);
};

export default Checkout;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.colorTeritiary,
		alignItems: "center",
	},

	shippingHeading: {
		color: colors.colorSecondary,
		fontFamily: "Montserrat-Bold",
		fontSize: 20,
		marginBottom: 10,
		textAlign: "center",
		marginTop: 10,
	},
	formContainer: {
		marginTop: 10,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: colors.colorPrimary,
		width: "100%",
		flex: 1,
		alignItems: "center",
		position: "relative",
	},
	submit: {
		width: "100%",
		marginTop: 10,
	},
	submitText: {},
});
