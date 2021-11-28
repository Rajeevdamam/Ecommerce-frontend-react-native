import React, { useCallback, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../../Constants/colors";
import SvgRecentOrdersComponent from "../../Components/SvgRecentOrders";
import { getOrdersByUser } from "./UserOperations";
import OrderCard from "../../Components/OrderCard";
import { useFocusEffect } from "@react-navigation/core";
import Loading from "./../../Components/Loading";
// import LoactionComponent from "./../../Components/LoactionComponent";

const { width, height } = Dimensions.get("window");

const RecentOrders = (props: any) => {
	const [orders, setOrders] = useState<any>([]);

	const [loading, setloading] = useState(true);

	const userId = props.route.params.params;

	const handleGetOrders = () => {
		getOrdersByUser(userId)
			.then((res: any) => {
				setOrders(res.data.data);
				setloading(false);
			})
			.catch((err: any) => {
				console.log(err.response.data);
				setloading(false);
			});
	};

	useFocusEffect(
		useCallback(() => {
			handleGetOrders();
			return () => {
				setOrders([]);
				setloading(true);
			};
		}, [])
	);

	return (
		<View style={styles.mainContainer}>
			{!loading && orders.length === 0 ? (
				<View style={{ flex: 1, alignItems: "center" }}>
					<SvgRecentOrdersComponent width={width / 2} height={width} />
				</View>
			) : (
				<>
					{loading ? (
						<Loading />
					) : (
						<>
							{/* <LoactionComponent /> */}
							<FlatList
								data={orders}
								contentContainerStyle={{ flexGrow: 1 }}
								renderItem={({ item }) => (
									<OrderCard
										{...item}
										navigation={props.navigation}
										route={props.route.name}
										navigate="OrderTracking"
									/>
								)}
								keyExtractor={(item: any) => item._id}
							/>
						</>
					)}
				</>
			)}
		</View>
	);
};

export default RecentOrders;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
});
