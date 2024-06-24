import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';

export async function getUser(id) {
	const user = USER_MAIN_DATA.filter((el) => parseInt(el.id) === parseInt(id));
	if (user.length >= 1) {
		const userFormat = {
			id: user[0].id,
			firstName: user[0].userInfos.firstName,
			lastName: user[0].userInfos.lastName,
			age: user[0].userInfos.age,
			nutritionalValues: {
				calorieCount: user[0].keyData.calorieCount,
				carbohydrateCount: user[0].keyData.carbohydrateCount,
				lipidCount: user[0].keyData.lipidCount,
				proteinCount: user[0].keyData.proteinCount,
			},
			todayScore: !user[0].todayScore ? user[0].score : user[0].todayScore,
		};
		return userFormat;
	} else {
		const userFormat = {};
		return userFormat;
	}
}

export async function getActivity(id) {
	const activity = USER_ACTIVITY.filter((el) => parseInt(el.userId) === parseInt(id));
	if (activity.length >= 1) {
		const activityFormat = {
			userId: activity[0].userId,
			sessions: activity[0].sessions,
		};
		return activityFormat;
	} else {
		const activityFormat = {};
		return activityFormat;
	}
}

export async function getAverageSessions(id) {
	const average = USER_AVERAGE_SESSIONS.filter((el) => parseInt(el.userId) === parseInt(id));
	if (average.length >= 1) {
		const averageFormat = {
			userId: average[0].userId,
			averages: average[0].sessions,
		};
		return averageFormat;
	} else {
		const averageFormat = {};
		return averageFormat;
	}
}

export async function getPerformance(id) {
	const performance = USER_PERFORMANCE.filter((el) => parseInt(el.userId) === parseInt(id));
	if (performance.length >= 1) {
		const performanceFormat = {
			userId: performance[0].userId,
			kind: { 1: 'Intensité', 2: 'Vitesse', 3: 'Force', 4: 'Endurance', 5: 'Energie', 6: 'Cardio' },
			performances: performance[0].data,
		};
		return performanceFormat;
	} else {
		const performanceFormat = {};
		return performanceFormat;
	}
}
