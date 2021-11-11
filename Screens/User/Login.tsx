import React, { useCallback, useEffect, useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import CustomButton from "../../Components/CustomButton";
import InputText from "../../Components/InputText";
import SocialLoginButton from "../../Components/SocialLoginButton";
import colors from "../../Constants/colors";
import SvgLoginComponent from "./../../Components/SvgLoginComponent";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import ErrorComponent from "../../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Actions/authAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

let { height, width } = Dimensions.get("window");

const Login = (props: any) => {
	const [email, setEmail] = useState("");
	const [forgot, setForgot] = useState(true);
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

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

	return (
		<View style={styles.mainContainer}>
			<KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
						<SocialLoginButton image="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png" />
						<SocialLoginButton image="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Pic.png" />
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
