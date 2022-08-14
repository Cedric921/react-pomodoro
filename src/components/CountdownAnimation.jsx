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
			colors={['#6d9b6d', '#eed254', '#9b0000']}
			colorsTime={[timer * 60, timer * 60 /2, 0]}
			strokeWidth={6}
			size={220}
			trailColor='#c78181'
			onComplete={() => stopTimer()}
		>
			{children}
		</CountdownCircleTimer>
	);
};

export default CountdownAnimation;
