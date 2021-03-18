import formatDate from '../../../Util/Dates';
import { useState, useRef } from 'react';

const InfoBlocks = ({ location, reset, select }) => {
	const [selectedBlock, setSelectedBlock] = useState(0);
	const selectBlock = useRef();

	const handleClick = index => {
		setSelectedBlock(index);
		select(index);
		console.log(selectBlock);
		const el = document.getElementsByClassName('weather-block')[index];
		el.scrollTo(window.innerWidth / 2, 0);
	};

	const handleReset = () => reset(0);

	return (
		<>
			<h1 id='area'>
				{location['city_name']}, {location['state_code']}
				<img
					src='https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-3/100/Refresh_Reset_Reload_Again_Restart-512.png'
					alt='reset-icon'
					onClick={handleReset}
				/>
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
