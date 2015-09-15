import React, { PropTypes } from 'react'
import User from '../../user';
import { Link } from 'react-router';
import ProfilePage from '../profile-page';

class Profile extends React.Component {
  render () {
    let message = "Please log in.";

    if (User.loggedIn) {
      message = <ProfilePage/>;
    }

    return (
      <section className="dashboard">
        <h2>Dashboard</h2>
        {message}


      </section>
    )
  }
};

export default Profile;
