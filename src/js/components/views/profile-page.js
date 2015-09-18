import React, { PropTypes } from 'react';
import Parse from '../../parse';
import { Link } from 'react-router';

class ProfilePage extends React.Component {
  render() {
    let authedUser = Parse.User.current();
    return (
      <div>
        <p>Welcome {authedUser.get('username')}. Thanks for signing up and participating in the beta of this project! Forgive the mess. This page will one day serve as your dashboard and profile page. Thanks for your patience.</p>
        <Link to="timer">Now get off this ugly page and start making coffee.</Link>
      </div>
    )
  }
}

export default ProfilePage;
