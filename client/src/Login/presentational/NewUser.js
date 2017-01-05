import React, {
  Component,
  PropTypes,
} from 'react';
let emailAddress = '';


import '../style.css';



class NewUser extends Component {
  constructor () {
    super();
    this.state = {
      emailAddress:'',
      firstName:'',
      lastName:'',
      password:''
    };
  }

  updateEmailAddress (event)  {
    this.setState({emailAddress: event.target.value});
  }
  updatefirstName (event)  {
    this.setState({firstName: event.target.value});
  }
  updateLastName (event)  {
    this.setState({lastName: event.target.value});
  }
  updatePassword (event)  {
    this.setState({password: event.target.value});
  }



  moveLabel(tag) {
    if (this.state[tag]==='') {
      return '';
    } else {
      return "active highlight"
    }
  }

  render () {
    return (
      <div id="signup">
        <h1>Sign Up for Free</h1>
        <div className="top-row">
          <div className="field-wrap">
            <label className={this.moveLabel.bind(this)("firstName")}>
              First Name<span className="req">*</span>
            </label>
            <input onChange={this.updatefirstName.bind(this)} type="text"/>
          </div>

          <div className="field-wrap">
            <label className={this.moveLabel.bind(this)("lastName")}>
              Last Name<span className="req">*</span>
            </label>
            <input onChange={this.updateLastName.bind(this)} type="text"/>
          </div>
        </div>

        <div className="field-wrap">
          <label className={this.moveLabel.bind(this)("emailAddress")}>
            Email Address<span className="req">*</span>
          </label>
          <input onChange={this.updateEmailAddress.bind(this)}
                 type="email"/>
        </div>

        <div className="field-wrap">
          <label className={this.moveLabel.bind(this)("password")}> Set A Password<span className="req">*</span>
          </label>
          <input onChange={this.updatePassword.bind(this)} type="password"/>
        </div>

        {/* TODO preguntar si esto va asi*/}
        <button type="submit" className="button button-block" onClick={()=>this.props.route.newUser(this.state)}>Get Started</button>
      </div>
    )
  }
}

export default NewUser;
