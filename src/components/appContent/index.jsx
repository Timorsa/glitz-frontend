import React from 'react';
import Inbox from './views/Inbox';
import Calendar from './views/Calendar';
import Settings from './views/Settings';
const AppContent = () => {
	return (
		<div className='app-content'>
			<Settings />
			{/* <Calendar/> */}
			{/* <Inbox/> */}
		</div>
	);
};

export default AppContent;
