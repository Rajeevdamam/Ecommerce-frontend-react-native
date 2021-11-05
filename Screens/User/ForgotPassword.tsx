import React, { useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import colors from "../../Constants/colors";
import SvgForgotPasswordComponent from "./../../Components/SvgForgotPassword";
import { Ionicons } from "@expo/vector-icons";
import InputText from "../../Components/InputText";
import CustomButton from "../../Components/CustomButton";

let { height, width } = Dimensions.get("window");

const ForgotPassword = (props: any) => {
	const [email, setEmail] = useState("");

	return (
		<View style={styles.mainContainer}>
			<SvgForgotPasswordComponent width={width} height={height / 2.2} />
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
				<Text style={styles.pageHeading}>Forgot Password?</Text>
				<InputText
					icon="alternate-email"
					placeholder="Email"
					keyboardType={"email-address"}
					value={email}
					onChangeText={(text: string) => setEmail(text)}
				/>
				<CustomButton
					disabled={false}
					styles={{
						width: "100%",
						marginTop: 20,
					}}
					styleText={{}}
					onPress={() => {}}
					text="Submit"
				/>
			</View>
		</View>
	);
};

export default ForgotPassword;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	pageHeading: {
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 30,
		alignSelf: "center",
		color: colors.colorSecondary,
	},
	formContainer: {
		paddingHorizontal: 20,
	},
});
