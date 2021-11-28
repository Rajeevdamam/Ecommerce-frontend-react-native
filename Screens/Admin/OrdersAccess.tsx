import React, { useState, useCallback } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/core";
import { getOrders } from "./adminOrderOperations";
import OrderCard from "./../../Components/OrderCard";
import colors from "../../Constants/colors";
import Loading from "../../Components/Loading";

const OrdersAccess = (props: any) => {
	const [orders, setOrders] = useState<any>([]);
	const [loading, setLoading] = useState(true);

	const handleGetOrders = () => {
		getOrders()
			.then((res: any) => {
				setOrders(res.data.data);
				setLoading(false);
			})
			.catch((err: any) => {
				console.log(err.response.data);
				setLoading(false);
			});
	};

	useFocusEffect(
		useCallback(() => {
			handleGetOrders();
			return () => {
				setOrders([]);
				setLoading(true);
			};
		}, [])
	);
	return (
		<View style={styles.mainContainer}>
			{loading ? (
				<Loading />
			) : (
				<FlatList
					data={orders}
					contentContainerStyle={{ flexGrow: 1 }}
					renderItem={({ item }) => (
						<OrderCard
							{...item}
							navigation={props.navigation}
							route={props.route.name}
							navigate="ManageOrder"
						/>
					)}
					keyExtractor={(item: any) => item._id}
				/>
			)}
		</View>
	);
};

export default OrdersAccess;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
});
