import React, { useState } from 'react';
import {
	MdCreditCard as Credit,
	MdAccountCircle as Account,
	MdVpnKey as Key,
	MdPowerSettingsNew as Off,
} from 'react-icons/md';

import BillingSettings from './BillingSettings';

const Settings = () => {
	const [selected, setSelected] = useState('');

	return (
		<div className='settings'>
			<ul className='settings-list'>
				<h2>Settings</h2>
				<li
					className={`settings-option ${selected === 'billing' && 'selected'} `}
					onClick={() => setSelected('billing')}>
					<Credit size={25} /> <span>Billing Settings</span>
				</li>
				<li
					className={`settings-option ${
						selected === 'user-info' && 'selected'
					}`}
					onClick={() => setSelected('user-info')}>
					<Account size={25} /> <span>Update User Info</span>
				</li>
				<li
					className={`settings-option ${
						selected === 'user-password' && 'selected'
					}`}
					onClick={() => setSelected('user-password')}>
					<Key size={25} /> <span>Update Password</span>
				</li>
				<li
					className={`settings-option ${selected === 'option' && 'selected'}`}
					onClick={() => setSelected('option')}>
					<span>Some Option</span>
				</li>
				<li
					className={`settings-option ${selected === 'sign-out' && 'selected'}`}
					onClick={() => setSelected('sign-out')}>
					<Off size={25} /> <span>Sign-Out</span>
				</li>
			</ul>
			<div className='devider'></div>
			<div className='settings-content'>
				<BillingSettings />
			</div>
		</div>
	);
};

export default Settings;
