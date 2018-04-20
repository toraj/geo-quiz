import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const Marker = ({ text }) => <div>{text}</div>;

class Map extends Component {

	state = {
		marker: null
	};

	static defaultProps = {
		center: { lat: 59.3293, lng: 18.0686 },
		zoom: 11
	};

	placeMarker = ({ lat, lng }) => {
		this.setState(() => ({ marker: { lat, lng }}))
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

export default Map;
