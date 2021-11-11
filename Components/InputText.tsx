import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useRoute } from "@react-navigation/native";
import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import colors from "../Constants/colors";

const InputText = (props: any) => {
	const route = useRoute();
	return (
		<View style={[styles.inputText, { ...props.styles }]}>
			{props.icon && (
				<MaterialIcons
					style={{ marginRight: 10 }}
					name={props.icon}
					size={22}
					color={colors.colorSecondary}
				/>
			)}
			<TextInput
				style={{ flex: 1, fontFamily: "Montserrat-Regular" }}
				placeholder={props.placeholder}
				autoCorrect={props.autoCorrect}
				value={props.value}
				onChangeText={props.onChangeText}
				onFocus={props.onFocus}
				secureTextEntry={props.secureTextEntry}
				keyboardType={props.keyboardType}
				onBlur={props.onBlur}
			/>
			{props.forgot && (
				<TouchableOpacity onPress={() => props.onPress()}>
					<Text
						style={{
							color: colors.colorSecondary,
							fontFamily: "Montserrat-Bold",
						}}
					>
						Forgot?
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default InputText;

const styles = StyleSheet.create({
	inputText: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.colorTeritiary,
		borderRadius: 10,
		marginBottom: 10,
		width: "100%",
		alignItems: "center",
	},
});
