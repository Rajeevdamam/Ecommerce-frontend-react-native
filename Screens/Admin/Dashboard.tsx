import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../Constants/colors";
import BezierLineChart from "../../Components/BezierLineChart";
import UserBarChart from "../../Components/UserBarChart";
import BestSellingProducts from "../../Components/BestSellingProducts";
import { getTopFiveProducts } from "./ProductsOperations";
import Swiper from "react-native-swiper";

let { width } = Dimensions.get("window");

const Dashboard = () => {
	const [topFiveProducts, setTopFiveProducts] = useState<any>([]);

	useEffect(() => {
		getTopFiveProducts()
			.then((res: any) => {
				setTopFiveProducts(res.data.data);
			})
			.catch((err: any) => {
				console.log(err.message);
			});
		return () => {
			setTopFiveProducts([]);
		};
	}, []);

	return (
		<View style={styles.mainContainer}>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 10,
					alignItems: "center",
					flexGrow: 1,
				}}
			>
				<Swiper
					style={{
						height: width / 2,
						alignItems: "center",
						justifyContent: "center",
					}}
					showsButtons={false}
					autoplay={true}
					autoplayTimeout={5}
					dotColor={colors.borderColor}
					activeDotColor={colors.colorSecondary}
				>
					{topFiveProducts.map((item: any) => {
						return <BestSellingProducts key={item._id} item={item} />;
					})}
				</Swiper>

				<BezierLineChart />
				<UserBarChart />
			</ScrollView>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: colors.colorPrimary,
		flex: 1,
		alignItems: "center",
	},
	container: {
		flex: 1,
	},
	swiper: {
		width: width,
		alignItems: "center",
		marginTop: 10,
	},
});
