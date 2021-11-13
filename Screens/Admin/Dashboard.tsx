import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import BestSellingProducts from "../../Components/BestSellingProducts";
import BezierLineChart from "../../Components/BezierLineChart";
import Loading from "../../Components/Loading";
import UserBarChart from "../../Components/UserBarChart";
import colors from "../../Constants/colors";
import { getTopFiveProducts } from "./ProductsOperations";

let { width } = Dimensions.get("window");

const Dashboard = () => {
	const [topFiveProducts, setTopFiveProducts] = useState<any>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTopFiveProducts()
			.then((res: any) => {
				setTopFiveProducts(res.data.data);
				setLoading(false);
			})
			.catch((err: any) => {
				console.log(err.message);
				setLoading(false);
			});
		return () => {
			setTopFiveProducts([]);
		};
	}, []);

	return (
		<View style={styles.mainContainer}>
			{loading ? (
				<Loading />
			) : (
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
						key={topFiveProducts.length}
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
			)}
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
