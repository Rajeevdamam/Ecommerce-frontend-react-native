import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
	BackHandler,
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import UserDetailList from "../../Components/UserDetailList";
import colors from "../../Constants/colors";
import OrderImage from "../../assets/Delivery-cuate.png";
import PaymentImage from "../../assets/Mobile-payments-pana.png";
import ShippingImage from "../../assets/Shipping-details-rafiki.png";
import ProfileImage from "../../assets/Profile-data-rafiki.png";
import AboutImage from "../../assets/about.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import { logoutUser } from "../../Redux/Actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "./../../assets/common/baseurl";

const Order_Image = Image.resolveAssetSource(OrderImage).uri;
const Payment_Image = Image.resolveAssetSource(PaymentImage).uri;
const Shipping_Image = Image.resolveAssetSource(ShippingImage).uri;
const Profile_Image = Image.resolveAssetSource(ProfileImage).uri;
const About_Image = Image.resolveAssetSource(AboutImage).uri;

const { width, height } = Dimensions.get("window");

const UserProfile = (props: any) => {
	const dispatch = useDispatch();
	const state = useSelector((state: any) => state.userReducer);
	const [user, setUser] = useState<any>({});

	useFocusEffect(
		useCallback(() => {
			if (state.isAuthenticated === false) {
				props.navigation.navigate("Login");
			}
			const onBackPress = () => {
				props.navigation.navigate("Home");
				return true;
			};

			AsyncStorage.getItem("JWTtoken")
				.then((res: any) => {
					axios
						.get(`${baseURL}user/get/${state.loggedInUser}`, {
							headers: { Authorization: `Bearer ${res}` },
						})
						.then((user: any) => {
							setUser(user.data.data);
						})
						.catch((err: any) => {
							console.log(err);
						});
				})
				.catch((err: any) => {
					console.log(err);
				});

			BackHandler.addEventListener("hardwareBackPress", onBackPress);
			return () =>
				BackHandler.removeEventListener("hardwareBackPress", onBackPress);
		}, [state.isAuthenticated])
	);

	const handleLogout = () => {
		logoutUser(dispatch);
		props.navigation.navigate("Login");
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<View style={styles.greetContainer}>
					<Text style={styles.greetText}>Hey There!</Text>
					<TouchableOpacity>
						<Text>EDIT</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.userPhone}>
					<MaterialIcons
						style={{ marginRight: 10 }}
						name="call"
						size={22}
						color={colors.navIconColor}
					/>
					<Text style={{ color: colors.navIconColor }}>+91 {user.phone}</Text>
				</View>
			</View>

			<View style={styles.userOptions}>
				<UserDetailList image={Order_Image} title="Recent Orders" />
				<UserDetailList image={Payment_Image} title="My Payment Methods" />
				<UserDetailList image={Shipping_Image} title="Shipping Details" />
				<UserDetailList image={Profile_Image} title="Profile Details" />
				<UserDetailList image={About_Image} title="About" />
				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.logoutContainer}
					onPress={() => handleLogout()}
				>
					<View style={styles.iconContainer}>
						<AntDesign
							name="poweroff"
							size={24}
							color={colors.colorSecondary}
						/>
					</View>
					<Text style={{ marginLeft: 10, color: colors.colorSecondary }}>
						Log Out
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default UserProfile;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	topContainer: {
		backgroundColor: colors.colorPrimary,
		height: width / 4,
		paddingHorizontal: 20,
		justifyContent: "center",
	},
	greetContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	greetText: {
		color: colors.colorSecondary,
		fontSize: 20,
		fontWeight: "900",
	},
	userPhone: {
		flexDirection: "row",
		marginTop: 5,
	},
	userOptions: {
		marginTop: 7,
		flex: 1,
		backgroundColor: colors.colorPrimary,
		paddingHorizontal: 10,
	},
	logoutContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 15,
	},
	iconContainer: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
});
