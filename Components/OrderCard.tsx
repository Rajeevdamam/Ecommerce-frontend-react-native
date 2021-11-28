import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import colors from "../Constants/colors";
import moment from "moment";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

let { width, height } = Dimensions.get("window");

const OrderCard = (props: any) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<Text style={styles.toptext}>Order ID: #{props._id.slice(-8)}</Text>
				<Text style={styles.toptext}>
					{moment(props.createdAt).format("Do MMM, YYYY")}
				</Text>
			</View>

			{props.orderItems.map((item: any) => (
				<TouchableOpacity
					key={item._id}
					activeOpacity={0.6}
					style={styles.detailsContainer}
					onPress={() =>
						props.navigation.navigate(props.navigate, {
							params: { data: { item, ...props } },
							routeName: props.route,
						})
					}
				>
					<View style={styles.imageContianer}>
						<Image
							style={styles.image}
							source={{ uri: item.product.image }}
							resizeMode="contain"
						/>
					</View>
					<View style={{ flex: 1 }}>
						<View
							style={{
								flexDirection: "row",
								flex: 2,
							}}
						>
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
								<View style={styles.orderStatus}>
									<MaterialCommunityIcons
										name={
											props.status === "Pending"
												? "timer-sand"
												: props.status === "Shipped"
												? "truck-check"
												: "check-circle"
										}
										size={20}
										color={
											props.status === "Pending"
												? colors.navIconColor
												: props.status === "Shipped"
												? colors.paySummaryTextColor
												: colors.colorGreen
										}
									/>
									<Text style={styles.statusText}>{props.status}</Text>
								</View>
							</View>
							<View style={styles.showDetailsIcon}>
								<AntDesign name="right" color={colors.navIconColor} size={24} />
							</View>
						</View>
						<View
							style={{
								borderColor: colors.navIconColor,
								borderBottomWidth: 0.5,
							}}
						></View>
						<View style={styles.priceAndRating}>
							<View style={styles.rating}>
								<SimpleLineIcons name="star" size={22} color="orange" />
								<Text style={styles.rate}>Rate</Text>
							</View>
							<Text style={styles.price}>₹ {item.product.price}</Text>
						</View>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default OrderCard;

const styles = StyleSheet.create({
	mainContainer: {
		width: width,
		flex: 1,
	},
	topContainer: {
		height: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		borderTopColor: colors.navIconColor,
		borderBottomColor: colors.navIconColor,
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
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
		// borderWidth: 0.5,
		// borderColor: colors.navIconColor,
		backgroundColor: colors.colorTeritiary,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	detailsContainer: {
		flexDirection: "row",
		flex: 1,
	},
	productName: {
		fontFamily: "Montserrat-Bold",
		fontSize: 16,
		marginBottom: 10,
	},
	productDetails: {
		margin: 10,
		flex: 1,
		justifyContent: "space-evenly",
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
	rating: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	rate: {
		fontSize: 14,
		fontFamily: "Montserrat-Regular",
		marginHorizontal: 6,
		color: "orange",
	},
	price: {
		fontFamily: "Montserrat-Bold",
		fontSize: 14,
		color: colors.colorGreen,
	},
	priceAndRating: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		alignItems: "center",
	},
});
