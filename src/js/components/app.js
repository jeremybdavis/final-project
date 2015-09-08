import React from 'react';
import Router, { RouteHandler } from 'react-router';

import SiteNav from './site-nav';
import Footer from './footer';

class App extends React.Component {
  render() {
    return(
      <main>
        <SiteNav/>
        <RouteHandler/>
        <Footer/>
      </main>
    )
  }
};

export default App;
