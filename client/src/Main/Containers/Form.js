import React, { Component } from 'react'

import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'
import './FormStyle.css';
import MapContainer from './MapContainer';
import {connect} from 'react-redux';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {fetchActivities, createActivity} from '../../redux/actions';


const type = [
  { text: 'Rewarded Activity', value: 'reward' },
  { text: 'Leisure Activity', value: 'leisure' },
  { text: 'Cultural Activity', value: 'cultural' },
  { text: 'Sports/Adventure Activity', value: 'sports' },
]

class FormExampleOnSubmit extends Component {
  constructor () {
    super();
    this.state = {
      formData: {},
      coords:{},
    };
  }


  handleChange (e, { value }) {
    this.setState({ value })
  }

  handleSubmit (e,{formData}) {
    e.preventDefault()
    const data={} ;
    data.details=(JSON.stringify(formData, null, 2));
    data.coords=this.state.coords;
    this.setState({ formData:formData })
    this.props.createActivity(data);

  }

  handleClick(mapProps,map,clickEvent) {
    const coords={};
      coords.lng=clickEvent.latLng.lng();
      coords.lat=clickEvent.latLng.lat();
    this.setState({coords})
  }

  render() {
    const { formData, value } = this.state
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>

        <Form.Group widths='equal'>
          <Form.Input name='title' placeholder='Title' />
          <Form.Select  name='activityType' options={type} placeholder='Activity Type' />
        </Form.Group>

        <Form.Group widths='2'>
          <Form.Field>

            <div className='map-container'>
              <MapContainer google={window.google} markers={[this.state]} handleClick={this.handleClick.bind(this)}></MapContainer>
            </div>
          </Form.Field>

        </Form.Group>
        <Form.TextArea name='details'  placeholder='Activity Details' rows='3' />
        <Button primary type='submit'>Submit</Button>

      </Form>
    )
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  createActivity: (data) => dispatch(createActivity(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormExampleOnSubmit);
