import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import PaymentMethod from "../../Components/PaymentMethod";
import colors from "../../Constants/colors";
import { Radio } from "native-base";
import paymentMethod from "../../assets/paymentMethods.json";
import DebitCard from "./../../Components/DebitCard";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../../Components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addToPayment } from "./../../Redux/Actions/paymentActions";
import { isObjEmpty } from "./../../Utils/isObjectEmpty";

const Payment = (props: any) => {
	const [value, setValue] = useState<any>();

	let paymentMethods: any = paymentMethod;

	const dispatch = useDispatch();

	paymentMethods = Object.keys(paymentMethods).map((item: any) => {
		return paymentMethods[item];
	});

	let [cardNumber, setCardNumber] = useState("");
	let [expiry, setExpiry] = useState("");
	let [cvv, setCvv] = useState("");
	let [cardName, setCardName] = useState("");

	const [cardData, setCardData] = useState({});

	const [cardVisible, setCardVisible] = useState(false);

	const [loading, setLoading] = useState(false);

	const handleCardNumber = (text: any) => {
		if (text.length < 20) {
			let formattedtext = text.split(" ").join("");
			if (formattedtext > 0) {
				formattedtext = formattedtext
					.match(new RegExp(".{1,4}", "g"))
					.join(" ");
			}
			setCardNumber(formattedtext);
		}
	};

	const handleExpiry = (text: any) => {
		if (text.length < 6) {
			let formattedtext = text.split(" ").join("");
			if (formattedtext > 0) {
				formattedtext = formattedtext
					.match(new RegExp(".{1,2}", "g"))
					.join("/");
			}
			setExpiry(formattedtext);
		}
	};

	const handleCvv = (text: any) => {
		if (text.length < 4) {
			setCvv(text);
		}
	};

	const onSave = () => {
		if (value === "card") {
			setCardData({
				cardName,
				cardNumber: "**** **** **** " + cardNumber.slice(cardNumber.length - 4),
				expiry,
				cvv,
			});
		}

		setCardNumber("");
		setExpiry("");
		setCvv("");
		setCardName("");

		setCardVisible(true);
	};

	const handleCardName = (text: any) => {
		setCardName(text);
	};

	const onPayment = () => {
		setLoading(true);
		if (!isObjEmpty(cardData)) {
			dispatch(addToPayment(cardData));
		} else {
			dispatch(addToPayment(paymentMethod[value]));
		}
		setTimeout(() => {
			setLoading(false);
			props.navigation.navigate("Confirm");
		}, 500);
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.colorPrimary,
			}}
		>
			<KeyboardAwareScrollView
				viewIsInsideTabBar={true}
				enableOnAndroid={false}
				extraScrollHeight={10}
				contentContainerStyle={{
					width: "100%",
					alignItems: "center",
					backgroundColor: colors.colorPrimary,
					flexGrow: 1,
				}}
			>
				<View style={styles.screen}>
					<Radio.Group
						name="paymentMethod"
						color={colors.colorSecondary}
						value={value}
						onChange={(nextValue) => {
							setValue(nextValue);
						}}
					>
						{paymentMethods.map((item: any) => {
							return (
								<PaymentMethod
									key={item.value}
									imageUri={item.imageUri}
									paymentType={item.name}
									cardDetail={item.cardDetail}
								>
									<Radio my={5} value={item.value}>
										{" "}
									</Radio>
								</PaymentMethod>
							);
						})}
					</Radio.Group>
					{value === "card" && (
						<DebitCard
							cardNumber={handleCardNumber}
							expiry={handleExpiry}
							cvv={handleCvv}
							name={handleCardName}
							cardNumValue={cardNumber}
							expiryValue={expiry}
							cvvValue={cvv}
							nameValue={cardName}
							onSave={onSave}
							cardVisible={cardVisible}
							cardData={cardData}
						/>
					)}
				</View>
				<View
					style={{
						flex: 1,
						width: "100%",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<CustomButton
						loading={loading}
						iconVisible={true}
						disabled={false}
						styles={{
							width: "90%",
							marginBottom: 10,
						}}
						styleText={{}}
						onPress={onPayment}
						text="Choose"
					/>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default Payment;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
		alignItems: "center",
		width: "100%",
	},
});
