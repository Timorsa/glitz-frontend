import React, { useState } from 'react';
import {
	MdAdd as Add,
	MdModeEdit as Edit,
	MdDelete as Delete,
} from 'react-icons/md';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

const BillingSettings = () => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [mm, setMM] = useState('');
	const [yy, setYY] = useState('');
	const [cvc, setCvc] = useState('');

	const [showForm, setShowForm] = useState(true);

	const [focusItem, setFocuseItem] = useState('');
	return (
		<div className='billing-settings'>
			<h2>Billing Settings</h2>
			<div className='card-model'>
				<Cards
					cvc={cvc}
					expiry={`${mm + '/' + yy}`}
					focused={focusItem}
					name={name}
					number={number}
				/>
			</div>
			{!showForm ? (
				<div className='credit-lists'>
					<div className='add-card'>
						<Add />
						Add New Card
					</div>
					<div className='card-item'>
						<span>**********7323</span>
						<div className='action-btns'>
							<span>
								<Edit />
							</span>
							<span>
								<Delete />
							</span>
						</div>
					</div>
				</div>
			) : (
				<form onSubmit={() => alert('miaw')} className='credit-form'>
					<input
						type='text'
						name='name'
						required
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						onFocus={(e) => setFocuseItem(e.target.name)}
					/>

					<input
						type='number'
						name='number'
						required
						placeholder='Card Number'
						minLength='13'
						maxLength='19'
						value={number}
						onChange={(e) => setNumber(e.target.value)}
						onFocus={(e) => setFocuseItem(e.target.name)}
					/>

					<input
						type='text'
						name='cvc'
						required
						placeholder='CVV/CVC'
						value={cvc}
						minLength='3'
						maxLength='4'
						onChange={(e) => setCvc(e.target.value)}
						onFocus={(e) => setFocuseItem(e.target.name)}
					/>
					<div className='mm-yy'>
						<input
							type='number'
							name='expiry'
							value={mm}
							required
							minLength='2'
							maxLength='2'
							placeholder='MM'
							onChange={(e) => setMM(e.target.value)}
							onFocus={(e) => setFocuseItem(e.target.name)}
						/>
						<input
							type='number'
							name='expiry'
							value={yy}
							required
							minLength='2'
							maxLength='2'
							placeholder='YY'
							onChange={(e) => setYY(e.target.value)}
							onFocus={(e) => setFocuseItem(e.target.name)}
						/>
					</div>

					<button type='submit' className='credit-form-btn'>
						Save
					</button>
				</form>
			)}
		</div>
	);
};

export default BillingSettings;
