const Activity = require('../model/UserSchema');


exports.createActivity = function () {
  const data = this.request.body.data;
  console.log(data);

  const newActivity = new Activity({
    name: data.firstName,
    email:data.emailAddress
  });
  return newActivity.save()
    .then(function () {
      this.response.body = data;
    }.bind(this))
    .catch(err=> {
      console.log(err);
      return err;
    });
};
