import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	Image,
	View,
	Dimensions,
	ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import colors from "../Constants/colors";

const { width } = Dimensions.get("window");

const Banner = () => {
	const [bannerData, setBannerData] = useState<string[]>([]);

	useEffect(() => {
		setBannerData([
			"https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
			"https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
			"https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
		]);
		return () => {
			setBannerData([]);
		};
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.swiper}>
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
						{bannerData.map((item: any) => {
							return (
								<Image
									key={item}
									style={styles.image}
									resizeMode="contain"
									source={{ uri: item }}
								/>
							);
						})}
					</Swiper>
					<View style={{ height: 10 }}></View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Banner;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.colorTeritiary,
	},
	swiper: {
		width: width,
		alignItems: "center",
		marginTop: 10,
	},
	image: {
		height: width / 2,
		width: width - 40,
		borderRadius: 10,
		alignSelf: "center",
	},
});
