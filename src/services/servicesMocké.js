import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';

export function getUser(id) {
	return USER_MAIN_DATA.filter((el) => parseInt(el.id) === parseInt(id));
}

export function getActivity(id) {
	return USER_ACTIVITY.filter((el) => parseInt(el.id) === parseInt(id));
}

export function getAverageSessions(id) {
	return USER_AVERAGE_SESSIONS.filter((el) => parseInt(el.id) === parseInt(id));
}

export function getPerformance(id) {
	return USER_PERFORMANCE.filter((el) => parseInt(el.id) === parseInt(id));
}
