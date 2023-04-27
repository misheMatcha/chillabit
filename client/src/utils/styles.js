export const styles = {
	alignItems: {
		center: { alignItems: 'center' },
		flexEnd: { alignItems: 'flex-end' },
	},
	displayFlex: { display: 'flex' },
	flexDirection: {
		column: { flexDirection: 'column' },
		row: { flexDirection: 'row' },
	},
	height: {
		100: {
			percentage: { height: '100%' },
			view: { height: '100vh' },
		},
	},
	justifyContent: {
		center: { justifyContent: 'center' },
		flexEnd: { justifyContent: 'flex-end' },
		flexStart: { justifyContent: 'flex-start' },
		spaceBetween: { justifyContent: 'space-between' },
		spaceEvently: { justifyContent: 'space-evenly' },
	},
	radius: {
		3: 3,
		4: 4,
	},
	spacing: {
		'0_25': 2,
		'0_5': 4,
		'0_7': 6,
		1: 8,
		'1_5': 12,
		'1_7': 14,
		2: 16,
		'2_5': 20,
		3: 24,
		'3_5': 28,
		4: 32,
		'4_5': 36,
		5: 40,
		'5_7': 46,
		6: 48,
		7: 56,
		8: 64,
	},
	textAlign: {
		center: { textAlign: 'center' },
		left: { textAlign: 'left' },
		right: { textAlign: 'right' },
	},
	truncateText: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	typography: {
		body: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '1rem',
			fontWeight: 500,
			lineHeight: '1.4285714285714286rem',
		},
		captions: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '0.8571428571428571rem',
			fontWeight: 500,
			lineHeight: '1.1428571428571428rem',
		},
		h1: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '2rem',
			fontWeight: 700,
			lineHeight: '2.5714285714285716rem',
		},
		h2: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '1.5714285714285714rem',
			fontWeight: 700,
			lineHeight: '2rem',
		},
		h3: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '1.2142857142857142rem',
			fontWeight: 700,
			lineHeight: '1.7142857142857142rem',
		},
		h4: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '1rem',
			fontWeight: 700,
			lineHeight: '1.4285714285714286rem',
		},
		h5: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '0.8571428571428571rem',
			fontWeight: 700,
			lineHeight: '1.1428571428571428rem',
		},
		micro: {
			fontFamily: 'Overpass, sans-serif',
			fontSize: '0.7142857142857143rem',
			fontWeight: 700,
			letterSpacing: '0.03571428571428571rem',
			lineHeight: '1.1428571428571428rem',
			textTransform: 'uppercase',
		},
	},
	weight: {
		300: 300,
		400: 400,
		500: 500,
		600: 600,
		700: 700,
	},
	width: {
		100: {
			percentage: { width: '100%' },
			view: { width: '100vw' },
		},
		max: { width: 1240 },
	},
};

// need to figure out color theme later and add colors to styles
