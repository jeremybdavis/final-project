import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (

      <footer className="footer-2" role="contentinfo">

        <div className="footer-logo">
          <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png"} alt="Logo image"/>
        </div>

          <ul>
            <li><Link to="timer">App</Link></li>
            <li><a href="javascript:void(0)">Profile</a></li>
          </ul>

          <div className="footer-secondary-links">

            <ul>
              <li>Created by <a href="http://www.jeremydavis.co">Jeremy Davis</a></li>
              <li>&copy; 2015</li>
            </ul>

          </div>

      </footer>
    )
  }
}

export default Footer;
