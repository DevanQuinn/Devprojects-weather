import formatDate from '../../../Util/Dates';
import { useState, useRef } from 'react';

const InfoBlocks = ({ location, callback }) => {
	const [selectedBlock, setSelectedBlock] = useState(0);
	const selectBlock = useRef();

	const handleClick = index => {
		setSelectedBlock(index);
		callback(index);
	};

	return (
		<>
			<h1 id='area'>
				{location['city_name']}, {location['state_code']}
			</h1>
			<div id='weather-container'>
				{location.data.map((day, i) => {
					const isSelected = i === selectedBlock;
					const isToday = i === 0;
					const id = isSelected ? 'weather-selected' : null;
					const date = isToday ? 'Today' : formatDate('short', day.valid_date);
					return (
						<div
							key={i}
							className='weather-block'
							id={id}
							onClick={() => handleClick(i)}
							ref={selectBlock[i]}
						>
							<h3>{date}</h3>
							<img
								alt='weather icon'
								src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
							/>
							<h4>{day.temp}℉</h4>
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
