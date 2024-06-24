export async function getUser(id) {
	const response = await fetch(`http://localhost:3000/user/${id}`);
	const user = await response.json();
	if (user.data) {
		const userFormat = {
			id: user.data.id,
			firstName: user.data.userInfos.firstName,
			lastName: user.data.userInfos.lastName,
			age: user.data.userInfos.age,
			nutritionalValues: {
				calorieCount: user.data.keyData.calorieCount,
				carbohydrateCount: user.data.keyData.carbohydrateCount,
				lipidCount: user.data.keyData.lipidCount,
				proteinCount: user.data.keyData.proteinCount,
			},
			todayScore: !user.data.todayScore ? user.data.score : user.data.todayScore,
		};
		return userFormat;
	} else {
		const userFormat = {};
		return userFormat;
	}
}

export async function getActivity(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/activity`);
	const activity = await response.json();
	if (activity.data) {
		const activityFormat = {
			userId: activity.data.userId,
			sessions: activity.data.sessions,
		};
		return activityFormat;
	} else {
		const activityFormat = {};
		return activityFormat;
	}
}

export async function getAverageSessions(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
	const average = await response.json();
	if (average.data) {
		const averageFormat = {
			userId: average.data.userId,
			averages: average.data.sessions,
		};
		return averageFormat;
	} else {
		const averageFormat = {};
		return averageFormat;
	}
}

export async function getPerformance(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/performance`);
	const performance = await response.json();
	if (performance.data) {
		const performanceFormat = {
			userId: performance.data.userId,
			kind: { 1: 'Intensité', 2: 'Vitesse', 3: 'Force', 4: 'Endurance', 5: 'Energie', 6: 'Cardio' },
			performances: performance.data.data,
		};
		return performanceFormat;
	} else {
		const performanceFormat = {};
		return performanceFormat;
	}
}
