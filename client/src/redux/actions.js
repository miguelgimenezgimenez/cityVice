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

export const fetchActivities = (data) => {
  return {
    type: 'FETCH_ACTIVITIES',
    url:'allActivities',
    method:'GET',
  }
};
export const createActivity = (data) => {
  return {
    type: 'CREATE_ACTIVITY',
    url:'createActivity',
    method:'POST',
    data
  }
};
