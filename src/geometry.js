import { computeDistanceBetween } from 'spherical-geometry-js';

export function calculateScoreForAnswer(correctCoordinate, answeredCoordinate) {
	const distance = computeDistanceBetween(correctCoordinate, answeredCoordinate);
	if (distance < 10000) {
		return 10;
	} else if (distance < 50000) {
		return 5
	} else if (distance < 100000) {
		return 1
	} else {
		return 0;
	}
}
