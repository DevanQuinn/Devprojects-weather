import { useEffect, useState } from 'react';
import WeatherChart from './WeatherChart/WeatherChart.jsx';
import InfoBlocks from './InfoBlocks/InfoBlocks.jsx';
import LargeInfo from './LargeInfo/LargeInfo.jsx';
import './WeatherDisplay.css';

const WeatherDisplay = ({ location }) => {
	const [chartData, setChartData] = useState([]);
	const [infoSelect, setInfoSelect] = useState(0);
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
			<InfoBlocks location={location} callback={setInfoSelect} />
			<LargeInfo data={location.data[infoSelect]} />
			{true === false ? <WeatherChart data={chartData} /> : null}
		</>
	);
};

export default WeatherDisplay;
