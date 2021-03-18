import { useState } from 'react';

const WeatherForm = ({ callback }) => {
	const [location, setLocation] = useState();
	const api_key = process.env.REACT_APP_API_KEY;
	const getLocation = () => {
		var options = {
			enableHighAccuracy: false,
			timeout: 1000,
			maximumAge: 0,
		};
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				showPosition,
				handleError,
				options
			);
	};
	const handleError = err => console.log(err);
	const showPosition = async position => {
		const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${position.coords.latitude}&long=${position.coors.longitude}&days=7&units=I&key=${api_key}`;
		const locationCode = await fetch(url);
		if (locationCode.status !== 200) return callback(0);
		const locationCodeJson = await locationCode.json();
		callback(locationCodeJson);
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
				<input placeholder='New York' onChange={handleChange}></input>
			</form>
			<br />
			<button onClick={getLocation}>Get Current Location</button>
		</>
	);
};

export default WeatherForm;
