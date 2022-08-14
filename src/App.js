// import CountdownAnimation from "./components/CountdownAnimation";
import { useContext, useEffect } from 'react';
import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation';
import SetPomodoro from './components/SetPomodoro';
import { SettingsContext } from './context/SettingsContext';

function App() {
	const {
		pomodoro,
		executing,
		setCurrentTimer,
		settingBtn,
		startAnimate,
		child,
		startTimer,
		pauseTimer,
		updateExecute,
	} = useContext(SettingsContext);
  
  useEffect(() => updateExecute(executing), [executing, startAnimate, updateExecute]);
	return (
		<div className='container'>
			<h1>POMODORO</h1>
			<small>Soyez productif </small>
			{pomodoro === 0 ? (
				<SetPomodoro />
			) : (
				<>
					<ul className='labels'>
						<li>
							<Button
								title='work'
								activeClass={executing.active === 'work' && 'active-label'}
								_cb={() => setCurrentTimer('work')}
							/>
						</li>
						<li>
							<Button
								title='Short break'
								activeClass={executing.active === 'short' && 'active-label'}
								_cb={() => setCurrentTimer('short')}
							/>
						</li>
						<li>
							<Button
								title='long break'
								activeClass={executing.active === 'long' && 'active-label'}
								_cb={() => setCurrentTimer('long')}
							/>
						</li>
					</ul>
					<Button title='settings' _cb={settingBtn} />
					<div className='time-container'>
						<div className='time-wrapper'>
							<CountdownAnimation
								key={pomodoro}
								timer={pomodoro}
								animate={startAnimate}
							>
								{child}
							</CountdownAnimation>
						</div>
					</div>
					<div className='button-swapper'>
						<Button
							title='start'
							className={!startAnimate.toString() ? 'active' : undefined}
							_cb={startTimer}
						/>
						<Button
							title='Pause'
							className={startAnimate.toString() ? 'active' : undefined}
							_cb={pauseTimer}
						/>
					</div>
				</>
			)}
			
		</div>
	);
}

export default App;
