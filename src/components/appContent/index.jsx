import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Inbox from './views/Inbox';
import Calendar from './views/Calendar';
import Settings from './views/Settings';
import Discover from './views/Discover';

const Router = () => {
	return (
		<div className='app-content'>
			<Switch>
				<Route path='/inbox'>
					<Inbox />
				</Route>
				<Route path='/calendar'>
					<Calendar />
				</Route>
				<Route path='/settings'>
					<Settings />
				</Route>
				<Route path='/discover'>
					<Discover />
				</Route>
			</Switch>
		</div>
	);
};

export default Router;
