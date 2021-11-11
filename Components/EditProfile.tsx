import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Actionsheet, FormControl, Icon, Input } from "native-base";
import colors from "../Constants/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "./CustomButton";
import { updateUser } from "../Screens/User/UserOperations";
import { MaterialIcons } from "@expo/vector-icons";

const EditProfile = (props: any) => {
	const [name, setName] = useState<any>(props.name);
	const [email, setEmail] = useState<any>(props.email);
	const [phone, setPhone] = useState<any>(props.phone);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setName(props.name);
		setEmail(props.email);
		setPhone(props.phone);
		return () => {
			setName("");
			setEmail("");
			setPhone("");
		};
	}, [props.isOpen]);

	const onSave = () => {
		let user = {
			name,
			email,
			phone,
		};
		setLoading(true);
		updateUser(props._id, user)
			.then((res: any) => {
				props.onClose();
				setLoading(false);
			})
			.catch((err: any) => {
				console.log(err.message);
				setLoading(false);
			});
	};

	return (
		<View>
			<Actionsheet
				isOpen={props.isOpen}
				onClose={props.onClose}
				hideDragIndicator
			>
				<Actionsheet.Content borderTopRadius="15">
					<View style={styles.bottomSheetHeader}>
						<View style={styles.bottomSheetHeaderText}>
							<FontAwesome
								name="user-circle-o"
								size={30}
								color={colors.colorSecondary}
							/>
							<Text style={styles.headerText}>Edit Profile</Text>
						</View>
						<TouchableOpacity onPress={props.onClose}>
							<AntDesign name="close" size={24} color={colors.colorSecondary} />
						</TouchableOpacity>
					</View>
					<View style={{ width: "100%", paddingHorizontal: 10 }}>
						<FormControl mt="2">
							<FormControl.Label
								_text={{
									color: colors.navIconColor,
									fontFamily: "Montserrat-Regular",
								}}
							>
								Enter Name
							</FormControl.Label>
							<Input
								fontFamily="Montserrat-Regular"
								InputLeftElement={
									<Icon
										as={<MaterialIcons name="person" />}
										size={5}
										ml="2"
										color="muted.400"
									/>
								}
								placeholder="Name"
								value={name}
								onChangeText={(text: any) => {
									setName(text);
								}}
							/>
						</FormControl>
						<FormControl mt="2">
							<FormControl.Label
								_text={{
									color: colors.navIconColor,
									fontFamily: "Montserrat-Regular",
								}}
							>
								Enter Phone
							</FormControl.Label>
							<Input
								fontFamily="Montserrat-Regular"
								InputLeftElement={
									<Icon
										as={<MaterialIcons name="phone" />}
										size={5}
										ml="2"
										color="muted.400"
									/>
								}
								placeholder="Phone"
								value={phone}
								keyboardType={"number-pad"}
								onChangeText={(text: any) => {
									if (text.length <= 10) {
										setPhone(text);
									}
								}}
							/>
						</FormControl>

						<FormControl mt="2">
							<FormControl.Label
								_text={{
									color: colors.navIconColor,
									fontFamily: "Montserrat-Regular",
								}}
							>
								Email
							</FormControl.Label>
							<Input
								fontFamily="Montserrat-Regular"
								InputLeftElement={
									<Icon
										as={<MaterialIcons name="alternate-email" />}
										size={5}
										ml="2"
										color="muted.400"
									/>
								}
								isDisabled={true}
								placeholder="Email"
								value={email}
								onChangeText={(text: any) => {
									setEmail(text);
								}}
							/>
						</FormControl>
						<FormControl mt="3">
							<CustomButton
								loading={loading}
								iconVisible={true}
								disabled={false}
								styles={styles.confirm}
								onPress={onSave}
								text="Save"
							/>
						</FormControl>
					</View>
				</Actionsheet.Content>
			</Actionsheet>
		</View>
	);
};

export default EditProfile;

const styles = StyleSheet.create({
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
		fontFamily: "Montserrat-Bold",
		marginLeft: 10,
	},
	confirm: {
		width: "100%",
		borderRadius: 7,
		paddingVertical: 10,
	},
});
