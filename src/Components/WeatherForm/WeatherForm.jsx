import { useState } from 'react';

const WeatherForm = ({ callback }) => {
	const [location, setLocation] = useState();
	const [coords, setCoords] = useState(undefined);
	const api_key = process.env.REACT_APP_API_KEY;
	const getLocation = () => {
		var options = {
			enableHighAccuracy: false,
			timeout: 3000,
			maximumAge: 0,
		};
		if (coords) return showPosition(coords);
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				showPosition,
				handleError,
				options
			);
	};
	const handleError = err => console.log(err);
	const showPosition = async position => {
		if (!position) return;
		setCoords(position);
		const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${position.coords.latitude}&lon=${position.coords.longitude}&days=7&units=I&key=${api_key}`;
		const locationCode = await fetch(url);
		if (locationCode.status !== 200) return callback(0);
		const locationCodeJson = await locationCode.json();
		const value = `${locationCodeJson['city_name']}, ${locationCodeJson['state_code']}, ${locationCodeJson['country_code']}`;
		setLocation(value);
	};
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
		<>
			<form onSubmit={updateLocation}>
				<h6>If the city is not accurate, try including the state/country.</h6>
				<input
					placeholder='New York, NY, US'
					onChange={handleChange}
					defaultValue={location}
				/>
				<button type='submit'>Enter</button>
			</form>
			<br />
			<button onClick={getLocation}>Get Current Location</button>
		</>
	);
};

export default WeatherForm;
