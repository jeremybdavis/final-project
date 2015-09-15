import React, { PropTypes } from 'react';
import User from '../user';
import { Link } from 'react-router';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {User.username}. This is your dashboard.</p>
        <Link to="builder">New Recipe</Link>
        <Link to="timer">Timer</Link>
      </div>
    )
  }
}

export default ProfilePage;
