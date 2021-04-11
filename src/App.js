import { useState, useEffect } from 'react';
import { timer } from 'd3-timer';
import { ReactComponent as Logo } from './logo.svg';
import { randomHSL } from './randomHSL';
import './App.css';

function hslToHex(h, s, l) {
	l /= 100;
	const a = (s * Math.min(l, 1 - l)) / 100;
	const f = n => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0'); // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

function App() {
	// https://dev.to/abachi/how-to-change-svg-s-color-in-react-42g2
	const [time, setTime] = useState(0);
	const [color, setColor] = useState('75 96 63');
	const tickAnimation = () => {
		setTime(time => time + 1);
	};
	useEffect(() => {
		if (!(time % 48)) {
			const newColor = randomHSL(10);
			setColor(newColor);
			console.log(hslToHex(color.split(' ').map(num => parseInt(num, 10))));
		}
	}, [time]);
	useEffect(() => {
		const t = timer(tickAnimation);
		return function cleanup() {
			t.stop();
		};
	}, []);
	return (
		<div className='App'>
			<header className='App-header'>
				<Logo
					className='App-logo'
					fill={hslToHex(...color.split(' ').map(num => parseInt(num, 10)))}
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
