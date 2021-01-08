import React, { Component } from "react";
import ReactDOM from 'react-dom'
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/Register";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Pricing from "./pages/CarPricing";
import NotFoundPage from "./pages/404";
import PrimarySearchAppBar from "./components/NavBar";
import StickyFooter from "./components/Footer";
import {UsersGridList} from "./components/CarGridList";

function App() {
  return <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={DefaultContainer} />
        <Route exact path="/SignIn" component={LoginContainer} />
        <Route exact path="/Register" component={LoginContainer} />
        <Route exact path="/Cars" component={DefaultContainer} />
        <Route exact path="/Prices" component={DefaultContainer} />
        <Route exact path="/404" component={DefaultContainer} />
        <Route exact path="/Users" component={DefaultContainer} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </Provider>;
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/SignIn" component={SignInSide} />
    <Route exact path="/Register" component={SignUp} />
  </div>
)

const DefaultContainer = () => (

  <div className="container">
    <PrimarySearchAppBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/Cars" component={Cars} />
    <Route exact path="/Prices" component={Pricing} />
    <Route exact path="/Users" component={UsersGridList} />
    <Route exact path="/404" component={NotFoundPage} />
    <StickyFooter/>
  </div>
)



// <Provider store={store}>
//   <Users />
// </Provider>;




// function App() {
//   return 
//     <Provider store={store}>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/Cars" component={Cars} />
//           <Route exact path="/404" component={NotFoundPage} />
//           <Redirect to="/404" />
//         </Switch>
//       </Router>
//     </Provider>
// }


export default App;
