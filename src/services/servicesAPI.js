export async function getUser(id) {
	const response = await fetch(`http://localhost:3000/user/${id}`);
	const user = await response.json();
	return user.data ? user.data : {};
}

export async function getActivity(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/activity`);
	const activity = await response.json();
	return activity.data ? activity.data : {};
}

export async function getAverageSessions(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
	const average = await response.json();
	return average.data ? average.data : {};
}

export async function getPerformance(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/performance`);
	const performance = await response.json();
	return performance.data ? performance.data : {};
}
