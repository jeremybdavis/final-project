import React from 'react';

import Parse from '../../parse';

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
        self.context.router.transitionTo('profile');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
      }
    });
  }

  render () {
    return (
      <section className="sign-in-page">
        <h2>Login</h2>

          <div className="inputs">
            <input ref="username" type="text" placeholder="Username"/>
            <input className="password" ref="password" type="password" placeholder="Password"/>
          </div>

          <div className="log-btn">
            <button ref="login" onClick={this.onSubmit.bind(this)}>Login</button>
          </div>

      </section>
    );
  }
};

SignIn.contextTypes = {
  router: React.PropTypes.func
};

export default SignIn;
