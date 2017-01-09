const User = require('../model/UserSchema');



exports.newUser = function () {
  const data = this.request.body.data;
  const newUser = new User({
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


exports.login = function () {
  const person = this.request.body;
  return User.find({
    email:person.data.emailAddress
  })
    .then(function (content) {
      console.log(content);
      this.response.body = content;
      return content;
    }.bind(this))
    .catch(function (err) {
      console.log(err, 'err');
      return err;
    });
};
