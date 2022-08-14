import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
	const [pomodoro, setPomodoro] = useState(0);
	const [executing, setExecuting] = useState({});
	/*
  {
	   	work: 0.3,
	 	  short: 0.2,
	 	  long: 1,
	 	  active: 'work',
	}
  */
	const [startAnimate, setStartAnimate] = useState(false);

	const startTimer = () => {
		setStartAnimate(true);
	};

	const pauseTimer = () => {
		setStartAnimate(false);
	};

	const stopTimer = () => {
		setStartAnimate(false);
	};

	const settingBtn = () => {
		setExecuting({});
		setPomodoro(0);
	};

	const setCurrentTimer = (active_state) => {
		updateExecute({
			...executing,
			active: active_state,
		});
		setTimerTime(executing);
	};

	const updateExecute = (updateExecutings) => {
		setExecuting(updateExecutings);
		setTimerTime(updateExecutings);
	};

	const setTimerTime = (evaluate) => {
		switch (evaluate.active) {
			case 'work':
				setPomodoro(evaluate.work);
				break;
			case 'short':
				setPomodoro(evaluate.short);
				break;
			case 'long':
				setPomodoro(evaluate.long);
				break;

			default:
				setPomodoro(0);
				break;
		}
	};

	const child = ({ remainingTime }) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = remainingTime % 60;

		return `${minutes} : ${seconds}`;
	};

	return (
		<SettingsContext.Provider
			value={{
				pomodoro,
				executing,
				startAnimate,
				startTimer,
				pauseTimer,
				stopTimer,
				settingBtn,
				setCurrentTimer,
				updateExecute,
				child,
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	);
};

export default SettingsContextProvider;
