import { Menu } from "native-base";
import React from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../../Constants/colors";

const { width, height } = Dimensions.get("window");

const CategoryCard = (props: any) => {
	const { addProduct } = props;

	const onModalOpen = (data: any) => {
		props.onModalOpen(true, data);
	};

	return (
		<View style={styles.mainContainer}>
			{!addProduct ? (
				<View>
					<View style={styles.imageContainer}>
						<Image
							resizeMode="cover"
							style={styles.image}
							source={{ uri: props.image }}
						/>
					</View>
					<Text
						style={{
							fontFamily: "Montserrat-Bold",
							marginTop: 10,
							textAlign: "center",
						}}
					>
						{props.name}
					</Text>
				</View>
			) : (
				<TouchableOpacity
					onPress={() => {
						onModalOpen({});
					}}
				>
					<View style={styles.imageContainer}>
						<Image
							resizeMode="cover"
							style={styles.image}
							source={{
								uri: "https://cdn-icons-png.flaticon.com/128/864/864380.png",
							}}
						/>
					</View>
					<Text
						style={{
							fontFamily: "Montserrat-Bold",
							marginTop: 10,
							textAlign: "center",
						}}
					>
						Add
					</Text>
				</TouchableOpacity>
			)}
			{!addProduct && (
				<Menu
					w="120"
					placement="bottom right"
					offset={-12}
					crossOffset={-10}
					style={{
						borderTopLeftRadius: 8,
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8,
						borderTopRightRadius: 0,
						borderColor: colors.colorSecondary,
						borderWidth: 0.4,
					}}
					trigger={(triggerProps) => {
						return (
							<TouchableOpacity style={styles.settings} {...triggerProps}>
								<Icon name="settings" color={colors.colorSecondary} size={22} />
							</TouchableOpacity>
						);
					}}
				>
					<Menu.Item
						onPress={() => {
							onModalOpen({
								_id: props._id,
								name: props.name,
								icon: props.icon,
								image: props.image,
							});
						}}
					>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<FontAwesome
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
						</View>
					</Menu.Item>
					<Menu.Item onPress={() => {}}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<FontAwesome name="remove" size={24} color={"red"} />
							<Text
								style={{
									color: "red",
									marginLeft: 10,
									fontFamily: "Montserrat-Regular",
								}}
							>
								Delete
							</Text>
						</View>
					</Menu.Item>
				</Menu>
			)}
		</View>
	);
};

export default CategoryCard;

const styles = StyleSheet.create({
	mainContainer: {
		position: "relative",
		borderWidth: 0.7,
		borderColor: colors.colorSecondary,
		borderRadius: 6,
		height: width / 2.3,
		width: width / 2.3,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageContainer: {
		width: width / 6,
		height: width / 6,
		alignSelf: "center",
	},
	settings: { position: "absolute", top: 10, right: 10 },
});
