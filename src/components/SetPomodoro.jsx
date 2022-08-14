import { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import Button from './Button';

const SetPomodoro = () => {
	const [newTimer, setNewTimer] = useState({
		work: 0.3,
		short: 0.2,
		long: 1,
		active: 'work',
	});

	const { updateExecuter } = useContext(SettingsContext);

	const handleChange = (input) => {
		const { name, value } = input.target;
		switch (name) {
			case 'work':
				setNewTimer({ ...newTimer, work: +value });
				break;
			case 'shortBreak':
				setNewTimer({ ...newTimer, short: +value });
				break;
			case 'longBreak':
				setNewTimer({ ...newTimer, long: +value });
				break;
			default:
				break;
		}
		console.log(newTimer);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateExecuter(newTimer);
	};

	return (
		<div className='form-container'>
			<form noValidate>
				<div className='input-wrapper'>
					<input
						type='number'
						className='input'
						name='work'
						onChange={handleChange}
						value={newTimer.work}
					/>
					<input
						type='number'
						className='input'
						name='shortBreak'
						onChange={handleChange}
						value={newTimer.short}
					/>
					<input
						type='number'
						className='input'
						name='longBreak'
						onChange={handleChange}
						value={newTimer.long}
					/>
				</div>
				<Button title='Set timer' _cb={handleSubmit} />
			</form>
		</div>
	);
};

export default SetPomodoro;
