import React from 'react/addons';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jquery';

import ProfileHandler from './profile';
import SignInHandler from './sign-in';
import SignUpHandler from './sign-up';

class SiteNav extends React.Component {
  render() {
    return (
      <header className="centered-navigation" role="banner">
        <div className="centered-navigation-wrapper">
          <Link to="app" className="mobile-logo">
            <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png"} alt="Logo image"/>
          </Link>
          <a href="javascript:void(0)" id="js-centered-navigation-mobile-menu" className="centered-navigation-mobile-menu">MENU</a>
          <nav role="navigation">
            <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
              <li className="nav-link"><Link to="app">Home</Link></li>
              <li className="nav-link"><Link to="profile">Profile</Link></li>
              <li className="nav-link logo">
                <Link to="app" className="logo">
                  <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png"} alt="Logo image"/>
                </Link>
              </li>
              <li className="nav-link"><Link to="signin">Sign In</Link></li>
              <li className="nav-link"><Link to="signup">Sign up</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default SiteNav;

// NAV

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});
