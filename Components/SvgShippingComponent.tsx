import * as React from "react";
import Svg, { SvgProps, Path, G, Circle } from "react-native-svg";

function SvgShippingComponent(props: SvgProps) {
	return (
		<Svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			// viewBox="50 -100 800 1000"
			viewBox="50 -100 700 700"
			preserveAspectRatio="xMaxYMid meet"
			{...props}
		>
			<Path
				d="M12.82 276.912c-18.935-41.885-18.237-94.975 11.15-130.32a211.783 211.783 0 0075.802 124.083c15.13 11.946 33.201 23.658 37.335 42.488 2.572 11.716-1.074 24.109-7.376 34.315-6.303 10.206-15.088 18.601-23.773 26.875l-.975 2.831c-37.792-26.165-73.227-58.388-92.162-100.272z"
				fill="#f0f0f0"
			/>
			<Path
				d="M24.789 147.104c-6.764 37.034-1.74 76.468 14.7 110.398 3.554 7.336 7.797 14.468 13.479 20.368a44.71 44.71 0 0020.299 11.9c7.147 2.087 14.7 3.394 21.216 7.182 6.868 3.993 11.13 10.692 12.79 18.375 2.032 9.4.565 18.97-1.196 28.278-1.954 10.335-4.147 21.039-1.315 31.428.343 1.26-1.63 1.718-1.973.461-4.927-18.076 4.652-35.903 3.313-54.077-.625-8.48-3.809-16.823-11.08-21.736-6.358-4.296-14.145-5.65-21.4-7.701-7.619-2.153-14.46-5.442-20.282-10.897-5.955-5.58-10.487-12.562-14.213-19.774a175.62 175.62 0 01-16.873-52.231 184.228 184.228 0 01.599-62.572c.233-1.28 2.168-.673 1.936.598z"
				fill="#fff"
			/>
			<Path
				d="M33.563 246.755a27.158 27.158 0 01-32.471-13.503c-.59-1.162 1.19-2.133 1.78-.968a25.148 25.148 0 0030.23 12.498c1.24-.403 1.694 1.572.461 1.973zM69.503 289.19a52.346 52.346 0 004.235-37.912c-.34-1.26 1.634-1.72 1.972-.461a54.447 54.447 0 01-4.486 39.442c-.611 1.154-2.329.079-1.72-1.07zM21.489 188.997a15.373 15.373 0 0012.047-8.225c.596-1.161 2.313-.085 1.72 1.07a17.227 17.227 0 01-13.307 9.128 1.047 1.047 0 01-1.217-.756 1.018 1.018 0 01.757-1.217z"
				fill="#fff"
			/>
			<Path
				d="M179.601 147.003c-.351.736-.703 1.472-1.047 2.223a202.454 202.454 0 00-11.556 30.74 88.988 88.988 0 00-.705 2.454 213.431 213.431 0 00-6.484 78.311 207.268 207.268 0 005.623 30.986c3.67 14.047 8.768 28.985 7.618 43.011a35.557 35.557 0 01-.582 4.362l-63.955 39.064c-.19.016-.371.046-.562.063l-2.482 1.676c-.174-.515-.343-1.053-.517-1.568-.102-.298-.19-.605-.291-.904-.064-.201-.127-.403-.196-.582a2.831 2.831 0 01-.054-.187c-.069-.178-.114-.35-.174-.515q-1.43-4.506-2.802-9.047c-.008-.015-.008-.015-.003-.038-6.909-23.088-11.951-46.956-13.21-70.83-.038-.719-.085-1.451-.093-2.187a197.78 197.78 0 011.114-32.257 174.85 174.85 0 012.995-17.436 145.397 145.397 0 0116.844-42.225c15.54-26.121 39.263-46.982 68.296-54.557.742-.193 1.472-.378 2.223-.557z"
				fill="#f0f0f0"
			/>
			<Path
				d="M179.953 147.903c-27.697 25.497-47.427 60.008-54.73 96.997-1.579 7.997-2.484 16.246-1.5 24.378A44.71 44.71 0 00132.765 291c4.45 5.97 9.694 11.56 12.616 18.508 3.08 7.323 2.45 15.238-.85 22.372-4.038 8.728-10.97 15.486-17.98 21.858-7.783 7.076-15.979 14.301-19.973 24.302-.484 1.211-2.336.39-1.852-.82 6.949-17.4 25.33-25.866 35.203-41.183 4.607-7.147 7.087-15.725 4.24-24.026-2.49-7.258-7.892-13.028-12.45-19.033-4.787-6.306-8.27-13.051-9.633-20.912-1.396-8.041-.81-16.343.557-24.345a175.62 175.62 0 0117.974-51.863 184.227 184.227 0 0138.15-49.6c.957-.88 2.137.769 1.187 1.644z"
				fill="#fff"
			/>
			<Path
				d="M126.963 232.752a27.158 27.158 0 01-17.797-30.332c.23-1.283 2.234-.987 2.004.298a25.148 25.148 0 0016.613 28.181c1.232.424.405 2.274-.82 1.853zM130.11 288.271a52.346 52.346 0 0026.207-27.72c.488-1.21 2.34-.39 1.852.819a54.447 54.447 0 01-27.329 28.791c-1.183.554-1.907-1.339-.73-1.89zM152.096 179.365a15.373 15.373 0 0014.571.686c1.175-.568 1.898 1.325.73 1.89a17.227 17.227 0 01-16.12-.723 1.047 1.047 0 01-.517-1.337 1.018 1.018 0 011.336-.516z"
				fill="#fff"
			/>
			<G data-name="Group 228">
				<Path
					data-name="Path 3042"
					d="M561.393 138.458l-.272-.56c-.083-.17-8.228-17.2-3.687-33.985s20.16-27.387 20.315-27.492l.516-.345.272.559c.083.17 8.228 17.2 3.687 33.986s-20.16 27.388-20.317 27.492zm20.177-29.735c3.049-14.314-18.187-20.026-22.632-6.083q-.245.766-.458 1.552c-3.966 14.656 1.991 29.55 3.35 32.645 2.734-1.99 15.385-11.844 19.351-26.5q.217-.801.39-1.614z"
					fill="#3f3d56"
				/>
				<Path
					data-name="Path 3043"
					d="M540.39 110.48c4.54 16.787 20.1 27.183 20.1 27.183s8.191-16.82 3.65-33.607-20.1-27.183-20.1-27.183-8.192 16.82-3.65 33.607z"
					fill="#122636"
				/>
				<Path
					data-name="Path 3044"
					d="M561.64 138.223l-.62-.034c-.189-.01-19.028-1.171-31.49-13.3s-14.13-30.933-14.146-31.122l-.05-.618.62.034c.188.01 19.027 1.17 31.49 13.3s14.13 30.933 14.144 31.122zm-31.355-14.11c10.882 10.6 26.788 12.628 30.155 12.947-.409-3.357-2.869-19.2-13.752-29.8q-.583-.568-1.185-1.104c-10.93-9.73-26.289 6-16.376 16.765q.563.612 1.158 1.193z"
					fill="#3f3d56"
				/>
				<Path
					data-name="Path 3045"
					d="M575.028 106.872c-12.46 12.13-13.983 30.777-13.983 30.777s18.681-1.02 31.142-13.15 13.986-30.778 13.986-30.778-18.684 1.02-31.145 13.15z"
					fill="#3f3d56"
				/>
				<Circle
					data-name="Ellipse 585"
					cx={560.785}
					cy={65.976}
					r={8.126}
					fill="#122636"
				/>
				<Path
					data-name="Rectangle 453"
					d="M546.04 134.31h31a14 14 0 0114 14c0 7.733-4.381 35.777-12.113 35.777l-38 1c-7.732 0-8.887-29.044-8.887-36.776a14 14 0 0114-14z"
					fill="#e6e6e6"
				/>
			</G>
			<Path
				data-name="Path 3068"
				d="M479.883 133.905a10.528 10.528 0 00-1.316 1.007l-48.054-12.251-3.278-11.593-18.144 2.66 3.81 21.089a8 8 0 007.034 6.534l56.111 5.909a10.5 10.5 0 103.84-13.355z"
				fill="#ffb6b6"
			/>
			<Path
				data-name="Path 3070"
				d="M405.848 124.252l12.38 10.68 17.32 14.93 7.65-39.14.8-4.07.63-3.23-17.55-30.57-14.63.84-1 .06-.02.22-.23 2.05-3 26.98-.07.65z"
				fill="#e6e6e6"
			/>
			<Path
				data-name="Path 3071"
				d="M486.766 391.927h12.26l5.833-47.288h-18.095z"
				fill="#ffb6b6"
			/>
			<Path
				data-name="Path 3073"
				d="M358.766 392.927h12.26l5.833-47.288h-18.095z"
				fill="#ffb6b6"
			/>
			<Path
				data-name="Path 3075"
				d="M348.967 372.102l33 5 48.01-162.48 50.99 163.48 37-5-48-190v-15l-6.5-22.5.68-6.09 4.73-42.59 2.05-18.47.133-1.193a4.056 4.056 0 00-3.193-4.417l-15.4-3.24h-25.166l-14.85 4.09-1.02.28-.46.13.23 1.92 3.48 29.18.19 1.6 3.36 28.13.74 6.17c-29 21-30 42-30 42z"
				fill="#2f2e41"
			/>
			<Circle
				data-name="Ellipse 592"
				cx={442.925}
				cy={32.391}
				r={24.561}
				fill="#ffb6b6"
			/>
			<Path
				data-name="Rectangle 456"
				fill="#122636"
				d="M416.22 142.4l.908-6.941 48.586 6.354-.908 6.94z"
			/>
			<Path
				data-name="Path 3076"
				d="M530.883 143.905a10.528 10.528 0 00-1.316 1.007l-48.054-12.251-3.278-11.593-18.144 2.66 3.81 21.089a8 8 0 007.034 6.534l56.111 5.909a10.5 10.5 0 103.84-13.355z"
				fill="#ffb6b6"
			/>
			<Path
				data-name="Path 3077"
				d="M456.967 79.102l8.5-6.5c2.3-.872 5.447 1.605 6 4l12 49-25 18-3.5-5.5z"
				fill="#e6e6e6"
			/>
			<Path
				data-name="Path 3079"
				d="M461.745 12.056c4.593-.563 9.634-.165 13.214 2.767s4.736 9.028 1.346 12.178c-3 2.789-7.693 2.133-11.713 2.926a15.854 15.854 0 00-12.384 15.157c.06 10.174 9.824 17.879 11.578 27.9 1.2 6.84-1.688 14.038-6.675 18.87s-11.843 7.443-18.75 8.15-13.894-.373-20.607-2.148c-6.74-1.782-13.378-4.311-19.034-8.388s-10.293-9.826-12.109-16.558-.512-14.451 4.168-19.62c5.36-5.92 14.274-7.954 18.91-14.456 5.2-7.288 3.273-17.666 7.48-25.567 2.807-5.275 8.124-8.873 13.791-10.77S442.68.228 448.652.046c3.14-.1 6.375-.13 9.3 1.016s5.5 3.753 5.648 6.89-1.855 4.105-1.855 4.105z"
				fill="#2f2e41"
			/>
			<Path
				d="M187.521 403.76H85.37a6.898 6.898 0 01-6.89-6.891V333.18a23.065 23.065 0 0123.04-23.039h86.001a6.898 6.898 0 016.89 6.89v79.837a6.898 6.898 0 01-6.89 6.89zm-86.001-91.618a21.064 21.064 0 00-21.04 21.04v63.687a4.896 4.896 0 004.89 4.89H187.52a4.896 4.896 0 004.89-4.89v-79.837a4.895 4.895 0 00-4.89-4.89z"
				fill="#3f3d56"
			/>
			<Path
				d="M104.899 314.674a21.173 21.173 0 00-21.15 21.149v58.405a5.006 5.006 0 005 5h95.393a5.006 5.006 0 005-5v-74.554a5.006 5.006 0 00-5-5z"
				fill="#122636"
			/>
			<Path
				d="M143.795 333.75H129.63a2.503 2.503 0 01-2.5-2.5v-23.077h19.166v23.078a2.503 2.503 0 01-2.5 2.5zM711.105 288.376l4.374-11.66.157-.09 35.237-20.136a4.211 4.211 0 011.218-.462 4.195 4.195 0 012.913 7.765zM581.522 288.376l-43.894-24.58a4.196 4.196 0 012.914-7.768 4.203 4.203 0 011.217.462l35.395 20.225z"
				fill="#3f3d56"
			/>
			<Path
				data-name="Path 3060"
				d="M714.607 289.825H578.021l-11.488-53.613h159.562z"
				fill="#3f3d56"
			/>
			<Path
				d="M719.105 285.602H573.523L563.51 239.98a9.509 9.509 0 019.287-11.547h147.038a9.508 9.508 0 019.286 11.547zm-143.973-2h142.365l9.67-44.051a7.507 7.507 0 00-7.333-9.118H572.796a7.508 7.508 0 00-7.334 9.119z"
				fill="#3f3d56"
			/>
			<Path
				data-name="Path 3061"
				d="M714.607 289.825H578.021l-11.488-53.613h159.562z"
				opacity={0.1}
				style={{
					isolation: "isolate",
				}}
			/>
			<Path
				d="M713.284 403.91h-133.94a6.86 6.86 0 01-6.852-6.853V282.533h147.645v114.524a6.86 6.86 0 01-6.853 6.853zM574.492 284.533v112.524a4.858 4.858 0 004.853 4.853h133.94a4.858 4.858 0 004.852-4.853V284.533z"
				fill="#3f3d56"
			/>
			<Path
				d="M577.884 287.132V393.81a5.507 5.507 0 005.5 5.5h125.861a5.507 5.507 0 005.5-5.5V287.132z"
				fill="#3f3d56"
			/>
			<Path
				d="M726.596 236.711H566.034v-.5a6.435 6.435 0 016.427-6.427h147.706a6.436 6.436 0 016.429 6.427z"
				fill="#122636"
			/>
			<Path
				d="M221.806 332.991a18.607 18.607 0 00-18.586 18.586v42.653a5.006 5.006 0 005 5h72.667a5.006 5.006 0 005-5v-56.239a5.006 5.006 0 00-5-5zM297.17 328.724h-73.445a7.037 7.037 0 01-7.03-7.028v-61.65a7.037 7.037 0 017.03-7.029h65.54a21.17 21.17 0 0121.146 21.146v41.321a13.256 13.256 0 01-13.241 13.24zm-73.445-73.707a5.035 5.035 0 00-5.03 5.03v61.65a5.035 5.035 0 005.03 5.027h73.445a11.253 11.253 0 0011.24-11.24v-41.321a19.167 19.167 0 00-19.145-19.146z"
				fill="#3f3d56"
			/>
			<Path
				d="M284.381 403.964h-79.656a7.037 7.037 0 01-7.03-7.029v-48.062a20.639 20.639 0 0120.616-20.616h66.07a7.037 7.037 0 017.03 7.029v61.65a7.037 7.037 0 01-7.03 7.028zm-66.07-73.707a18.637 18.637 0 00-18.616 18.616v48.062a5.035 5.035 0 005.03 5.029h79.656a5.035 5.035 0 005.03-5.029v-61.65a5.035 5.035 0 00-5.03-5.028z"
				fill="#3f3d56"
			/>
			<Path
				d="M227.22 257.752a5.006 5.006 0 00-5 5v56.239a5.006 5.006 0 005 5h66.455a11.224 11.224 0 0011.212-11.212v-35.911a19.138 19.138 0 00-19.117-19.116z"
				fill="#e6e6e6"
			/>
			<Path
				d="M268.925 272.627h-10.323a2.503 2.503 0 01-2.5-2.5v-17.876h15.323v17.876a2.503 2.503 0 01-2.5 2.5z"
				fill="#3f3d56"
			/>
			<Path
				d="M486.26 381.894l14.667-.876v6.284l13.943 9.63a3.925 3.925 0 01-2.23 7.155h-17.46l-3.01-6.215-1.176 6.215h-6.583zM358.26 381.894l14.667-.876v6.284l13.943 9.63a3.925 3.925 0 01-2.23 7.155h-17.46l-3.01-6.215-1.176 6.215h-6.583z"
				fill="#2f2e41"
			/>
			<Path
				d="M109.927 384.615H82.749a1 1 0 010-2h27.178a1 1 0 110 2z"
				fill="#3f3d56"
			/>
			<Path
				d="M229.927 382.615h-27.178a1 1 0 010-2h27.178a1 1 0 110 2zM605.927 375.087h-27.178a1 1 0 010-2h27.178a1 1 0 010 2zM616.927 365.087h-27.178a1 1 0 010-2h27.178a1 1 0 010 2zM565.927 171.087h-27.178a1 1 0 010-2h27.178a1 1 0 010 2z"
				fill="#122636"
			/>
			<Path
				d="M248.927 310.615h-27.178a1 1 0 010-2h27.178a1 1 0 110 2zM248.927 302.615h-27.178a1 1 0 010-2h27.178a1 1 0 110 2z"
				fill="#3f3d56"
			/>
			<Path
				d="M651.875 253.315h-10.322a2.503 2.503 0 01-2.5-2.5v-17.876h15.322v17.876a2.503 2.503 0 01-2.5 2.5z"
				fill="#122636"
			/>
			<Path
				data-name="Rectangle 450"
				fill="#ccc"
				d="M5.457 403.087h836v2h-836z"
			/>
			<Path
				d="M249.925 347.41h-10.323a2.503 2.503 0 01-2.5-2.5v-17.876h15.323v17.876a2.503 2.503 0 01-2.5 2.5z"
				fill="#122636"
			/>
		</Svg>
	);
}

export default SvgShippingComponent;