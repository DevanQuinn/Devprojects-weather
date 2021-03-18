import formatDate from '../../../Util/Dates';
import './LargeInfo.css';

const LargeInfo = ({ data }) => {
	return (
		<div id='large-info'>
			<h2>{formatDate('long', data.valid_date)}</h2>
			<div id='description'>
				<img
					alt='selected day icon'
					src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}
				/>
				<div className='grid-small'>
					<h3>High</h3>
					<h2>{data.high_temp}℉</h2>
				</div>
				<hr />
				<div className='grid-small'>
					<h3>Low</h3>
					<h2>{data.low_temp}℉</h2>
				</div>
			</div>
			<h3>{data.weather.description}</h3>
			<div id='small-data'>
				<div id='wind-speed' className='grid-small'>
					<p className='subtitle'>Wind Speed ({data.wind_cdir})</p>
					<h4>{data.wind_spd} mph</h4>
				</div>
				<div id='wind-speed' className='grid-small'>
					<p className='subtitle'>Cloud Coverage</p>
					<h4>{data.clouds}%</h4>
				</div>
				<div id='precipitation' className='grid-small'>
					<p className='subtitle'>Precipitation</p>
					<h4>{data.pop}%</h4>
				</div>
			</div>
		</div>
	);
};

export default LargeInfo;
