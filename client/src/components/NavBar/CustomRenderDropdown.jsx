import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'antd/lib/dropdown';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const {} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const CustomRenderDropdown = ({ icon, label, hasSettings = false }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useAuth();

	return (
		<Dropdown
			dropdownRender={() => (
				<div>
					<div>
						<div>{label}</div>
						{hasSettings && <Link>Settings</Link>}
					</div>
					<div>{false ? 'map' : `No ${label}`}</div>
					<div>
						<Link>View all {label}</Link>
					</div>
				</div>
			)}
			trigger={['click']}
		>
			<FontAwesomeIcon icon={icon} />
		</Dropdown>
	);
};

export default CustomRenderDropdown;
