import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchActivities} from '../../redux/actions';
import './AllActivities.css';
import MapContainer from './MapContainer';



class AllActivities extends Component {
  handleClick(mapProps,map,clickEvent) {
    // const coords={};
    //   coords.lng=clickEvent.latLng.lng();
    //   coords.lat=clickEvent.latLng.lat();
    // this.setState({coords})
  }
  render() {
    return (
      <div className='main-body'>
        <div  className='event-data'></div>
        <div className='map-container'>
          <MapContainer google={window.google}
            markers={this.props.allActivities}
            handleClick={this.handleClick.bind(this)}>
          </MapContainer>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allActivities: state.allactivities,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),

});
export default connect(mapStateToProps, mapDispatchToProps)(AllActivities);
