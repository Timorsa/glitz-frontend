import React from 'react';
import Inbox from './views/Inbox';
import Calendar from './views/Calendar';
import Settings from './views/Settings';
import Discover from './views/Discover';

const AppContent = () => {
	return (
		<div className='app-content'>
			{/* <Settings /> */}
			{/* <Calendar/> */}
			{/* <Inbox /> */}
			<Discover />
		</div>
	);
};

export default AppContent;
