import React, {Component} from 'react';
import {connect} from 'react-redux';
import inside from 'point-in-polygon';

import {fetchActivities, filter} from '../../redux/actions';
import './MainStyle.css';
import MapContainer from './MapContainer';

const path=[];
const polygon=[];
const google=window.google;
let poly;
let tempArea;

class AllActivities extends Component {
  constructor () {
    super();
    this.state = {
      draw:false,
    };
  }
  toggleDraw () {
    this.setState(
      {draw:!this.state.draw}
    )
  }
  componentDidMount(){
    this.props.fetchActivities();
  }

  handleMouseMove (map) {

  }

  handleClick(map) {
    google.maps.event.addListener(map, 'click',  (event)=> {

      polygon.push([event.latLng.lat(),event.latLng.lng()]);

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(event.latLng.lat(),event.latLng.lng()),
        map: map,
        // icon:'http://localhost/img/amphitheater-2.png'


      });
      console.log(marker);


      google.maps.event.addListener(marker,'click',()=>{
        this.props.filter(polygon);
        const perimeter = new google.maps.Polygon({
          path:polygon.map(function (coord) {
            return new google.maps.LatLng(coord[0],coord[1]);
          }),
          strokeColor:"#0000FF",
          strokeOpacity:0.8,
          strokeWeight:1,
          fillColor:"#0000FF",
          fillOpacity:0.1
        });
        perimeter.setMap(map);
      });
    });
  }

  render() {
    return (<div>
      <button onClick={this.toggleDraw.bind(this)}>Draw Area</button>
      <div className='main-body'>
        <div className='mapcontainer'>
          <MapContainer
            markers={this.props.activities}
            handleClick={this.handleClick.bind(this)}
            handleMouseMove={this.handleMouseMove.bind(this)}
            draw={this.state.draw}>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
}
const mapStateToProps = (state) => {
  const filteredActivities = [];
  if (state.filter.length>1) {
    for (let i = 0; i < state.activities.length; i++) {
      const x = state.activities[i].latLng.lat;
      const y=  state.activities[i].latLng.lng;
      if (inside([x,y],state.filter)) {
        filteredActivities.push(state.activities[i]);
      }
    }
    return {
      activities:filteredActivities,
    }
  }
  return {
    activities: state.activities,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  filter: (poly) => dispatch(filter(poly)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllActivities);
