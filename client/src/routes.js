import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import DashBoard from './';
import Login from './Login/Login';
import Existing from './Login/presentational/Existing';
import NewUser from './Login/presentational/NewUser';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login}/>
    <Route path='login' component={Login}>
      <Route path='/newuser' createUser={this.createUser} component={NewUser}/>
      <Route path='/existing' login={this.logIn} component={Existing}/>

    </Route>
  </Route>
);