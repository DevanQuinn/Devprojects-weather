import formatDate from '../../../Util/Dates';

const InfoBlocks = ({ location }) => {
	return (
		<>
			<h1>
				{location['city_name']}, {location['state_code']}
			</h1>
			<div id='weather-container'>
				{location.data.map((day, i) => {
					const isToday = i === 0;
					const id = isToday ? 'weather-today' : null;
					const date = isToday ? 'Today' : formatDate(day.datetime);
					return (
						<div key={i} className='weather-block' id={id}>
							<h3>{date}</h3>
							<img
								alt='weather icon'
								src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
							/>
							<h4>
								{day.high_temp}℉ | {day.low_temp}℉
							</h4>
							<p>
								<strong>{day.rh}%</strong> Humidity
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default InfoBlocks;
