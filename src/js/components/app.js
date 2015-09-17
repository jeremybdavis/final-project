import React from 'react';
import Router, { RouteHandler } from 'react-router';

import SiteNav from './views/site-nav';
import Footer from './views/footer';

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
