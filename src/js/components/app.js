import React from 'react';
import Router, { RouteHandler } from 'react-router';

import SiteNav from './site-nav';

class App extends React.Component {
  render() {
    return(
      <main>
        <SiteNav/>
        <RouteHandler/>
      </main>
    )
  }
};

export default App;
