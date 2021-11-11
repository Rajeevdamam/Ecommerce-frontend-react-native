import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import colors from "../Constants/colors";

const BezierLineChart = () => {
	return (
		<View>
			<Text style={styles.text}>Sales Chart</Text>
			<LineChart
				data={{
					labels: ["January", "February", "March", "April", "May", "June"],
					datasets: [
						{
							data: [
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
							],
						},
					],
				}}
				width={Dimensions.get("window").width - 30} // from react-native
				height={220}
				yAxisLabel="₹"
				yAxisSuffix="k"
				yAxisInterval={1} // optional, defaults to 1
				chartConfig={{
					backgroundGradientFrom: "#f3fafe",
					backgroundGradientFromOpacity: 0.8,
					backgroundGradientTo: "#dbf0fd",
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(108,164,200, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(108,164,200, ${opacity})`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: "6",
						strokeWidth: "1",
						stroke: "#dbf0fd",
					},
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
				}}
			/>
		</View>
	);
};

export default BezierLineChart;

const styles = StyleSheet.create({
	text: {
		fontFamily: "Montserrat-Bold",
		fontSize: 18,
		color: colors.colorSecondary,
		textAlign: "center",
	},
});
