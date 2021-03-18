import { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const WeatherChart = ({ data }) => {
	const canvas = useRef();
	useEffect(() => {
		const ctx = canvas.current.getContext('2d');

		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
				datasets: [
					{
						data,
					},
				],
			},
			options: { pointStyle: 'circle', spanGaps: true },
		});

		return () => chart.destroy();
	});

	return (
		<div className='chartjs-wrapper'>
			<canvas ref={canvas} className='chartjs'></canvas>
		</div>
	);
};

export default WeatherChart;
