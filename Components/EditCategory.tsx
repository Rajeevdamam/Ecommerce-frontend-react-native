import { FormControl, Input, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../Constants/colors";
import {
	addCategory,
	editCategory,
} from "../Screens/Admin/CategoriesOperations";
import CustomButton from "./CustomButton";

const EditCategory = (props: any) => {
	const [loading, setLoading] = useState(false);
	const [category, setCategory] = useState("");
	const [icon, setIcon] = useState("");
	const [image, setImage] = useState("");

	useEffect(() => {
		setCategory(props.name);
		setIcon(props.icon);
		setImage(props.image);
		setLoading(false);

		return () => {
			setCategory("");
			setIcon("");
			setImage("");
			setLoading(false);
		};
	}, [props.name]);

	const addOrEditCategory = (id: any) => {
		setLoading(true);
		const data = {
			name: category,
			icon,
			image,
		};

		if (id !== "") {
			editCategory(id, data)
				.then((res: any) => {
					setLoading(false);
					props.onModalClose();
					props.handleUpdate(true);
				})
				.catch((err: any) => {
					console.log(err.data.message);
					setLoading(false);
					props.onModalClose();
					props.handleUpdate(true);
				});
		} else {
			addCategory(data)
				.then((res: any) => {
					setLoading(false);
					props.onModalClose();
					props.handleUpdate(true);
				})
				.catch((err: any) => {
					console.log(err);
					setLoading(false);
					props.onModalClose();
					props.handleUpdate(true);
				});
		}
	};

	return (
		<View>
			<Modal isOpen={props.state} onClose={() => props.onModalClose()}>
				<Modal.Content width={"85%"} maxWidth="400px">
					<Modal.CloseButton />
					<Modal.Header>
						<Text
							style={{
								fontSize: 16,
								fontFamily: "Montserrat-Bold",
								color: colors.colorSecondary,
							}}
						>
							{props._id != null ? "Edit Category" : "Add Category"}
						</Text>
					</Modal.Header>
					<Modal.Body>
						<FormControl>
							<FormControl.Label
								color={colors.colorSecondary}
								fontFamily="Montserrat-Regular"
							>
								Category Name
							</FormControl.Label>
							<Input
								fontFamily="Montserrat-Regular"
								placeholder="Category Name"
								value={category}
								onChangeText={(text: any) => {
									setCategory(text);
								}}
							/>
						</FormControl>

						<FormControl mt="3">
							<FormControl.Label
								color={colors.colorSecondary}
								fontFamily="Montserrat-Regular"
							>
								Category Icon
							</FormControl.Label>
							<Input
								fontFamily="Montserrat-Regular"
								placeholder="Category Icon"
								value={icon}
								onChangeText={(text: any) => {
									setIcon(text);
								}}
							/>
						</FormControl>

						<FormControl mt="3">
							<FormControl.Label
								color={colors.colorSecondary}
								fontFamily="Montserrat-Regular"
							>
								Category Image
							</FormControl.Label>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								{image != null && (
									<View
										style={{
											borderRadius: 5,
											width: 60,
											height: 60,
											borderWidth: 0.5,
											borderColor: colors.colorSecondary,
											marginRight: 20,
										}}
									>
										<Image
											source={{ uri: image }}
											resizeMode="contain"
											style={{
												borderRadius: 5,
												width: "100%",
												height: "100%",
											}}
										/>
									</View>
								)}

								<Input
									fontFamily="Montserrat-Regular"
									placeholder="Category Image"
									value={image}
									style={{ flex: 1 }}
									onChangeText={(text: any) => {
										setImage(text);
									}}
								/>
							</View>
						</FormControl>
					</Modal.Body>
					<Modal.Footer>
						<CustomButton
							loading={loading}
							iconVisible={true}
							disabled={false}
							styles={{ width: "100%", borderRadius: 5, padding: 10 }}
							onPress={() => addOrEditCategory(props._id || "")}
							text="Save"
						/>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</View>
	);
};

export default EditCategory;

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
