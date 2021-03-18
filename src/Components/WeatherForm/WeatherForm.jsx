import { useState } from 'react';

const WeatherForm = ({ callback }) => {
	const [location, setLocation] = useState();
	const api_key = process.env.REACT_APP_API_KEY;
	const updateLocation = async e => {
		e.preventDefault();
		const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=7&units=I&key=${api_key}`;
		const locationCode = await fetch(url);
		if (locationCode.status !== 200) return callback(null);
		const locationCodeJson = await locationCode.json();
		callback(locationCodeJson);
	};

	const handleChange = e => setLocation(e.target.value);

	return (
		<form onSubmit={updateLocation}>
			<input placeholder='New York' onChange={handleChange}></input>
		</form>
	);
};

export default WeatherForm;
