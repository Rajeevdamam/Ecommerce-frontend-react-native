import { FormControl, Input, Modal } from "native-base";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../Constants/colors";
import { addToShipping, editShipping } from "../Redux/Actions/ShippingActions";
import CustomButton from "./CustomButton";

const EditShipping = (props: any) => {
	const { shippingDetails } = props;

	const dispatch = useDispatch();

	const [address, setAddress] = useState<any>(shippingDetails.shippingAddress1);
	const [address2, setAddress2] = useState<any>(
		shippingDetails.shippingAddress2
	);
	const [city, setCity] = useState<any>(shippingDetails.city);
	const [zip, setZip] = useState<any>(shippingDetails.zip);
	const [phone, setPhone] = useState<any>(shippingDetails.phone);

	const onSave = () => {
		const shipping = {
			city,
			dateOrdered: Date.now(),
			phone,
			shippingAddress1: address,
			shippingAddress2: address2,
			zip,
		};
		dispatch(editShipping(shipping));
		props.closeModal();
	};

	return (
		<View>
			<Modal isOpen={props.state} onClose={() => props.closeModal()}>
				<Modal.Content width={"90%"} maxWidth="400px">
					<Modal.CloseButton />
					<Modal.Header>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "bold",
								color: colors.colorSecondary,
							}}
						>
							Edit Shipping
						</Text>
					</Modal.Header>
					<Modal.Body>
						<FormControl>
							<FormControl.Label color={colors.colorSecondary}>
								Phone
							</FormControl.Label>
							<Input
								placeholder="Phone"
								value={phone}
								onChangeText={(text: any) => {
									setPhone(text);
								}}
							/>
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label color={colors.colorSecondary}>
								Shipping Address 1
							</FormControl.Label>
							<Input
								placeholder="Shipping Address 1"
								value={address}
								onChangeText={(text: any) => {
									setAddress(text);
								}}
							/>
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label color={colors.colorSecondary}>
								Shipping Address 2
							</FormControl.Label>
							<Input
								placeholder="Shipping Address 2"
								value={address2}
								onChangeText={(text: any) => {
									setAddress2(text);
								}}
							/>
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label color={colors.colorSecondary}>
								City
							</FormControl.Label>
							<Input
								placeholder="City"
								value={city}
								onChangeText={(text: any) => {
									setCity(text);
								}}
							/>
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label color={colors.colorSecondary}>
								Zip
							</FormControl.Label>
							<Input
								placeholder="Zip"
								value={zip}
								onChangeText={(text: any) => {
									setZip(text);
								}}
							/>
						</FormControl>
					</Modal.Body>
					<Modal.Footer>
						<CustomButton
							disabled={false}
							styles={styles.confirm}
							styleText={styles.confirmText}
							onPress={onSave}
							text="Save"
						/>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</View>
	);
};

export default EditShipping;

const styles = StyleSheet.create({
	confirm: {
		width: "100%",
		borderRadius: 10,
	},
	confirmText: {},
});
