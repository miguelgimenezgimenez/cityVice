const activity = require('../model/UserSchema');


exports.createActivity = function () {
  const data = this.request.body.data;
  console.log(data);

  const newActivity = new user({
    name: data.firstName,
    email:data.emailAddress
  });
  return newUser.save()
    .then(function () {
      this.response.body = data;
    }.bind(this))
    .catch(err=> {
      console.log(err);
      return err;
    });
};
