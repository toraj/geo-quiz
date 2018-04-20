import * as geometry from 'spherical-geometry-js';

export function calculateScoreForAnswer(correctCoordinate, answeredCoordinate) {
  const distance = geometry.computeDistanceBetween(correctCoordinate, answeredCoordinate);
  if (distance < 1000) {
    return 10;
  } else if (distance < 5000) {
    return 5
  } else if (distance < 10000) {
    return 1
  } else {
    return 0;
  }
}