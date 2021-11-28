import React, { useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import SvgChangePassword from "./../../Components/SvgChangePassword";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../Constants/colors";
import InputText from "../../Components/InputText";
import CustomButton from "../../Components/CustomButton";
import axios from "axios";
import baseURL from "../../assets/common/baseurl";
import Toast from "react-native-toast-message";
import ErrorComponent from "../../Components/Error";

let { height, width } = Dimensions.get("window");

const ChangePasswordScreen = (props: any) => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { email, key } = props.route.params;
	const [error, setError] = useState("");

	const changePassword = () => {
		if (password === confirmPassword) {
			setLoading(true);
			axios
				.patch(
					`${baseURL}user/forgot/password`,
					JSON.stringify({ email, key, passwordHash: password }),
					{
						headers: { "Content-Type": "application/json" },
					}
				)
				.then((res: any) => {
					Toast.show({
						topOffset: 60,
						type: "success",
						text1: "Password changed successfully!",
					});
					setTimeout(() => {
						setLoading(false);
						props.navigation.navigate("Login");
					}, 500);
				})
				.catch((err: any) => {
					setLoading(false);
					Toast.show({
						topOffset: 60,
						type: "error",
						text1: "Something went wrong",
						text2: "Please Try Again",
					});
				});
		} else {
			setError("Passwords do not match");
		}
	};

	return (
		<View style={styles.mainContainer}>
			<SvgChangePassword width={width} height={height / 2.2} />
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
			<Text style={styles.pageHeading}>Change Your Password</Text>
			<View style={{ paddingHorizontal: 10 }}>
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
					iconVisible={true}
					disabled={false}
					styles={{
						marginTop: 20,
					}}
					styleText={{}}
					onPress={changePassword}
					text="Submit"
				/>
			</View>
		</View>
	);
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	pageHeading: {
		fontSize: 22,
		fontFamily: "Montserrat-Bold",
		marginBottom: 10,
		alignSelf: "center",
		color: colors.colorSecondary,
		marginTop: 10,
	},
});
