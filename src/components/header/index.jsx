import React, { useState } from 'react';
import {
	MdNotificationsNone as Notification,
	MdSearch as Search,
} from 'react-icons/md';
const Header = () => {
	const [search, setSearch] = useState('');
	return (
		<div className='header'>
			<div className='search'>
				<Search size={25} />
				<input
					type='text'
					placeholder='Search'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<Notification size={35} />
		</div>
	);
};

export default Header;
