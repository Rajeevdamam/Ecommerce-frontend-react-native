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
		<TouchableOpacity
			style={styles.mainContainer}
			onPress={() => props.navigation.navigate(props.screen)}
		>
			<View style={styles.avatarContainer}>
				<Avatar
					rounded
					size={45}
					avatarStyle={{ resizeMode: "contain" }}
					source={{
						uri: props.image,
					}}
				/>
			</View>
			<View style={styles.detailContainer}>
				<Text style={{ fontFamily: "Montserrat-Regular" }}>{props.title}</Text>
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
		paddingVertical: 10,
	},
	avatarContainer: {},
	detailContainer: {
		flex: 1,
		marginLeft: 10,
	},
	rightArrowContainer: {},
});
