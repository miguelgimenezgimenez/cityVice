import React, {PropTypes} from 'react';
// import  {Marker, InfoWindow} from 'google-maps-react';
import Map from '../../GoogleMapsV2/Container';

import {connect} from 'react-redux';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {fetchActivities, createActivity} from '../../redux/actions';

let map;
const google = window.google;
const markers=[];

export class MapContainer extends React.Component{
  componentDidMount(){
    this.loadMap();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'next');

    markers.forEach((marker)=>{
      marker.setMap(null);
    })
    if (nextProps.markers) {
      nextProps.markers.forEach(activity=>{
        const  marker = new google.maps.Marker({
          position: new google.maps.LatLng(activity.latLng.lat,activity.latLng.lng),
          map: map,

        });
        marker.setAnimation(google.maps.Animation.BOUNCE);

        markers.push(marker);
      })
    }
  }

  handleMouseMove (){
    if (this.props.draw) {
      this.props.handleMouseMove(map);
    }
  }

  loadMap(){
    const mapProperties = {
      center:new google.maps.LatLng(41.384279176844764,2.1526336669921875),
      zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(this.refs.map,mapProperties);

  }

  render() {
    return (
      <div
        className='mapcontainer'
        ref='map'
        onClick={()=>this.props.handleClick(map)}
        onMouseMove={()=>this.handleMouseMove(map)}>
      </div>
    );
  }
}
export default MapContainer;


// const mapStateToProps = (state) => ({});
// const mapDispatchToProps = (dispatch) => ({
//   fetchActivities: () => dispatch(fetchActivities()),
//   createActivity: (lat,lng) => dispatch(createActivity(lat,lng)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
