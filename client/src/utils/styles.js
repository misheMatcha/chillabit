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
	},
	color: {
		black: '#000',
		gray: '#f2f2f2',
		orange: '#f50',
		white: '#fff',
	},
};
