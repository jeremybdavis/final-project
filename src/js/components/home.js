import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <div className="flex-boxes">
          <Link to="chemex" className="flex-box">
            <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
            <h1 className="flex-title">Chemex</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;
