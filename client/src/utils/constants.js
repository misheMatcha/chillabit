export const CHILLABIT = 'Chillabit';

export const FORM_INPUT_TYPES = {
	input: 'input',
	select: 'select',
};

export const ANIMATE_VARIANTS = {
	fadeInAndOut: {
		animate: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
		initial: {
			opacity: 0,
		},
		transition: {
			delay: 0.5,
			duration: 1,
		},
	},
	openAndClose: {
		animate: {
			height: 'auto',
		},
		exit: {
			height: 0,
			transition: {
				delay: 0,
				duration: 0.5,
			},
		},
		initial: {
			height: 0,
		},
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};
