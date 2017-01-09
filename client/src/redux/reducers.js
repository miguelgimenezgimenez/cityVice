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
      browserHistory.push('/main');
      return action.user[0];
    } else {
      browserHistory.push('/main');
      return action.user;
    }
    default :
    return state;
  }
};
const filter =(state=[],action)=>{
  switch (action.type) {
    case 'FILTER_ACTIVITIES':
    return action.polygon;

  }
  return state;
  
}

const activities = (state=[],action) => {
  switch (action.type) {
    case 'ADD_ACTIVITIES':
    return action.data;
    default:
    return state
  }
};



// Combining both reducers
const reducers = combineReducers({
  userLogged,activities,filter
});

export default reducers;
// REMOVE-END
