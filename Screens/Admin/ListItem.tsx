import React, { useRef, useState } from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../Constants/colors";
import { Modal } from "native-base";
import { DataTable } from "react-native-paper";

const { width } = Dimensions.get("window");

const ListItem = (props: any) => {
	const [modal, setModal] = useState(false);

	return (
		<View>
			<Modal isOpen={modal} onClose={() => setModal(false)}>
				<Modal.Content width={"80%"} maxWidth="300px">
					<Modal.CloseButton />
					<Modal.Header>
						<Text
							style={{
								fontSize: 16,
								fontFamily: "Montserrat-Bold",
								color: colors.colorSecondary,
							}}
						>
							Options
						</Text>
					</Modal.Header>
					<Modal.Body height={60}>
						<View
							style={{
								width: "100%",
								height: "100%",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
							}}
						>
							<TouchableOpacity
								style={{ flexDirection: "row", alignItems: "center" }}
								onPress={() =>
									props.navigation.navigate("ProductsForm", { item: props })
								}
							>
								<Icon
									name="edit"
									size={24}
									color={colors.paySummaryTextColor}
								/>
								<Text
									style={{
										color: colors.paySummaryTextColor,
										marginLeft: 10,
										fontFamily: "Montserrat-Regular",
									}}
								>
									Edit
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{ flexDirection: "row", alignItems: "center" }}
								onPress={() => [props.onDelete(props._id), setModal(false)]}
							>
								<Icon name="remove" size={24} color={"red"} />
								<Text
									style={{
										color: "red",
										marginLeft: 10,
										fontFamily: "Montserrat-Regular",
									}}
								>
									Delete
								</Text>
							</TouchableOpacity>
						</View>
					</Modal.Body>
				</Modal.Content>
			</Modal>

			{/* <TouchableOpacity
				style={styles.container}
				onPress={() =>
					props.navigation.navigate("Product Detail", { item: props })
				}
				onLongPress={() => {
					setModal(true);
				}}
			> */}
			{/* <View
					style={[
						styles.itemContainers,
						{
							backgroundColor:
								props.index % 2 === 0
									? colors.colorPrimary
									: colors.colorTeritiary,
						},
					]}
				>
					<Image source={{ uri: props.image }} style={styles.image} />
				</View>
				<View
					style={[
						styles.itemContainers,
						{
							backgroundColor:
								props.index % 2 === 0
									? colors.colorPrimary
									: colors.colorTeritiary,
						},
					]}
				>
					<Text style={styles.item}>{props.brand}</Text>
				</View>
				<View
					style={[
						styles.itemContainers,
						{
							backgroundColor:
								props.index % 2 === 0
									? colors.colorPrimary
									: colors.colorTeritiary,
						},
					]}
				>
					<Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
						{props.title}
					</Text>
				</View>
				<View
					style={[
						styles.itemContainers,
						{
							backgroundColor:
								props.index % 2 === 0
									? colors.colorPrimary
									: colors.colorTeritiary,
						},
					]}
				>
					<Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
						{props.category.name}
					</Text>
				</View>
				<View
					style={[
						styles.itemContainers,
						{
							backgroundColor:
								props.index % 2 === 0
									? colors.colorPrimary
									: colors.colorTeritiary,
						},
					]}
				>
					<Text style={styles.item}>₹{props.price}</Text>
				</View> */}
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Product Detail", { item: props })
				}
				onLongPress={() => {
					setModal(true);
				}}
			>
				<DataTable.Row>
					<DataTable.Cell
						style={{ justifyContent: "space-around", padding: 3 }}
					>
						<Image source={{ uri: props.image }} style={styles.image} />
					</DataTable.Cell>
					<DataTable.Cell
						style={{ justifyContent: "space-around", padding: 3 }}
					>
						{props.brand}
					</DataTable.Cell>
					<DataTable.Cell
						style={{ justifyContent: "space-around", padding: 3 }}
					>
						{props.title}
					</DataTable.Cell>
					<DataTable.Cell
						style={{ justifyContent: "space-around", padding: 3 }}
					>
						{props.category.name}
					</DataTable.Cell>
					<DataTable.Cell
						style={{ justifyContent: "space-around", padding: 3 }}
						numeric
					>
						{props.price}
					</DataTable.Cell>
				</DataTable.Row>
			</TouchableOpacity>
			{/* </TouchableOpacity> */}
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 1,
		width: width,
		overflow: "hidden",
	},
	image: {
		borderRadius: 50,
		width: width / 7,
		height: 20,
		margin: 2,
		resizeMode: "contain",
	},
	item: {
		flexWrap: "wrap",
		width: width / 6,
		color: colors.colorSecondary,
	},
	itemContainers: {
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.colorPrimary,
		marginHorizontal: 1,
		paddingVertical: 5,
		paddingHorizontal: 3,
		flex: 1,
	},
});
