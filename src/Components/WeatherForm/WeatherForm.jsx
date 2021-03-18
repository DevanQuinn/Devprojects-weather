import { useState } from 'react';

const WeatherForm = ({ callback }) => {
	const [location, setLocation] = useState();
	const [coords, setCoords] = useState();
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
		else handleError("doesn't exist");
	};
	const handleError = err => console.log(err);
	const showPosition = async position => {
		if (!position) return;
		setCoords(position);
		const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${position.coords.latitude}&lon=${position.coords.longitude}&days=7&units=I&key=${api_key}`;
		const locationCode = await fetch(url);
		if (locationCode.status !== 200) return;
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
			<h1>7-Day Weather Forecast</h1>
			<h6 style={{ marginTop: '-20px' }}>
				<a href='https://weatherbit.io' target='_blank' rel='noreferrer'>
					Powered by Weatherbit.io
				</a>
			</h6>
			<form onSubmit={updateLocation}>
				<input
					placeholder='City Name'
					onChange={handleChange}
					defaultValue={location}
				/>
				<button type='submit' disabled={!location?.length}>
					Enter
				</button>
				<h6 style={{ marginTop: '5px' }}>Ex: New York, NY, US</h6>
			</form>
			<button onClick={getLocation}>Get Current Location</button>
		</>
	);
};

export default WeatherForm;
