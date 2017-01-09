export const login = (user) => {
  return {
    type: 'LOGIN',
    user:user,
  }
};

export const existingUser = (data) => ({
  type: 'EXISTING_USER',
  url:'login',
  method:'POST',
  data,
  success:login


});

export const newUser = (data) => {
  return {
    type: 'NEW_USER',
    url:'newuser',
    method:'POST',
    data,
    success: login
  }
};

//ACTIVITIES
export const addActivities = (data) =>{
  return {
    type: 'ADD_ACTIVITIES',
    data
  }
}

export const filter = (polygon)=>{
  return {
    type:'FILTER_ACTIVITIES',
    polygon
  }
}

export const fetchActivities = (data) => {
  return {
    type: 'FETCH_ACTIVITIES',
    url:'fetchActivities',
    method:'GET',
    success:addActivities,
  }
};
export const createActivity = (data) => {
  return {
    type: 'CREATE_ACTIVITY',
    url:'createActivity',
    method:'POST',
    data,
    success:login
  }
};
