import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jquery';

import SiteNav from './components/site-nav';
import ChemexHandler from './components/chemex.js';
import ProfileHandler from './components/profile';
import SignInHandler from './components/sign-in';
import SignUpHandler from './components/sign-up';


class App extends React.Component {
  render() {
    return(
      <main>
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

      <div className="wrapper">
      <div className="flex-boxes">
        <Link to="chemex" className="flex-box">
          <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
          <h1 className="flex-title">Chemex</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
        </Link>
      </div>
      </div>

      <RouteHandler/>
      </main>
    )
  }
};

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="profile" path="/profile" handler={ProfileHandler}/>
    <Route name="signin" path="/signin" handler={SignInHandler}/>
    <Route name="signup" path="/signup" handler={SignUpHandler}/>
    <Route name="chemex" path="/chemex" handler={ChemexHandler}/>
  </Route>

  // <Route name="v60" path="/v60" handler={MethodHandler}/>
  // <Route name="frenchPress" path="/frenchpress" handler={MethodHandler} />
  // <Route name="aeropress" path="/aeropress" handler={MethodHandler} />
  // <Route name="chemexIced" path="/chemexIced" handler={MethodHandler}/>
  // <Route name="v60Iced" path="/v60Iced" handler={MethodHandler}/>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

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


// EXPANDER

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

  $('#js-expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger2");
  var expanderContent = document.getElementById("js-expander-content2");

  $('#js-expander-trigger2').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger3");
  var expanderContent = document.getElementById("js-expander-content3");

  $('#js-expander-trigger3').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});
