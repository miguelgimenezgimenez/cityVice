import React, {PropTypes} from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';
import {connect} from 'react-redux';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {fetchActivities, createActivity} from '../../redux/actions';

export class MapContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      markers:[],
    };
  }
  placeMarkers() {
    if (this.state.markers.length>0) {
      return this.state.markers.map((marker)=>
      <Marker key={marker} position={marker.coords}/>)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.markers !== this.state.markers) {
      console.log(this.state);
      this.setState({ markers: nextProps.markers});
    }
  }

  render() {
    return (
      <div >
        <Map google={this.props.google}
          initialCenter={{lat:41.381,lng:2.15}}
          // onReady={this.props.fetchActivities}
          onClick={this.props.handleClick.bind(this)}
          style={{
            width: '30%',
            height: '400px',
            position: 'relative',
          }}zoom={14}>
          {this.placeMarkers.bind(this)()}
        </Map>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  createActivity: (lat,lng) => dispatch(createActivity(lat,lng)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
