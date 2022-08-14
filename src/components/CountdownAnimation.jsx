import React from 'react';
import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({ key = 1, timer = 20, animate = true, children } = {}) => {

	const { stopTimer } = useContext(SettingsContext)
	return (
		<CountdownCircleTimer
			key={key}
			isPlaying={animate}
			duration={timer * 60}
			colors={['green', 0.33]}
         trailColor='grey'
         onComplete={
            () => stopTimer()
         }
		>
			{children}
		</CountdownCircleTimer>
	);
};

export default CountdownAnimation;
