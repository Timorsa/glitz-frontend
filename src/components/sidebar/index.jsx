import React, {useState} from 'react';
import {
	MdHome as Home,
	MdPlace as Discover,
	MdToday as Calendar,
	MdChat as Inbox,
	MdAccountCircle as User,
	MdSettings as Settings,
} from 'react-icons/md';



const Sidebar = () => {
	const [selected, setSelected] = useState('home');
	return (
		<div className='sidebar'>
			<div className='sb-header' onClick={()=> setSelected('home')}>
				<div className='circle'></div>
				<div className='logo'>Glitz</div>
			</div>
			<ul className='sb-body'>
				<li className={`sb-nav-item ${ selected=== 'home' && 'selected'}`}  onClick={()=> setSelected('home')}> 
					<Home size={25} /> <span>Home</span>
				</li>
				<li className={`sb-nav-item ${ selected=== 'discover' && 'selected'}`} onClick={()=> setSelected('discover')} >
					<Discover size={25} /> <span>Discover</span>
				</li>
				<li className={`sb-nav-item ${ selected=== 'calendar' && 'selected'}`} onClick={()=> setSelected('calendar')} >
					<Calendar size={25} /> <span>Calendar</span>
				</li>
				<li className={`sb-nav-item ${ selected=== 'inbox' && 'selected'}`} onClick={()=> setSelected('inbox')} >
					<Inbox size={25} /> <span>Inbox</span>
				</li>
				<li className={`sb-nav-item ${ selected=== 'friends' && 'selected'}`} onClick={()=> setSelected('friends')} >
					<User size={25} /> <span>Friends</span>
				</li>
				<li className={`sb-nav-item ${ selected=== 'setting' && 'selected'}`}  onClick={()=> setSelected('setting')}>
					<Settings size={25} /> <span>Settings</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
