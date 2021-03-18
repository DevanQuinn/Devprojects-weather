import { useState } from 'react';
import WeatherForm from '../WeatherForm/WeatherForm.jsx';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay.jsx';

const Weather = () => {
	const [location, setLocation] = useState(0);
	// const [unit, toggleUnit] = useReducer(
	// 	unit => (unit = unit === 'metric' ? 'imperial' : 'metric'),
	// 	'imperial'
	// );

	return (
		<>
			{location === 0 || !location ? (
				<WeatherForm callback={setLocation} />
			) : null}
			<WeatherDisplay location={location} reset={setLocation} />
		</>
	);
};

export default Weather;
