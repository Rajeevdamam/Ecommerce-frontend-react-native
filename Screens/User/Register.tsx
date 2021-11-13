import React, { useState } from "react";
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
import SvgRegisterComponent from "../../Components/SvgRegisterComponent";
import colors from "../../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import ErrorComponent from "./../../Components/Error";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { registerUser } from "./UserOperations";
import Toast from "react-native-toast-message";
let { height, width } = Dimensions.get("window");

const Register = (props: any) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");

	const [loading, setLoading] = useState(false);

	const register = () => {
		if (
			email === "" ||
			name === "" ||
			password === "" ||
			confirmPassword === "" ||
			phone === ""
		) {
			setError("Please fill all details");
		} else if (password !== confirmPassword) {
			setError("Passwords Do not match");
		} else {
			const user = {
				email,
				name,
				passwordHash: password,
				phone,
			};
			setLoading(true);
			registerUser(user)
				.then((data: any) => {
					Toast.show({
						topOffset: 60,
						type: "success",
						text1: "Registration Successfull",
						text2: "Please login to your Account",
					});
					setTimeout(() => {
						setLoading(false);
						props.navigation.navigate("Login");
					}, 500);
				})
				.catch((error: any) => {
					setLoading(false);
					Toast.show({
						topOffset: 60,
						type: "error",
						text1: "Registration Unsuccessfull",
						text2: "Please Try Again",
					});
				});
			setError("");
		}
	};

	return (
		<View style={styles.mainContainer}>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps="always"
				contentContainerStyle={{ flexGrow: 1 }}
			>
				<SvgRegisterComponent width={width} height={height / 2.2} />
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
					<Text style={styles.registerHeading}>Register</Text>
					<View style={styles.socialLoginContainer}>
						<SocialLoginButton image="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png" />
						<SocialLoginButton image="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Pic.png" />
					</View>
					<Text style={styles.lightTextContent}>Or, Register with...</Text>

					<InputText
						icon="person-outline"
						placeholder="Username"
						value={name}
						onChangeText={(text: string) => setName(text)}
					/>
					<InputText
						icon="alternate-email"
						placeholder="Email"
						keyboardType={"email-address"}
						value={email}
						onChangeText={(text: string) => setEmail(text.toLowerCase())}
					/>
					<InputText
						icon="call"
						placeholder="Phone"
						value={phone}
						onChangeText={(text: string) => {
							if (text.length <= 10) setPhone(text);
						}}
						keyboardType={"number-pad"}
					/>
					<InputText
						icon="lock-outline"
						placeholder="Password"
						value={password}
						secureTextEntry={true}
						onChangeText={(text: string) => setPassword(text)}
					/>

					<InputText
						icon="lock-outline"
						placeholder="Confirm Password"
						value={confirmPassword}
						secureTextEntry={true}
						onChangeText={(text: string) => setConfirmPassword(text)}
					/>
					{error.length > 0 && <ErrorComponent message={error} />}
					<CustomButton
						loading={loading}
						iconVisible={false}
						disabled={false}
						styles={{
							width: "100%",
							marginTop: 10,
							marginBottom: 10,
						}}
						styleText={{}}
						onPress={register}
						text="Register"
					/>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	registerHeading: {
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
		marginTop: 10,
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
