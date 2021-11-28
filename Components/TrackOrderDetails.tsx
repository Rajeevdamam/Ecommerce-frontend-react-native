import moment from "moment";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StepIndicator from "react-native-step-indicator";
import colors from "../Constants/colors";
import Loading from "./Loading";
import OrderDetailCard from "./OrderDetailCard";

let { width, height } = Dimensions.get("window");

const labels = ["Order Placed", "Shipped", "Delivered"];
const customStyles = {
	stepIndicatorSize: 25,
	currentStepIndicatorSize: 25,
	separatorStrokeWidth: 3,
	currentStepStrokeWidth: 3,
	stepStrokeCurrentColor: colors.colorSecondary,
	stepStrokeWidth: 3,
	stepStrokeFinishedColor: colors.colorSecondary,
	stepStrokeUnFinishedColor: "#aaaaaa",
	separatorFinishedColor: colors.colorSecondary,
	separatorUnFinishedColor: "#aaaaaa",
	stepIndicatorFinishedColor: colors.colorSecondary,
	stepIndicatorUnFinishedColor: "#ffffff",
	stepIndicatorCurrentColor: "#ffffff",
	stepIndicatorLabelFontSize: 13,
	currentStepIndicatorLabelFontSize: 13,
	stepIndicatorLabelCurrentColor: colors.colorSecondary,
	stepIndicatorLabelFinishedColor: "#ffffff",
	stepIndicatorLabelUnFinishedColor: "#aaaaaa",
	labelColor: "#999999",
	labelAlign: "flex-start",
	labelSize: 13,
	currentStepLabelColor: colors.colorSecondary,
};

const TrackOrderDetails = (props: any) => {
	const [orderDetails, setOrderDetails] = useState(
		props.route.params.params.data
	);

	const trackingDetails = [
		orderDetails.createdAt,
		orderDetails.createdAt,
		orderDetails.updatedAt,
	];
	const [loading, setLoading] = useState(false);

	const handleUpdate = (value: boolean) => {
		setLoading(value);
	};

	let trackingStatus: any = {
		Pending: 0,
		Shipped: 1,
		Delivered: 2,
	};
	return (
		<View style={styles.mainContainer}>
			{loading ? (
				<Loading />
			) : (
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<View
						style={{
							borderBottomColor: colors.borderColor,
							borderBottomWidth: 0.7,
						}}
					>
						<OrderDetailCard {...orderDetails} handleUpdate={handleUpdate} />
					</View>
					<View style={styles.tracker}>
						<StepIndicator
							stepCount={3}
							customStyles={customStyles}
							currentPosition={trackingStatus[orderDetails.status]}
							labels={labels}
							renderLabel={({
								position,
								stepStatus,
								label,
								currentPosition,
							}) => (
								<View style={{ marginLeft: 10 }}>
									<Text
										style={{
											fontFamily:
												currentPosition === position
													? "Montserrat-Bold"
													: "Montserrat-Regular",
										}}
									>
										{label}
									</Text>
									{position === 2 && (
										<>
											<Text style={{ color: colors.navIconColor }}>
												Please be Avaliable at Deliver Location on this Date
											</Text>
											<Text style={{ color: colors.navIconColor }}>
												Est.{" "}
												{moment(orderDetails.createdAt)
													.add(4, "days")
													.format("Do MMM, YYYY")}
											</Text>
										</>
									)}
									{(stepStatus === "current" || stepStatus === "finished") && (
										<Text style={{ fontFamily: "Montserrat-Regular" }}>
											{moment(trackingDetails[position]).format("Do MMM, YYYY")}
										</Text>
									)}
								</View>
							)}
							direction="vertical"
						/>
					</View>
				</ScrollView>
			)}
		</View>
	);
};

export default TrackOrderDetails;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	tracker: {
		flex: 1,
		width: width - 20,
		paddingLeft: 20,
		borderTopColor: colors.borderColor,
	},
});
