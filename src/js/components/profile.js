import React, { PropTypes } from 'react'
import User from '../user';

class Profile extends React.Component {
  render () {
    let message = "Please log in.";

    if (User.loggedIn) {
      message = `Welcome ${User.username}. This is your dashboard.`;
    }

    return (
      <section className="dashboard">
        <h2>Dashboard</h2>
        <p>{message}</p>
      </section>
    )
  }
};

export default Profile;
