import React, {Fragment} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import './App.css';

const App=()=>(
  <Router>
    <Fragment>
      <Navbar />
      <Router exact path='/' component={Landing} />
      <Landing />
    </Fragment>
  </Router>
);

export default App;
