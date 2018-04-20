import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import Marker from './marker';
import { currentQuestionSelector, SET_SCORE } from '../reducers/currentGameReducer';
import { calculateScoreForAnswer } from '../geometry';

class Map extends Component {

	state = {
		marker: null
	};

	static defaultProps = {
		center: { lat: 45.152065, lng: 0.396875 },
		zoom: 1
	};

	placeMarker = (marker) => {
		this.setState(() => ({ marker: {...marker} }))
	};

	renderMarker = () => {
		if (this.state.marker === null) {
			return null;
		}

		return (
			<Marker
				{...this.state.marker}
				text={'Where\'s Waldo?'}
			/>
		)
	};

	onMapClicked = ({ lat, lng, x, y, event }) => {
		// JonApi.isCloseApi(true, false)
		const score = calculateScoreForAnswer({ lat, lng}, { lat: lat + 0.0000004, lng })
		this.props.dispatch({ type: SET_SCORE, data: score });
		// is this correct?
		this.placeMarker({ lat, lng })
	};

	render() {
		console.log(this.props.currentQuestion);
		return (
			<div className='map'>
				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onClick={this.onMapClicked}
				>
					{this.renderMarker()}
				</GoogleMapReact>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentQuestion: currentQuestionSelector(state)
	}
};

export default connect(mapStateToProps)(Map);
