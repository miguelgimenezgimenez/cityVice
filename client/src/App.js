import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
//Local imports
import NewUser from './Login/presentational/NewUser';
import Existing from './Login/presentational/Existing';
import './App.css';
import Login from './Login/Login';
import {existingUser, newUser} from './redux/actions';
import Main from './Main/Main';
import AllActivities from './Main/Activities/AllActivities';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path='/' component={Login}>
                        <Route path='/newuser' createUser={this.props.newUser} component={NewUser}/>
                        <Route path='/existing' login={this.props.existingUser} component={Existing}/>
                    </Route>
                    <Route path='/home' component={Main}>
                      <Route path='/all' component={AllActivities}></Route>
                    </Route>
                </Router>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    existingUser: (data) => dispatch(existingUser(data)),
    newUser: (data) => dispatch(newUser(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
