import { Heading, HStack, Spinner } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../Constants/colors";

const Loading = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: colors.colorPrimary,
			}}
		>
			<HStack space={2} alignItems="center">
				<Spinner
					accessibilityLabel="Loading posts"
					color={colors.colorSecondary}
					size="lg"
				/>
				<Heading color={colors.colorSecondary} fontSize="lg">
					Loading
				</Heading>
			</HStack>
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({});
