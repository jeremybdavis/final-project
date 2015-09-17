import React, { PropTypes } from 'react';
import Parse from '../parse';
import { Link } from 'react-router';

class ProfilePage extends React.Component {
  render() {
    let authedUser = Parse.User.current();
    return (
      <div>
        <p>Welcome {authedUser.get('username')}. This is your dashboard.</p>
        <Link to="timer">Timer</Link>
      </div>
    )
  }
}

export default ProfilePage;
