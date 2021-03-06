import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import {Provider} from "react-redux";
import store from './store';

import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Alert from './components/Layout/Alert';
import "./App.css";

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);

  return(
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
)};

export default App;
