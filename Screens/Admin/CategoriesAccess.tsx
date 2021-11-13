import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EditCategory from "../../Components/EditCategory";
import Loading from "../../Components/Loading";
import colors from "../../Constants/colors";
import { getCategories } from "./CategoriesOperations";
import CategoryCard from "./CategoryCard";

const { width, height } = Dimensions.get("window");

const CategoriesAccess = (props: any) => {
	const [categories, setCategories] = useState<any>([]);

	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState(false);
	const [data, setdata] = useState<any>({});
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		getCategories()
			.then((res: any) => {
				setLoading(false);
				setCategories(res.data.data);
			})
			.catch((err: any) => {
				console.log(err.message);
				setLoading(false);
			});
		return () => {
			setLoading(true);
			setCategories([]);
			setUpdated(false);
			setModal(false);
		};
	}, [updated]);

	const onModalClose = (value: boolean) => {
		setModal(value);
	};

	const handleUpdate = (value: boolean) => {
		setUpdated(true);
	};

	const onModalOpen = (value: boolean, data: any) => {
		setdata(data);
		setModal(value);
	};

	return (
		<View style={styles.mainContainer}>
			{loading ? (
				<Loading />
			) : (
				<View style={{ alignItems: "center", flex: 1 }}>
					<FlatList
						data={[...categories, { addProduct: true }]}
						numColumns={2}
						keyboardShouldPersistTaps="always"
						contentContainerStyle={{
							flexGrow: 1,
							width: "100%",
						}}
						renderItem={({ item }) => (
							<CategoryCard
								{...item}
								onModalOpen={onModalOpen}
								onModalClose={onModalClose}
							/>
						)}
						keyExtractor={(item: any) => item._id}
					/>
				</View>
			)}
			<EditCategory
				{...data}
				_id={data._id}
				onModalClose={onModalClose}
				state={modal}
				handleUpdate={handleUpdate}
			/>
		</View>
	);
};

export default CategoriesAccess;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageContainer: {
		width: width / 6,
		height: width / 6,
		alignSelf: "center",
	},
	settings: { position: "absolute", top: 10, right: 10 },
	cardContainer: {
		position: "relative",
		borderWidth: 0.7,
		borderColor: colors.colorSecondary,
		borderRadius: 6,
		height: width / 2.3,
		width: width / 2.3,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
});
