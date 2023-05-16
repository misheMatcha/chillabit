import React from 'react';
import EmptyProfilePage from './EmptyProfilePage';
import Sidebar from '../../../components/Sidebar';
import PageTemplate from '../../PageTemplate';
import Header from '../Header';
import ProfileNavBar from '../ProfileNavBar';

const All = () => {
	return (
		<PageTemplate
			header={<Header />}
			nav={<ProfileNavBar />}
			sidebar={<Sidebar />}
		>
			<EmptyProfilePage
				icon='all'
				uploadButton
			/>
		</PageTemplate>
	);
};

export default All;
