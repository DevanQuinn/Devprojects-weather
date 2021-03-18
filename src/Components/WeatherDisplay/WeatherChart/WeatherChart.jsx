import { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const WeatherChart = ({ data }) => {
	const canvas = useRef();
	useEffect(() => {
		const ctx = canvas.current.getContext('2d');
		canvas.current.height = 20;
		canvas.current.style.marginTop = '40px';

		const chart = new Chart(ctx, {
			type: 'line',
			data,
			options: {
				pointStyle: 'circle',
				spanGaps: true,
				fill: false,
				legend: { display: false },
				scales: {
					yAxes: [{ display: false }],
					xAxes: [{ display: false }],
				},
				elements: { point: { radius: 0 } },
			},
		});
		Chart.defaults.global.legend.display = false;

		return () => chart.destroy();
	});

	return (
		<div className='chartjs-wrapper'>
			<canvas ref={canvas} className='chartjs'></canvas>
		</div>
	);
};

export default WeatherChart;
