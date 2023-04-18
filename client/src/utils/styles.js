export const styles = {
	alignItemsCenter: { alignItems: 'center' },
	borderRadius: { borderRadius: 3 },
	colors: {
		black: '#000',
		blue: '#044dd2',
		gray: {
			0: '#f2f2f2',
			100: '#222',
			20: '#ccc',
			40: '#999',
			60: '#666',
			80: '#333',
		},
		orange: {
			dark: '#f30',
			light: '#f50',
		},
		red: '#d61348',
		transparent: 'transparent',
		white: '#fff',
	},
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
	btn: {
		bg: '#f50',
		large: {
			height: 40,
		},
		radius: 3,
	},
	color: {
		black: '#000',
		gray: '#f2f2f2',
		orange: '#f50',
		white: '#fff',
	},
};
