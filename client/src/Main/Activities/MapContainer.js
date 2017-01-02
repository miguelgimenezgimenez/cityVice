import React, {PropTypes} from 'react';
import Map, {Marker, InfoWindow} from 'google-maps-react';
import {connect} from 'react-redux';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {fetchActivities, createActivity} from '../../redux/actions';

export class MapContainer extends React.Component {
  //
  // getMarkers(){
  //   const Markers = this.props.activities.map((product) => {
  //     console.log(product);
  //     return (
  //       <Product
  //         key={'activity-' + activity.id}
  //         id={activity.id}
  //         title={activity.title}
  //         description={activity.description}
  //         url={activity.url}
  //         votes={activity.votes}
  //         submitter_avatar_url={activity.submitter_avatar_url}
  //         product_image_url={activity.product_image_url}/>
  //       )
  //     })
  //     return (
  //         {Markers}
  //     )
  // }

  mapClicked(mapProps, map, clickEvent){
    const data={};
    data.lng=clickEvent.latLng.lng();
    data.lat=clickEvent.latLng.lat();
    this.props.createActivity(data);
  }
  render() {

    return (
      <div >
        <Map google={this.props.google}
          initialCenter={{lat:41.381,lng:2.15}}
          onReady={this.props.fetchActivities}
          onClick={this.mapClicked.bind(this)} style={{
            width: '40%',
            height: '800px',
            position: 'relative',
          }}zoom={14}>
          {this.getMarkers}
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
