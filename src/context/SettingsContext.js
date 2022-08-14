import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
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

	const updateExecute = (updateExecutings) => {
		setExecuting(updateExecutings);
	};

	const setTimerTime = (evaluate) => {
		switch (evaluate.active) {
			case 'work':
				setPomodoro(evaluate.work);
				break;

			default:
				break;
		}
	};

	return (
		<SettingsContext.Provider value={{ stopTimer, updateExecute }}>
			{children}
		</SettingsContext.Provider>
	);
};

export default SettingsContextProvider;
