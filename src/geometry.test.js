import { LatLng } from 'spherical-geometry-js'
import { calculateScoreForAnswer } from './geometry'

it('renders without crashing', () => {
  expect(calculateScoreForAnswer(new LatLng(59.3296425,18.0862921), new LatLng(59.311467,18.0731621))).toBe(5);
  expect(calculateScoreForAnswer(new LatLng(59.3296425,18.0862921), new LatLng(59.7810319,18.8157323))).toBe(0);
  expect(calculateScoreForAnswer(new LatLng(59.3296425,18.0862921), new LatLng(59.327716,18.0866354))).toBe(10);
  expect(calculateScoreForAnswer(new LatLng(59.3296425,18.0862921), new LatLng(59.2744323,18.1383055))).toBe(1);
});