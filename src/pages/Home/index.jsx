import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import Information from '../../components/Information';
import ChartBar from '../../components/ChartBar';
import ChartLine from '../../components/ChartLine';
import ChartRadar from '../../components/ChartRadar';
import ChartStats from '../../components/ChartStats';

import KcalIcon from '../../assets/icônes/calories-icon.svg';
import ProteinIcon from '../../assets/icônes/protein-icon.svg';
import GlucidIcon from '../../assets/icônes/carbs-icon.svg';
import LipidIcon from '../../assets/icônes/fat-icon.svg';

import { getUser, getActivity, getAverageSessions, getPerformance } from '../../services/servicesMocké';

export default function Home() {
	const id = 18; // En attendant la création de la connexion utilisateur
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [activity, setActivity] = useState({});
	const [average, setAverage] = useState({});
	const [performance, setPerformance] = useState({});
	const [userIsLoading, setUserIsLoading] = useState(false);
	const [activityIsLoading, setActivityIsLoading] = useState(false);
	const [averageIsLoading, setAverageIsLoading] = useState(false);
	const [performanceIsLoading, setPerformanceIsLoading] = useState(false);

	useEffect(() => {
		if (!id) {
			navigate('/error');
		}
	}, [id, navigate]);

	useEffect(() => {
		getUser(id)
			.then(function (res) {
				if (res && res.id) {
					setUser(res);
					setUserIsLoading(true);
				} else {
					navigate('/error');
				}
			})
			.catch(function () {
				navigate('/error');
			});
	}, [id, user, navigate]);

	useEffect(() => {
		getActivity(id)
			.then(function (res) {
				if (res && res.userId) {
					setActivity(res);
					setActivityIsLoading(true);
				} else {
					navigate('/error');
				}
			})
			.catch(function () {
				navigate('/error');
			});
	}, [id, activity, navigate]);

	useEffect(() => {
		getAverageSessions(id)
			.then(function (res) {
				if (res && res.userId) {
					setAverage(res);
					setAverageIsLoading(true);
				} else {
					navigate('/error');
				}
			})
			.catch(function () {
				navigate('/error');
			});
	}, [id, average, navigate]);
	useEffect(() => {
		getPerformance(id)
			.then(function (res) {
				if (res && res.userId) {
					setPerformance(res);
					setPerformanceIsLoading(true);
				} else {
					navigate('/error');
				}
			})
			.catch(function () {
				navigate('/error');
			});
	}, [id, performance, navigate]);

	return (
		<main className='home'>
			<div className='home__header'>
				<h2 className='home__header--title'>
					Bonjour, {userIsLoading && <span className='home__header--title--name'>{user.userInfos.firstName}</span>}
				</h2>
				<p className='home__header--text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
			<div className='home__dashboard'>
				<div className='home__dashboard__charts'>
					{activityIsLoading && <ChartBar data={activity} />}
					<div className='home__dashboard__charts--bottom'>
						{averageIsLoading && <ChartLine data={average} />}
						{performanceIsLoading && <ChartRadar data={performance} />}
						{userIsLoading && <ChartStats data={user} />}
					</div>
				</div>
				{userIsLoading && (
					<div className='home__dashboard__informations'>
						<Information img={KcalIcon} poids={user.keyData.calorieCount} unit='kCal' type='Calories' key='Calories' />
						<Information
							img={ProteinIcon}
							poids={user.keyData.proteinCount}
							unit='g'
							type='Proteines'
							key='Proteines'
						/>
						<Information
							img={GlucidIcon}
							poids={user.keyData.carbohydrateCount}
							unit='g'
							type='Glucides'
							key='Glucides'
						/>
						<Information img={LipidIcon} poids={user.keyData.lipidCount} unit='g' type='Lipides' key='Lipides' />
					</div>
				)}
			</div>
		</main>
	);
}
