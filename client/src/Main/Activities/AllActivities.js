import React, {Component} from 'react';

import './AllActivities.css';
import MapContainer from './MapContainer';



class AllActivities extends Component {

    render() {
        return (
            <div className='main-body'>
              <div  className='event-data'></div>
                <div className='map-container'>
                  <MapContainer google={window.google}></MapContainer>
                </div>
            </div>
        );
    }
}
export default AllActivities;
