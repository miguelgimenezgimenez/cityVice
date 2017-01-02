
import React, {
  Component,
  PropTypes,
} from 'react';
import '../style.css';




class Existing extends Component {
  constructor () {
    super();
    this.state = {
      emailAddress: '',
      password: '',
    };
  }

  updateEmailAddress (event) {
    this.setState({emailAddress: event.target.value});
  }


  updatePassword (event) {
    this.setState({password: event.target.value});
  }
  moveLabel(tag){
    if (this.state[tag]==='') {
      return "";
    } else {
      return "active highlight"
    }
  }
  render () {
    return (
      <div>
        <h1>Welcome Back!</h1>

        <div className="field-wrap">
          <label className={this.moveLabel.bind(this)("emailAddress")}>
            Email Address<span className="req">*</span>
          </label>
          <input onChange={this.updateEmailAddress.bind(this)}
                 type="email"/>
        </div>

        <div className="field-wrap">
          <label className={this.moveLabel.bind(this)("password")}>
            Password<span className="req">*</span>
          </label>
          <input onChange={this.updatePassword.bind(this)} type="password"/>        </div>
        <p className="forgot"><a href="#">Forgot Password?</a></p>
        <button className="button button-block" onClick={()=>this.props.route.login(this.state)}
        >Log In
        </button>
      </div>);

  }
}


export default Existing;
