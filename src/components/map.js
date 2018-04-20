import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import Marker from './marker';
import { currentQuestionSelector, SET_ANSWER } from '../reducers/currentGameReducer';
import { calculateScoreForAnswer } from '../geometry';

class Map extends Component {
	constructor(props) {
		super(props);
		this.onMapClicked = this.onMapClicked.bind(this);
	}

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
				text={'👆'}
			/>
		)
	};

	onMapClicked ({ lat, lng, x, y, event }) {
		// JonApi.isCloseApi(true, false)
		const { lat: currentQuestionLat, lng: currentQuestionLng } = this.props.currentQuestion.answer;
		const score = calculateScoreForAnswer({ lat, lng}, { lat: currentQuestionLat, lng: currentQuestionLng });
		this.props.dispatch({ type: SET_ANSWER, data: score });
		// is this correct?
		this.placeMarker({ lat, lng })
	};

	render() {
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
