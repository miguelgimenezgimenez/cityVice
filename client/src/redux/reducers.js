// REMOVE-START
import { combineReducers } from 'redux';
import { browserHistory} from 'react-router';


const userLogged = (state={},action) => {
  switch (action.type) {

    case 'LOGIN':
    //todo refactor
    if (action.user.length === 0) {
      return state;
    }
    if (Array.isArray(action.user)) {
      browserHistory.push('/home');
      return action.user[0];
    } else {
      browserHistory.push('/home');
      return action.user;
    }

    default :
    return state;

  }
};
const activities = (state=[],action) => {
  switch (action.type) {
    case 'ADD_TO_MAP':
    return state;
    default :
    return state;
  }

};



// Combining both reducers
const reducers = combineReducers({
  userLogged,activities
});

export default reducers;
// REMOVE-END
