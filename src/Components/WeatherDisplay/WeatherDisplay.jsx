import { useEffect, useState } from 'react';
import WeatherChart from './WeatherChart/WeatherChart.jsx';
import InfoBlocks from './InfoBlocks/InfoBlocks.jsx';
import './WeatherDisplay.css';

const WeatherDisplay = ({ location }) => {
	const [chartData, setChartData] = useState([]);
	useEffect(() => {
		if (location)
			setChartData(
				location.data.map((day, idx) => {
					return { x: idx + 1, y: day.temp };
				})
			);
	}, [location]);
	if (location === 0) return <h3>Find the upcoming weather!</h3>;
	if (!location) return <h1>Not Found</h1>;
	return (
		<>
			<InfoBlocks location={location} />
			<WeatherChart data={chartData} />
		</>
	);
};

export default WeatherDisplay;
