import React from 'react';

import Parse from '../parse';
import User from '../user';

class SignIn extends React.Component {
  onSubmit() {
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.username).value,
      password: React.findDOMNode(this.refs.password).value
    }

    if (!(data.username && data.password)) {
      alert('Please complete the login form.')
      return;
    }

    Parse.User.logIn(data.username, data.password, {
      success: function(user) {
        User.setData(user).login();
        self.context.router.transitionTo('profile');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
      }
    });
  }

  render () {
    return (
      <section>
        <h2>Login</h2>
        <input ref="username" type="text" placeholder="Username"/>
        <input ref="password" type="password" placeholder="Password"/>
        <button ref="login" onClick={this.onSubmit.bind(this)}>Login</button>
      </section>
    );
  }
};

SignIn.contextTypes = {
  router: React.PropTypes.func
};

export default SignIn;
