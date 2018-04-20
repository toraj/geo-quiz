import React from 'react'

const Marker = (props) => {
	console.log(props);
	const defaultStyles = {
		fontSize: '30px'
	};
	const customStyling = props.userAnswer ? { color: 'red' } : { color: 'green' };
	const styling = Object.assign({}, defaultStyles, customStyling);
	return (
		<div style={styling}>{props.userAnswer ? '👶' : '✅'}</div>
	)
};
export default Marker
