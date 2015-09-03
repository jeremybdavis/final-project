// import React from 'react';
// import Router from 'react-router';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
//
// import ChemexHandler from './chemex.js';
//
//
// class App extends React.Component {
//   render() {
//     return(
//       <div className="wrapper">
//       <div className="flex-boxes">
//         <Link to="app">Home</Link>
//         <Link to="chemex" className="flex-box">
//           <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
//           <h1 className="flex-title">Chemex</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
//         </Link>
//         <Link to="v60" className="flex-box">
//           <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
//           <h1 className="flex-title">Flex Box Item</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
//         </Link>
//
//         <Link to="frenchPress" className="flex-box">
//           <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
//           <h1 className="flex-title">Flex Box Item</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
//         </Link>
//
//         <Link to="aeropress" className="flex-box">
//           <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
//           <h1 className="flex-title">Flex Box Item</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
//         </Link>
//
//         <Link to="chemexIced" className="flex-box">
//           <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
//           <h1 className="flex-title">Flex Box Item</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
//         </Link>
//
//         <Link to="v60Iced" className="flex-box">
//           <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png"} alt=""/>
//           <h1 className="flex-title">Flex Box Item</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
//         </Link>
//
//         <RouteHandler/>
//
//       </div>
//       </div>
//     )
//   }
// };
//
// let routes = (
//   <Route name="app" path="/" handler={App}>
//       <Route name="chemex" path="/chemex" handler={ChemexHandler}/>
//   </Route>
//
//   <Route name="v60" path="/v60" handler={MethodHandler}/>
//   <Route name="frenchPress" path="/frenchpress" handler={MethodHandler} />
//   <Route name="aeropress" path="/aeropress" handler={MethodHandler} />
//   <Route name="chemexIced" path="/chemexIced" handler={MethodHandler}/>
//   <Route name="v60Iced" path="/v60Iced" handler={MethodHandler}/>
// );
//
// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.getElementById('app'));
// });
