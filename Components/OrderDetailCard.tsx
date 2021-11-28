import moment from "moment";
import React, { useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import colors from "../Constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { Select } from "native-base";
import Swiper from "react-native-swiper";
import { updateOrder } from "../Screens/Admin/adminOrderOperations";

let { width, height } = Dimensions.get("window");

const OrderDetailCard = (props: any) => {
	const state = useSelector((state: any) => state.userReducer);
	const itemsLength = props.orderItems.length;
	const [orderStatus, setOrderStatus] = useState<any>(props.status);

	const handleOrderStatus = (status: any) => {
		props.handleUpdate(true);
		updateOrder(props._id, { status: status })
			.then((res: any) => {
				setOrderStatus(res.data.data.status);
				props.handleUpdate(false);
			})
			.catch((err: any) => {
				console.log(err.response.data);
				props.handleUpdate(false);
			});
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<Text style={styles.toptext}>Order ID: #{props._id.slice(-8)}</Text>
				<Text style={styles.toptext}>
					{moment(props.createdAt).format("Do MMM, YYYY")}
				</Text>
			</View>

			<Swiper
				style={{
					height: itemsLength > 1 ? width / 2 : width / 2.5,
					alignItems: "center",
					justifyContent: "center",
				}}
				key={itemsLength}
				showsButtons={false}
				autoplay={true}
				autoplayTimeout={5}
				dotColor={colors.borderColor}
				activeDotColor={colors.colorSecondary}
			>
				{props.orderItems.map((item: any) => (
					<View key={item._id} style={styles.detailsContainer}>
						<View style={styles.imageContianer}>
							<Image
								style={styles.image}
								source={{ uri: item.product.image }}
								resizeMode="contain"
							/>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.productDetails}>
								<Text
									numberOfLines={1}
									ellipsizeMode="tail"
									style={styles.productName}
								>
									{item.product.title.length > 18
										? item.product.title.substring(0, 18 - 3) + "..."
										: item.product.title}
								</Text>
								<Text
									style={{
										fontFamily: "Montserrat-Regular",
										fontSize: 12,
										color: colors.navIconColor,
									}}
								>
									{item.product.brand}
								</Text>
								<View style={styles.orderStatus}>
									<MaterialCommunityIcons
										name={
											props.status === "Pending"
												? "timer-sand"
												: props.status === "Shipped"
												? "truck-check"
												: "check-circle"
										}
										size={16}
										color={
											props.status === "Pending"
												? colors.navIconColor
												: props.status === "Shipped"
												? colors.paySummaryTextColor
												: colors.colorGreen
										}
									/>
									{props.route === "Orders" && state.userProfile.isAdmin ? (
										<Select
											backgroundColor={"transparent"}
											fontSize={14}
											color="black"
											isDisabled={orderStatus === "Delivered"}
											selectedValue={orderStatus}
											defaultValue="Pending"
											width={width / 2}
											onValueChange={(itemValue: any) => [
												setOrderStatus(itemValue),
												handleOrderStatus(itemValue),
											]}
										>
											<Select.Item
												colorScheme={colors.navIconColor}
												label={"Pending"}
												value={"Pending"}
											/>
											<Select.Item
												colorScheme={colors.navIconColor}
												label={"Shipped"}
												value={"Shipped"}
											/>
											<Select.Item
												colorScheme={colors.navIconColor}
												label={"Delivered"}
												value={"Delivered"}
											/>
										</Select>
									) : (
										<Text style={styles.statusText}>{props.status}</Text>
									)}
								</View>
								<Text style={styles.price}>₹ {item.product.price}</Text>
							</View>
						</View>
					</View>
				))}
			</Swiper>
		</View>
	);
};

export default OrderDetailCard;

const styles = StyleSheet.create({
	mainContainer: {
		width: width,
		flex: 1,
	},
	topContainer: {
		height: 40,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		borderTopColor: colors.borderColor,
		borderBottomColor: colors.borderColor,
		borderBottomWidth: 0.7,
		borderTopWidth: 0.7,
	},
	toptext: {
		fontFamily: "Montserrat-Regular",
		fontSize: 11,
	},
	imageContianer: {
		width: width / 3.5,
		height: width / 3,
		borderRadius: 8,
		overflow: "hidden",
		marginHorizontal: 10,
		marginVertical: 5,
		backgroundColor: colors.colorTeritiary,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	detailsContainer: {
		flexDirection: "row",
	},
	productName: {
		fontFamily: "Montserrat-Bold",
		fontSize: 16,
	},
	productDetails: {
		marginLeft: 10,
		flex: 1,
		justifyContent: "space-around",
	},
	orderStatus: {
		flexDirection: "row",
		alignItems: "center",
	},
	statusText: {
		marginLeft: 5,
		fontFamily: "Montserrat-Regular",
		fontSize: 12,
		color: "gray",
	},
	showDetailsIcon: {
		justifyContent: "center",
		padding: 10,
	},

	price: {
		fontFamily: "Montserrat-Bold",
		fontSize: 14,
		color: colors.colorGreen,
	},
	selectStatus: {},
});
