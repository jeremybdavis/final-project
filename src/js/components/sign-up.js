import React, { PropTypes } from 'react';
import Parse from '../parse';
import User from '../user';

class SignUp extends React.Component {
  onSubmit() {
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.username).value,
      email: React.findDOMNode(this.refs.email).value,
      password: React.findDOMNode(this.refs.password).value
    }

    if (!(data.username && data.email && data.password)) {
      alert('Please complete the signup form.')
      return;
    }

    Parse.User.logOut();
    let user = new Parse.User();

    user.set("username", data.username);
    user.set("password", data.password);
    user.set("email", data.email);

    // other fields can be set just like with Parse.Object

    user.signUp(null, {
      success: function(user) {
        User.setData(user).login();
        self.context.router.transitionTo('dashboard');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render () {
    return (
      <section className="sign-up-page">
        <h2>Register</h2>
        <div className="inputs">
          <input ref="username" type="text" placeholder="Username"/>
          <input className="email" ref="email" type="email" placeholder="E-mail"/>
          <input className="password" ref="password" type="password" placeholder="Password"/>
        </div>

        <div className="log-btn">
          <button ref="login" onClick={this.onSubmit.bind(this)}>Register</button>
        </div>

      </section>
    );
  }
};

SignUp.contextTypes = {
  router: React.PropTypes.func
};

export default SignUp;
