import { extendTheme } from "native-base";

export const theme = extendTheme({
	fontConfig: {
		Montserrat: {
			100: {
				normal: "Montserrat-Light",
				italic: "Montserrat-LightItalic",
			},
			200: {
				normal: "Montserrat-Light",
				italic: "Montserrat-LightItalic",
			},
			300: {
				normal: "Montserrat-Light",
				italic: "Montserrat-LightItalic",
			},
			400: {
				normal: "Montserrat-Regular",
				italic: "Montserrat-Italic",
			},
			500: {
				normal: "Montserrat-Medium",
			},
			600: {
				normal: "Montserrat-Medium",
				italic: "Montserrat-MediumItalic",
			},
			// 700: {
			// 	normal: "Montserrat-Bold",
			// },
			// 800: {
			// 	normal: "Montserrat-Bold",
			// 	italic: "Montserrat-BoldItalic",
			// },
			// 900: {
			// 	normal: "Montserrat-Bold",
			// 	italic: "Montserrat-BoldItalic",
			// },
		},
	},

	// Make sure values below matches any of the keys in `fontConfig`
	fonts: {
		heading: "Montserrat",
		body: "Montserrat",
		mono: "Montserrat",
	},
});
