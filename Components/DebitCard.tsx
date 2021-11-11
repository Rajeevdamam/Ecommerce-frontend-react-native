import { Input } from "native-base";
import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../Constants/colors";

let { width, height } = Dimensions.get("window");

interface Props {
	cardNumber: any;
	expiry: any;
	cvv: any;
	name: any;
	cardNumValue: any;
	expiryValue: any;
	cvvValue: any;
	nameValue: any;
	onSave: any;
	cardVisible: boolean;
	cardData: any;
}

const DebitCard = (props: Props) => {
	const { cardVisible, cardData } = props;

	return (
		<View style={styles.mainContainer}>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{!cardVisible ? (
					<Input
						selectionColor={colors.colorTeritiary}
						size="sm"
						placeholder="Card Number"
						style={styles.inputStyle}
						value={props.cardNumValue}
						placeholderTextColor={colors.navIconColor}
						keyboardType={"numbers-and-punctuation"}
						onChangeText={props.cardNumber}
					/>
				) : (
					<Text style={styles.cardDetails}>
						**** **** ****{" "}
						{cardData.cardNumber.slice(cardData.cardNumber.length - 4)}
					</Text>
				)}
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{
							uri: "https://www.pngmart.com/files/3/Credit-Card-Visa-And-Master-Card-PNG-Transparent-Image.png",
						}}
					/>
				</View>
			</View>
			<View style={styles.expiryAndCvv}>
				{!cardVisible ? (
					<Input
						selectionColor={colors.colorTeritiary}
						size="sm"
						numberOfLines={1}
						value={props.expiryValue}
						placeholder="Expiry MM/YY"
						style={styles.inputStyle}
						placeholderTextColor={colors.navIconColor}
						keyboardType={"numbers-and-punctuation"}
						onChangeText={props.expiry}
					/>
				) : (
					<View>
						<Text
							style={{
								color: colors.borderColor,
								fontFamily: "Montserrat-Regular",
							}}
						>
							Expiry
						</Text>
						<Text style={styles.cardDetails}>{cardData.expiry}</Text>
					</View>
				)}

				{!cardVisible ? (
					<Input
						selectionColor={colors.colorTeritiary}
						size="sm"
						placeholder="Enter CVV"
						style={styles.inputStyle}
						value={props.cvvValue}
						placeholderTextColor={colors.navIconColor}
						secureTextEntry={true}
						keyboardType={"number-pad"}
						onChangeText={props.cvv}
					/>
				) : (
					<View>
						<Text
							style={{
								color: colors.borderColor,
								fontFamily: "Montserrat-Regular",
							}}
						>
							CVV
						</Text>
						<Text style={styles.cardDetails}>***</Text>
					</View>
				)}
			</View>
			<View style={styles.cardUserName}>
				{!cardVisible ? (
					<Input
						selectionColor={colors.colorTeritiary}
						size="sm"
						placeholder="Name on Card"
						style={styles.inputStyle}
						value={props.nameValue}
						placeholderTextColor={colors.navIconColor}
						onChangeText={props.name}
					/>
				) : (
					<View>
						<Text
							style={{
								color: colors.borderColor,
								fontFamily: "Montserrat-Regular",
							}}
						>
							Name
						</Text>
						<Text style={styles.cardDetails}>{cardData.name}</Text>
					</View>
				)}
				{!cardVisible && (
					<TouchableOpacity activeOpacity={0.5} onPress={() => props.onSave()}>
						<Entypo name="save" size={40} color={colors.navIconColor} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default DebitCard;

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: colors.colorSecondary,
		width: "90%",
		borderRadius: 20,
		height: width / 1.7,
		marginVertical: 20,
		padding: 20,
		justifyContent: "space-between",
	},
	imageContainer: {
		width: width / 9,
		height: height / 18,
		backgroundColor: "transparent",
		borderRadius: 15,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		backgroundColor: "transparent",
	},
	cardUserName: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	inputStyle: {
		color: colors.colorTeritiary,
		flex: 1,
		marginHorizontal: 10,
		marginVertical: 10,
		borderWidth: 0.15,
		fontFamily: "Montserrat-Regular",
	},
	expiryAndCvv: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cardDetails: {
		color: colors.colorPrimary,
		fontFamily: "Montserrat-Bold",
	},
});
