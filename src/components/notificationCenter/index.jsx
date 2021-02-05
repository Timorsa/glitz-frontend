import React from 'react';
import {
	MdExpandMore as Expand,
	MdExpandLess as ExpandLess,
} from 'react-icons/md';
import { FaAndroid, FaAppStoreIos } from 'react-icons/fa';
const NotificationCenter = () => {
	return (
		<div className='notification-center'>
			<div className='nc-header'>
				<div className='avatar'>
					<img
						src='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
						alt=''
					/>
				</div>
				<h3 className='name'>Samara Lore</h3>
				<Expand size={30} />
			</div>
			<div className='nc-body'>
				<section>
					<h3>Up Coming Events</h3>
					<span className='devider'></span>
				</section>
				<section>
					<h3>Purchase History</h3>
					<span className='devider'></span>
				</section>
				<section></section>
			</div>
			<div className='nc-footer'>
				<h3 className='caption'>
					<span>
						IOS and Android APPS <br />
						<span className='black-bg'>Comming Soon...</span>
					</span>
				</h3>
			</div>
		</div>
	);
};

export default NotificationCenter;
