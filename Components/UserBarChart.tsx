import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import colors from "../Constants/colors";

const chartConfig = {
	backgroundGradientFrom: "#aeff97",
	backgroundGradientFromOpacity: 0.2,
	backgroundGradientTo: "#aeff97",
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(17, 110, 17, ${opacity})`,
	strokeWidth: 2, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false, // optional
};

const graphStyle = {
	marginVertical: 8,
	borderRadius: 16,
};

const UserBarChart = () => {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43],
			},
		],
	};
	return (
		<View>
			<Text style={styles.text}>Number of Users</Text>
			<BarChart
				yAxisSuffix="%"
				style={graphStyle}
				data={data}
				width={Dimensions.get("window").width - 30}
				height={220}
				yAxisInterval={1}
				yAxisLabel="$"
				chartConfig={chartConfig}
				verticalLabelRotation={40}
			/>
		</View>
	);
};

export default UserBarChart;

const styles = StyleSheet.create({
	text: {
		fontFamily: "Montserrat-Bold",
		fontSize: 18,
		color: colors.colorSecondary,
		textAlign: "center",
	},
});
