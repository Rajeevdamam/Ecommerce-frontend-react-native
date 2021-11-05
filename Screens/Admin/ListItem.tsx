import React, { useRef } from "react";
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
import BottomSheet from "react-native-raw-bottom-sheet";

const { width, height } = Dimensions.get("window");

const ListItem = (props: any) => {
	const bottomSheet = useRef<any>();
	return (
		<View>
			<BottomSheet
				customStyles={{
					container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
				}}
				ref={bottomSheet}
				closeOnDragDown={true}
				height={width / 3}
			>
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
						onPress={() => props.navigation.navigate("ProductsForm")}
					>
						<Icon name="edit" size={24} color={colors.paySummaryTextColor} />
						<Text style={{ color: colors.paySummaryTextColor, marginLeft: 10 }}>
							Edit
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Icon name="remove" size={24} color={"red"} />
						<Text style={{ color: "red", marginLeft: 10 }}>Delete</Text>
					</TouchableOpacity>
				</View>
			</BottomSheet>
			<TouchableOpacity
				style={styles.container}
				onPress={() =>
					props.navigation.navigate("Product Detail", { item: props })
				}
				onLongPress={() => {
					bottomSheet.current.open();
				}}
			>
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
				</View>
			</TouchableOpacity>
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
