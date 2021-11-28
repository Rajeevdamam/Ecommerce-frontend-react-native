import { Input } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import CustomButton from "../../Components/CustomButton";
import colors from "../../Constants/colors";
import SvgOtpComponent from "./../../Components/SvgOtpComponent";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import baseURL from "../../assets/common/baseurl";
import ErrorComponent from "../../Components/Error";
import Toast from "react-native-toast-message";

let { height, width } = Dimensions.get("window");

const OTPScreen = (props: any) => {
	const [loading, setLoading] = useState(false);
	const [first, setFirst] = useState("");
	const [second, setSecond] = useState("");
	const [third, setThird] = useState("");
	const [fourth, setFourth] = useState("");
	const refOne = useRef<any>();
	const refTwo = useRef<any>();
	const refThree = useRef<any>();
	const refFour = useRef<any>();
	const [error, setError] = useState("");

	useEffect(() => {
		refOne.current.focus();
		return () => {
			setFirst("");
			setSecond("");
			setThird("");
			setFourth("");
		};
	}, []);

	const backspace = (id: any) => {
		if (id === "two") {
			if (second) {
				setSecond("");
			} else if (first) {
				setFirst("");
				refOne.current.focus();
			}
		} else if (id === "three") {
			if (third) {
				setThird("");
			} else if (second) {
				setSecond("");
				refTwo.current.focus();
			}
		} else if (id === "four") {
			if (fourth) {
				setFourth("");
			} else if (third) {
				setThird("");
				refThree.current.focus();
			}
		}
	};

	const verifyOTP = () => {
		const otp = first + second + third + fourth;
		const { email } = props.route.params;

		if (otp.length === 4) {
			setLoading(true);

			axios
				.post(
					`${baseURL}user/validate/otp`,
					JSON.stringify({ email, otp: otp }),
					{
						headers: { "Content-Type": "application/json" },
					}
				)
				.then((res: any) => {
					Toast.show({
						topOffset: 60,
						type: "success",
						text1: "OTP successfully verified!",
					});
					setTimeout(() => {
						setLoading(false);
						props.navigation.navigate("ChangePassword", {
							email: email,
							key: res.data.key,
						});
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
			setError("OTP is not valid");
		}
	};

	return (
		<View style={styles.mainContainer}>
			<SvgOtpComponent width={width} height={height / 2.2} />
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
			<Text style={styles.pageHeading}>Enter OTP</Text>
			<View style={styles.inputContainer}>
				<Input
					ref={refOne}
					style={styles.textInput}
					variant="underlined"
					value={first}
					color={colors.colorSecondary}
					maxLength={1}
					keyboardType="number-pad"
					key="one"
					onChangeText={(text: string) => {
						if (text) {
							setFirst(text);
							refTwo.current.focus();
						}
					}}
				/>
				<Input
					ref={refTwo}
					style={[styles.textInput, { marginLeft: 5 }]}
					variant="underlined"
					value={second}
					color={colors.colorSecondary}
					maxLength={1}
					keyboardType="number-pad"
					onChangeText={(text: string) => {
						if (text) {
							setSecond(text);
							refThree.current.focus();
						}
					}}
					onKeyPress={({ nativeEvent }) =>
						nativeEvent.key === "Backspace" ? backspace("two") : null
					}
				/>
				<Input
					ref={refThree}
					style={[styles.textInput, { marginLeft: 5 }]}
					variant="underlined"
					value={third}
					color={colors.colorSecondary}
					maxLength={1}
					keyboardType="number-pad"
					onChangeText={(text: string) => {
						if (text) {
							setThird(text);
							refFour.current.focus();
						}
					}}
					onKeyPress={({ nativeEvent }) =>
						nativeEvent.key === "Backspace" ? backspace("three") : null
					}
				/>
				<Input
					ref={refFour}
					style={[styles.textInput, { marginLeft: 5 }]}
					variant="underlined"
					value={fourth}
					color={colors.colorSecondary}
					maxLength={1}
					keyboardType="number-pad"
					onChangeText={(text: string) => {
						if (text) {
							setFourth(text);
						}
					}}
					onKeyPress={({ nativeEvent }) =>
						nativeEvent.key === "Backspace" ? backspace("four") : null
					}
				/>
			</View>
			{error.length > 0 && <ErrorComponent message={error} />}
			<CustomButton
				loading={loading}
				iconVisible={true}
				disabled={false}
				styles={{
					width: "90%",
					alignSelf: "center",
					marginTop: 20,
				}}
				styleText={{}}
				onPress={verifyOTP}
				text="Verify"
			/>
		</View>
	);
};

export default OTPScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	pageHeading: {
		fontSize: 28,
		fontFamily: "Montserrat-Bold",
		marginBottom: 10,
		alignSelf: "center",
		color: colors.colorSecondary,
		marginTop: 10,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: "20%",
		marginBottom: "5%",
	},
	textInput: {
		fontSize: 25,
		textAlign: "center",
		paddingVertical: 0,
		paddingHorizontal: 0,
		width: "14%",
		borderBottomColor: colors.colorSecondary,
		borderBottomWidth: 2,
	},
});
