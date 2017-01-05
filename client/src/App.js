import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
//Local imports
import NewUser from './Login/presentational/NewUser';
import Existing from './Login/presentational/Existing';
import './App.css';
import Login from './Login/Login';
import {existingUser, newUser, createActivity} from './redux/actions';
import Main from './Main/Main';
import AllActivities from './Main/Containers/AllActivities';
import Form from './Main/Containers/Form';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path='/' component={Login}>
                        <Route path='/newuser' newUser={this.props.newUser} component={NewUser}/>
                        <Route path='/existing' login={this.props.existingUser} component={Existing}/>
                    </Route>
                    <Route path='/main' component={Main}>
                      <Route path='/all' component={AllActivities}/>
                      <Route path='/createactivity' component={Form}/>
                    </Route>
                </Router>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    existingUser: (data) => dispatch(existingUser(data)),
    newUser: (data) => dispatch(newUser(data)),
    // createActivity: (data) => dispatch(createActivity(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
