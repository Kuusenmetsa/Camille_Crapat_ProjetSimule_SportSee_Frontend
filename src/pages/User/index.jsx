import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './index.scss';

import Information from '../../components/Information';
import ChartBar from '../../components/ChartBar';
import ChartLine from '../../components/ChartLine';
import ChartRadar from '../../components/ChartRadar';
import ChartStats from '../../components/ChartStats';

import KcalIcon from '../../assets/icones/calories-icon.svg';
import ProteinIcon from '../../assets/icones/protein-icon.svg';
import GlucidIcon from '../../assets/icones/carbs-icon.svg';
import LipidIcon from '../../assets/icones/fat-icon.svg';

import { getUser, getActivity, getAverageSessions, getPerformance } from '../../services/servicesMocke';

export default function User() {
	const id = useParams().id;
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [activity, setActivity] = useState({});
	const [average, setAverage] = useState({});
	const [performance, setPerformance] = useState({});
	const [userIsLoading, setUserIsLoading] = useState(false);
	const [activityIsLoading, setActivityIsLoading] = useState(false);
	const [averageIsLoading, setAverageIsLoading] = useState(false);
	const [performanceIsLoading, setPerformanceIsLoading] = useState(false);
	const [activityError, setActivityError] = useState(null);
	const [averageError, setAverageError] = useState(null);
	const [performanceError, setPerformanceError] = useState(null);

	useEffect(() => {
		const regexId = /^[0-9]{1,}$/;
		if (!id || !regexId.test(id)) {
			navigate('/error');
		} else {
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
		}
	}, [id, user, navigate]);

	useEffect(() => {
		const regexId = /^[0-9]{1,}$/;
		if (!id || !regexId.test(id)) {
			navigate('/error');
		} else {
			getActivity(id)
				.then(function (res) {
					setActivityIsLoading(true);
					if (res && res.userId) {
						setActivity(res);
					} else {
						setActivityError('Une erreur est survenu lors du chargement des données liées à votre activité !');
					}
				})
				.catch(function () {
					setActivityError('Une erreur est survenu lors du chargement des données liées à votre activité !');
				});
		}
	}, [id, activity, navigate]);

	useEffect(() => {
		const regexId = /^[0-9]{1,}$/;
		if (!id || !regexId.test(id)) {
			navigate('/error');
		} else {
			getAverageSessions(id)
				.then(function (res) {
					setAverageIsLoading(true);
					if (res && res.userId) {
						setAverage(res);
					} else {
						setAverageError('Une erreur est survenu dans le chargement de vos données liées à vos sessions !');
					}
				})
				.catch(function () {
					setAverageError('Une erreur est survenu dans le chargement de vos données liées à vos sessions !');
				});
		}
	}, [id, average, navigate]);
	useEffect(() => {
		const regexId = /^[0-9]{1,}$/;
		if (!id || !regexId.test(id)) {
			navigate('/error');
		} else {
			getPerformance(id)
				.then(function (res) {
					setPerformanceIsLoading(true);
					if (res && res.userId) {
						setPerformance(res);
					} else {
						setPerformanceError(
							'Une erreur est survenu lors de la récupération des données liées à vos performances !'
						);
					}
				})
				.catch(function () {
					setPerformanceError('Une erreur est survenu lors de la récupération des données liées à vos performances !');
				});
		}
	}, [id, performance, navigate]);

	return (
		<>
			{userIsLoading ? (
				<main className='home'>
					<div className='home__header'>
						<h2 className='home__header--title'>
							Bonjour, {userIsLoading && <span className='home__header--title--name'>{user.firstName}</span>}
						</h2>
						<p className='home__header--text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
					</div>
					<div className='home__dashboard'>
						<div className='home__dashboard__charts'>
							{activityIsLoading && !activityError ? <ChartBar data={activity} /> : <p>{activityError}</p>}
							<div className='home__dashboard__charts--bottom'>
								{averageIsLoading && !averageError ? <ChartLine data={average} /> : <p>{averageError}</p>}
								{performanceIsLoading && !performanceError ? (
									<ChartRadar data={performance} />
								) : (
									<p>{performanceError}</p>
								)}
								{userIsLoading && <ChartStats data={user} />}
							</div>
						</div>
						{userIsLoading && (
							<div className='home__dashboard__informations'>
								<Information
									img={KcalIcon}
									poids={user.nutritionalValues.calorieCount}
									unit='kCal'
									type='Calories'
									key='Calories'
								/>
								<Information
									img={ProteinIcon}
									poids={user.nutritionalValues.proteinCount}
									unit='g'
									type='Protéines'
									key='Proteines'
								/>
								<Information
									img={GlucidIcon}
									poids={user.nutritionalValues.carbohydrateCount}
									unit='g'
									type='Glucides'
									key='Glucides'
								/>
								<Information
									img={LipidIcon}
									poids={user.nutritionalValues.lipidCount}
									unit='g'
									type='Lipides'
									key='Lipides'
								/>
							</div>
						)}
					</div>
				</main>
			) : (
				<main className='home'>
					<p>Une erreur est survenu lors du chargement des données utilisateurs</p>
				</main>
			)}
		</>
	);
}
