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
} from "react-native";
import UserDetailList from "../../Components/UserDetailList";
import colors from "../../Constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { logoutUser } from "../../Redux/Actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "./../../assets/common/baseurl";
import { ScrollView } from "react-native-gesture-handler";
import { useDisclose } from "native-base";
import EditProfile from "./../../Components/EditProfile";
import Loading from "../../Components/Loading";

const { width, height } = Dimensions.get("window");

const UserProfile = (props: any) => {
	const dispatch = useDispatch();
	const state = useSelector((state: any) => state.userReducer);
	const [user, setUser] = useState<any>({});
	const [loading, setLoading] = useState(true);
	const { isOpen, onOpen, onClose } = useDisclose();

	useFocusEffect(
		useCallback(() => {
			// if (state.isAuthenticated === false) {
			// 	props.navigation.navigate("Login");
			// }
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
							setLoading(false);
						})
						.catch((err: any) => {
							console.log(err);
							setLoading(false);
						});
				})
				.catch((err: any) => {
					console.log(err);
					setLoading(false);
				});

			BackHandler.addEventListener("hardwareBackPress", onBackPress);
			return () =>
				BackHandler.removeEventListener("hardwareBackPress", onBackPress);
		}, [state.isAuthenticated, isOpen])
	);

	const handleLogout = () => {
		logoutUser(dispatch);
	};

	return (
		<View style={styles.mainContainer}>
			<EditProfile
				onOpen={onOpen}
				isOpen={isOpen}
				onClose={onClose}
				{...user}
			/>

			{loading ? (
				<Loading />
			) : (
				<View style={styles.topContainer}>
					<View style={styles.greetContainer}>
						<Text style={styles.greetText}>Hey {user.name}!</Text>
						<TouchableOpacity
							onPress={onOpen}
							style={{ flexDirection: "row", alignItems: "center" }}
						>
							<Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15 }}>
								EDIT
							</Text>
							<View style={{ marginLeft: 3 }}>
								<AntDesign
									name="edit"
									size={16}
									color={colors.colorSecondary}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.userPhoneAndEmail}>
						<MaterialIcons
							style={{ marginRight: 10 }}
							name="alternate-email"
							size={20}
							color={colors.navIconColor}
						/>
						<Text
							style={{
								color: colors.navIconColor,
								fontFamily: "Montserrat-Regular",
							}}
						>
							{user.email}
						</Text>
					</View>
					<View style={styles.userPhoneAndEmail}>
						<MaterialIcons
							style={{ marginRight: 10 }}
							name="call"
							size={20}
							color={colors.navIconColor}
						/>
						<Text
							style={{
								color: colors.navIconColor,
								fontFamily: "Montserrat-Regular",
							}}
						>
							+91 {user.phone}
						</Text>
					</View>
				</View>
			)}
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={styles.userOptions}>
					<UserDetailList
						image={"https://cdn-icons-png.flaticon.com/512/1169/1169571.png"}
						title="Recent Orders"
						navigation={props.navigation}
						screen="RecentOrders"
					/>
					<UserDetailList
						image={"https://cdn-icons-png.flaticon.com/512/3649/3649210.png"}
						title="My Payment Cards"
						navigation={props.navigation}
						screen="PaymentCards"
					/>
					<UserDetailList
						image={"https://cdn-icons-png.flaticon.com/512/5955/5955557.png"}
						title="Shipping Options"
						navigation={props.navigation}
						screen="ShippingOptions"
					/>
					<UserDetailList
						image={"https://cdn-icons-png.flaticon.com/512/682/682018.png"}
						title="Support"
						navigation={props.navigation}
						screen="Support"
					/>
					<UserDetailList
						image={"https://cdn-icons-png.flaticon.com/512/3104/3104966.png"}
						title="My Offers"
						navigation={props.navigation}
						screen="RecentOrders"
					/>
					<UserDetailList
						image={"https://cdn-icons-png.flaticon.com/128/167/167801.png"}
						title="About"
						navigation={props.navigation}
						screen="AboutPage"
					/>
				</View>
				<View style={styles.footer}>
					<View>
						<TouchableOpacity>
							<Text style={styles.footerText}>Terms of Use</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.footerText}>FAQ's</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity
							activeOpacity={0.8}
							style={styles.logout}
							onPress={() => handleLogout()}
						>
							<Text style={styles.logoutText}>Logout</Text>
							<AntDesign name="poweroff" size={24} color={"red"} />
						</TouchableOpacity>
						<Text style={styles.version}>Version 1.2.0</Text>
					</View>
				</View>
			</ScrollView>
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
		height: width / 3.5,
		paddingHorizontal: 20,
		justifyContent: "space-evenly",
	},
	greetContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	greetText: {
		color: colors.colorSecondary,
		fontSize: 20,
		fontFamily: "Montserrat-Bold",
	},
	userPhoneAndEmail: {
		flexDirection: "row",
		marginTop: 5,
		alignItems: "center",
	},
	userOptions: {
		marginTop: 7,
		backgroundColor: colors.colorPrimary,
		padding: 10,
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
	footer: {
		marginTop: 7,
		backgroundColor: colors.colorPrimary,
		padding: 10,
		flex: 1,
		justifyContent: "space-between",
	},
	logout: {
		flexDirection: "row",
		justifyContent: "center",
		borderColor: colors.colorSecondary,
		borderWidth: 1.5,
		width: "95%",
		borderRadius: 10,
		alignItems: "center",
		paddingVertical: 5,
		alignSelf: "center",
	},
	logoutText: {
		fontSize: 20,
		color: colors.colorSecondary,
		fontFamily: "Montserrat-Bold",
		marginRight: 10,
	},
	version: {
		fontFamily: "Montserrat-Regular",
		fontSize: 14,
		textAlign: "center",
		marginTop: 5,
		color: colors.navIconColor,
	},
	footerText: {
		fontFamily: "Montserrat-Bold",
		fontSize: 17,
		marginTop: 5,
		color: colors.colorSecondary,
	},
	bottomSheetHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		padding: 10,
	},
	bottomSheetHeaderText: {
		flexDirection: "row",
		alignItems: "center",
	},
	headerText: {
		fontSize: 20,
		color: colors.colorSecondary,
		fontWeight: "800",
		marginLeft: 10,
	},
});
