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
			<WeatherForm callback={setLocation} />
			<WeatherDisplay location={location} />
		</>
	);
};

export default Weather;
