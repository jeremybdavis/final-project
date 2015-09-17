import React, { PropTypes } from 'react'
import Parse from '../../parse';
import { Link } from 'react-router';
import ProfilePage from '../profile-page';

class Profile extends React.Component {
  render () {
    let message = "Please log in.";
    let authedUser = Parse.User.current();
    if (authedUser) {
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
