import React from 'react';
import {
	MdHome as Home,
	MdPlace as Discover,
	MdToday as Calendar,
	MdAccountCircle as User,
	MdSettings as Settings,
} from 'react-icons/md';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sb-header'>
				<div className='circle'></div>
				<div className='logo'>Glitz</div>
			</div>
			<ul className='sb-body'>
				<li className='sb-nav-item selected'>
					<Home size={25} /> <span>Home</span>
				</li>
				<li className='sb-nav-item'>
					<Discover size={25} /> <span>Discover</span>
				</li>
				<li className='sb-nav-item'>
					<Calendar size={25} /> <span>Calendar</span>
				</li>
				<li className='sb-nav-item'>
					<User size={25} /> <span>Friends</span>
				</li>
				<li className='sb-nav-item'>
					<Settings size={25} /> <span>Settings</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
