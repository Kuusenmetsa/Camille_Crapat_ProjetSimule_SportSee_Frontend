import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';

export async function getUser(id) {
	const user = USER_MAIN_DATA.filter((el) => parseInt(el.id) === parseInt(id));
	return user.length >= 1 ? user[0] : {};
}

export async function getActivity(id) {
	const activity = USER_ACTIVITY.filter((el) => parseInt(el.userId) === parseInt(id));
	return activity.length >= 1 ? activity[0] : {};
}

export async function getAverageSessions(id) {
	const average = USER_AVERAGE_SESSIONS.filter((el) => parseInt(el.userId) === parseInt(id));
	return average.length >= 1 ? average[0] : {};
}

export async function getPerformance(id) {
	const performance = USER_PERFORMANCE.filter((el) => parseInt(el.userId) === parseInt(id));
	return performance.length >= 1 ? performance[0] : {};
}
