import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Avatar } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../Constants/colors";

const { width, height } = Dimensions.get("window");

const UserDetailList = (props: any) => {
	return (
		<TouchableOpacity style={styles.mainContainer}>
			<View style={styles.avatarContainer}>
				<Avatar
					rounded
					size={40}
					source={{
						uri: props.image,
					}}
					avatarStyle={{ backgroundColor: "transparent" }}
				/>
			</View>
			<View style={styles.detailContainer}>
				<Text>{props.title}</Text>
			</View>
			<View style={styles.rightArrowContainer}>
				<AntDesign name="right" size={20} color={colors.navIconColor} />
			</View>
		</TouchableOpacity>
	);
};

export default UserDetailList;

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 20,
	},
	avatarContainer: {},
	detailContainer: {
		flex: 1,
		marginLeft: 10,
	},
	rightArrowContainer: {},
});
