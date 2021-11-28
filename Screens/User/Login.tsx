import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../Components/CustomButton";
import ErrorComponent from "../../Components/Error";
import InputText from "../../Components/InputText";
import SocialLoginButton from "../../Components/SocialLoginButton";
import colors from "../../Constants/colors";
import { loginUser, socialLogin } from "../../Redux/Actions/authAction";
import SvgLoginComponent from "./../../Components/SvgLoginComponent";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { FB_ANDROID_LOGIN_KEY, IOS_LOGIN_API_KEY } from "../../Constants/env";
import { ANDROID_LOGIN_API_KEY } from "./../../Constants/env";
import Toast from "react-native-toast-message";

let { height, width } = Dimensions.get("window");

const Login = (props: any) => {
	const [email, setEmail] = useState("");
	const [forgot, setForgot] = useState(true);
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [googleLoading, setGoogleLoading] = useState(false);
	const [fbLoading, setFbLoading] = useState(false);

	const dispatch = useDispatch();
	const state = useSelector((state: any) => state.userReducer);

	const navigateToForgot = () => {
		props.navigation.navigate("ForgotPassword");
	};

	const onFocus = () => {
		if (password.length === 0) {
			setForgot(false);
		}
	};

	const onBlur = () => {
		if (password.length === 0) {
			setForgot(true);
		}
	};

	// useFocusEffect(
	// 	useCallback(() => {
	// 		if (state.isAuthenticated === true) {
	// 			props.navigation.navigate("ProfileNavigation");
	// 		}
	// 	}, [state.isAuthenticated])
	// );

	const onLogin = () => {
		const user = {
			email,
			passwordHash: password,
		};

		if (email === "" || password === "") {
			setError("Please fill in your credentials");
		} else {
			setLoading(true);
			loginUser(dispatch, user, setLoading, setEmail, setPassword);
			setError("");
		}
	};

	const googleLogin = async () => {
		console.log("LoginScreen.js 6 | loggin in");
		setGoogleLoading(true);
		try {
			const res = await Google.logInAsync({
				iosClientId: IOS_LOGIN_API_KEY,
				androidClientId: ANDROID_LOGIN_API_KEY,
			});

			if (res.type === "success") {
				const user = {
					email: res.user.email,
					name: res.user.name,
					id: res.user.id,
					image: res.user.photoUrl,
					phone: 9999999999,
				};
				socialLogin(dispatch, user, setGoogleLoading);

				// Then you can use the Google REST API
				console.log("LoginScreen.js 17 | success, navigating to profile");
			}
		} catch (error: any) {
			console.log("LoginScreen.js 19 | error with login", error.response.data);
		}
	};

	// const facebookLogIn = async () => {
	// 	try {
	// 		await Facebook.initializeAsync({
	// 			appId: FB_ANDROID_LOGIN_KEY,
	// 		});

	// 		const res = await Facebook.logInWithReadPermissionsAsync({
	// 			permissions: ["public_profile"],
	// 		});
	// 		if (res.type === "success") {
	// 			// Get the user's name using Facebook's Graph API
	// 			fetch(
	// 				`https://graph.facebook.com/me?access_token=${res.token}&fields=id,name,email,picture.height(500)`
	// 			)
	// 				.then((response) => response.json())
	// 				.then((data) => {
	// 					console.log(data);
	// 				})
	// 				.catch((e) => console.log(e));
	// 		} else {
	// 			// type === 'cancel'
	// 		}
	// 	} catch ({ message }) {
	// 		alert(`Facebook Login Error: ${message}`);
	// 	}
	// };

	const facebookLogIn = () => {
		Toast.show({
			topOffset: 60,
			type: "info",
			text1: "This login method is coming soon!",
		});
	};

	return (
		<View style={styles.mainContainer}>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{ flexGrow: 1 }}
			>
				<SvgLoginComponent width={width} height={height / 2.2} />
				<TouchableOpacity
					style={{
						top: 50,
						position: "absolute",
						left: 20,
					}}
					onPress={() => props.navigation.goBack(null)}
				>
					<Ionicons name="arrow-back" size={30} color={colors.colorSecondary} />
				</TouchableOpacity>
				<View style={styles.formContainer}>
					<Text style={styles.loginHeading}>Login</Text>
					<InputText
						icon="alternate-email"
						placeholder="Email"
						keyboardType={"email-address"}
						value={email}
						onChangeText={(text: string) => setEmail(text)}
					/>
					<InputText
						icon="lock-outline"
						placeholder="Password"
						forgot={forgot}
						onFocus={onFocus}
						onPress={navigateToForgot}
						onBlur={onBlur}
						secureTextEntry={true}
						value={password}
						onChangeText={(text: string) => setPassword(text)}
					/>
					{error.length > 0 && <ErrorComponent message={error} />}
					<CustomButton
						loading={loading}
						iconVisible={false}
						disabled={false}
						styles={{
							width: "100%",
							marginTop: 10,
						}}
						styleText={{}}
						onPress={onLogin}
						text="Login"
					/>
					<Text style={styles.lightTextContent}>Or, Login with...</Text>

					<View style={styles.socialLoginContainer}>
						<SocialLoginButton
							image="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png"
							googleLogin={googleLogin}
							type="google"
							loading={googleLoading}
						/>
						<SocialLoginButton
							image="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Pic.png"
							facebookLogIn={facebookLogIn}
							type="facebook"
							loading={fbLoading}
						/>
					</View>
					<View style={styles.center}>
						<Text style={styles.lightTextContent}>New to our shop? </Text>
						<TouchableOpacity
							onPress={() => props.navigation.navigate("Register")}
						>
							<Text
								style={{
									color: colors.colorSecondary,
									fontFamily: "Montserrat-Bold",
								}}
							>
								Register.
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	loginHeading: {
		fontSize: 28,
		fontFamily: "Montserrat-Bold",
		marginBottom: 10,
		alignSelf: "center",
		color: colors.colorSecondary,
	},
	formContainer: {
		paddingHorizontal: 20,
	},
	socialLoginContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	lightTextContent: {
		alignSelf: "center",
		marginVertical: 20,
		color: colors.navIconColor,
		fontFamily: "Montserrat-Regular",
	},
	center: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
