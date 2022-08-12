import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownAnimation = ({ key = 1, timer = 20, animate = true, children } = {}) => {
	return (
		<CountdownCircleTimer
			key={key}
			isPlaying={animate}
			duration={timer * 60}
			colors={['green', 0.33]}
         trailColor='grey'
         onComplete={
            () => /*stopAnimate()*/null
         }
		>
			{children}
		</CountdownCircleTimer>
	);
};

export default CountdownAnimation;
