import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11
  }

  render() {
    return (
      <div className='map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          // Add onClick event
          >
          <AnyReactComponent
            lat={ 59.3293 }
            lng={ 18.1686 }
            text={ 'Where\'s Waldo?' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
