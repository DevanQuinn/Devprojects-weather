import { useEffect, useState } from 'react';
import WeatherChart from './WeatherChart/WeatherChart.jsx';
import InfoBlocks from './InfoBlocks/InfoBlocks.jsx';
import LargeInfo from './LargeInfo/LargeInfo.jsx';
import './WeatherDisplay.css';

const WeatherDisplay = ({ location, reset }) => {
	const [chartData, setChartData] = useState([]);
	const [infoSelect, setInfoSelect] = useState(0);
	useEffect(() => {
		if (location)
			setChartData({
				datasets: [
					{
						label: 'Temperature',
						borderColor: 'rgb(54, 54, 54)',
						borderWidth: '5',
						spanGaps: true,
						pointHoverRadius: 7.5,
						backgroundColor: 'rgb(101, 148, 239)',
						data: location.data.map((day, idx) => {
							return {
								x: idx + 1,
								y: day.temp,
							};
						}),
					},
				],

				labels: location.data.map(day => {
					return day.valid_date;
				}),
			});
	}, [location]);
	if (location === 0)
		return (
			<>
				<br />
				<br />
				<hr />
			</>
		);
	if (!location) return <h1>Not Found</h1>;
	return (
		<>
			<InfoBlocks location={location} reset={reset} select={setInfoSelect} />
			<WeatherChart data={chartData} />
			<LargeInfo data={location.data[infoSelect]} />
		</>
	);
};

export default WeatherDisplay;
