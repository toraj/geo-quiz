import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import Marker from './marker';
import { currentQuestionSelector, setAnswer } from '../reducers/currentGameReducer';
import { calculateScoreForAnswer } from '../geometry';

const mapOptions = {
  styles: [
    {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]
};

class Map extends Component {
	constructor(props) {
		super(props);
		this.onMapClicked = this.onMapClicked.bind(this);
	}

	state = {
		markers: [],
	};

	static defaultProps = {
		center: { lat: 45.152065, lng: 0.396875 },
		zoom: 1
	};

	placeMarker = (marker, userAnswer = false) => {
		const modifiedMarker = Object.assign({}, marker, {userAnswer});
		this.setState((prevState) => {
			return {
				markers: prevState.markers.concat(modifiedMarker)
			}
		});
	};

	renderMarkers = () => {
		if (this.state.markers.length === 0) {
			return null;
		}

		return this.state.markers.map((marker, index) => (
			<Marker
				key={index}
				{...marker}
			/>
		))
	};

	resetMarkers = () => {
		this.setState(() => {
			return {
				markers: []
			}
		})
	};

	onMapClicked({ lat, lng, x, y, event }) {
		this.resetMarkers();
		const { lat: currentQuestionLat, lng: currentQuestionLng } = this.props.currentQuestion.answer;
		const score = calculateScoreForAnswer({ lat, lng }, { lat: currentQuestionLat, lng: currentQuestionLng });
		this.props.setAnswer(score);
		this.placeMarker({ lat, lng }, true);
		this.placeMarker({ lat: currentQuestionLat, lng: currentQuestionLng }, false)
	};

	render() {
		return (
			<div className='map'>
				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={mapOptions}
					onClick={this.onMapClicked}
				>
					{this.renderMarkers()}
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

export default connect(mapStateToProps, { setAnswer })(Map);
