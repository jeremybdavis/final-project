import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <div className="hero">
          <div className="hero-inner">
            <a href="" className="hero-logo">
              <img src={"img/coffee-beans.png"} alt="Logo Image"/>
            </a>
            <div className="hero-copy">
              <h1>Escape The Drip Machine. Make Better Coffee.</h1>
              <p>Get started today with one of the options below.</p>
            </div>
          </div>
        </div>

        <div className="method-boxes">
          <div className="method-box">
            <Link to="chemex">
              <img src={"img/chemex2.jpg"} />
              <div className="method-bg-color">
                <div className="wi-100-h-100">
                  <div className="wi-100-h-50">
                    <div className="method-title">
                      <h1>Chemex</h1>
                    </div>
                  </div>
                  <div className="wi-100-h-50">
                    <div className="method-btn-container">
                      <div className="method-btn">
                        Start Guide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="method-box">
            <Link to="v60">
              <img src={"img/v60-home.jpg"} />
              <div className="method-bg-color">
                <div className="wi-100-h-100">
                  <div className="wi-100-h-50">
                    <div className="method-title">
                      <h1>V60</h1>
                    </div>
                  </div>
                  <div className="wi-100-h-50">
                    <div className="method-btn-container">
                      <div className="method-btn">
                        Start Guide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="method-box">
            <Link to="frenchPress">
              <img src={"img/french-press.jpg"} />
              <div className="method-bg-color">
                <div className="wi-100-h-100">
                  <div className="wi-100-h-50">
                    <div className="method-title">
                      <h1>French Press</h1>
                    </div>
                  </div>
                  <div className="wi-100-h-50">
                    <div className="method-btn-container">
                      <div className="method-btn">
                        Start Guide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
