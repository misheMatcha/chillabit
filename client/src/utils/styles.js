export const styles = {
	alignItemsCenter: { alignItems: 'center' },
	borderRadius: { borderRadius: 3 },
	displayFlex: { display: 'flex' },
	flexDirection: {
		column: {
			flexDirection: 'column',
		},
		row: {
			flexDirection: 'row',
		},
	},
	font: {
		size: {
			medium: 14,
			small: 12,
		},
		weight: {
			500: 500,
		},
	},
	height: {
		100: {
			percentage: {
				height: '100%',
			},
			view: {
				height: '100vh',
			},
		},
	},
	justifyContent: {
		center: { justifyContent: 'center' },
		flexEnd: { justifyContent: 'flex-end' },
		spaceBetween: { justifyContent: 'space-between' },
		spaceEvently: { justifyContent: 'space-evenly' },
	},
	textAlignCenter: {
		textAlign: 'center',
	},
	width: {
		100: {
			percentage: {
				width: '100%',
			},
			view: {
				width: '100vw',
			},
		},
		max: {
			width: 1240,
		},
	},
};

// need to figure out color theme later and add colors to styles

export const light = {
	background: {
		color: '#fff',
		highlight: '#f3f3f3',
		surface: '#fff',
	},
	button: {
		background: '#fff',
		font: '#000',
		primary: {
			activeBackground: '#000',
			activeFont: '#fff',
			background: '#000',
			disabledBackground: '#000',
			disabledFont: '#fff',
			font: '#fff',
			fontHover: 'hsla(0, 0%, 100%, 0.4)',
			loadingBackground: '#000',
			loadingFont: 'hsla(0, 0%, 100%, 0.6)',
			loadingIcon: '#fff',
			selectedActiveBackground: '#f3f3f3',
			selectedActiveFont: '#000',
			selectedBackground: '#f3f3f3',
			selectedFont: '#000',
			selectedFontHover: 'rgba(0, 0, 0, 0.4)',
		},
		secondary: {
			activeBackground: '#f3f3f3',
			activeFont: '#000',
			background: '#f3f3f3',
			disabledBackground: '#f3f3f3',
			disabledFont: '#000',
			font: '#000',
			fontHover: 'rgba(0, 0, 0, 0.4)',
			loadingBackground: '#f3f3f3',
			loadingFont: 'rgba(0, 0, 0, 0.6)',
			loadingIcon: '#000',
			selectedActiveBackground: '#f3f3f3',
			selectedActiveFont: '#f50',
			selectedBackground: '#f3f3f3',
			selectedFont: '#f50',
			selectedFontHover: 'rgba(255, 85, 0, 0.4)',
		},
		special: {
			activeOpacity: 0.4,
			background: '#f50',
			disabledOpacity: 0.4,
			focusedBoxShadow: '0 0 0 2px #044dd2 inset',
			font: '#fff',
		},
		teritary: {
			activeBackground: 'transparent',
			activeFont: '#000',
			background: 'transparent',
			disabledBackground: '#fff',
			disabledFont: '#000',
			font: '#000',
			fontHover: 'rgba(0, 0, 0, 0.4)',
			loadingBackground: '#fff',
			loadingFont: 'rgba(0, 0, 0, 0.6)',
			loadingIcon: '#000',
			selectedActiveBackground: '#fff',
			selectedActiveFont: '#f50',
			selectedBackground: '#fff',
			selectedFont: '#f50',
			selectedFontHover: 'rgba(255, 85, 0, 0.4)',
		},
	},
	color: {
		black: '#000',
		error: '#d61348',
		highlight: '#f3f3f3',
		link: '#044dd2',
		overlay: 'rgba(0, 0, 0, 0.4)',
		primary: '#000',
		secondary: '#666',
		special: '#f50',
		success: '#00995c',
		surface: '#fff',
		transparent: 'transparent',
		white: '#fff',
	},
	font: {
		color: '#fff',
		error: '#d61348',
		family: '',
		link: '#044dd2',
		primary: '#000',
		secondary: '#666',
		special: '#f50',
	},
	input: {
		default: {
			background: '#f3f3f3',
			border: 'transparent',
			font: '#000',
		},
		disabled: {
			background: 'rgba(0, 0, 0, 0.15)',
			border: 'transparent',
			font: '#000',
		},
		focused: {
			background: '#f3f3f3',
			border: '#666',
			font: '#000',
		},
		invalid: {
			background: '#f3f3f3',
			border: '#d61348',
			font: '#d61348',
		},
		placeholder: {
			background: '#f3f3f3',
			border: 'transparent',
			font: '#666',
		},
	},
	link: {
		primary: {
			active: 'rgba(0, 0, 0, 0.6)',
			borderRadius: 4,
			color: '#000',
			disabled: 'rgba(0, 0, 0, 0.6)',
			focusBoxShadow: '0 0 0 2px #044dd2',
			hover: 'rgba(0, 0, 0, 0.6)',
			hoverTextDecoration: 'none',
		},
		secondary: {
			active: 'hsla(0, 0%, 40%, 0.6)',
			borderRadius: 4,
			color: '#666',
			disabled: 'hsla(0, 0%, 40%, 0.6)',
			focusBoxShadow: '0 0 0 2px #044dd2',
			hover: 'hsla(0, 0%, 40%, 0.6)',
			hoverTextDecoration: 'none',
		},
		standard: {
			active: 'rgba(4, 77, 210, 0.6)',
			borderRadius: 4,
			color: '#044dd2',
			disabled: 'rgba(4, 77, 210, 0.6)',
			focusBoxShadow: '0 0 0 2px #044dd2',
			focusOutline: 'none',
			hover: '#044dd2',
			hoverTextDecoration: 'underline',
			textDectoration: 'none',
		},
	},
};
