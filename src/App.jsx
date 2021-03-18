import Weather from './Components/Weather/Weather.jsx';
import './App.css';

const App = () => {
	return (
		<>
			<Weather />
			<a href='https://github.com/DevanQuinn' target='_blank' rel='noreferrer'>
				<p>Devan Quinn</p>
				<img
					id='creds'
					alt='github-icon'
					src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
				/>
			</a>
		</>
	);
};

export default App;
