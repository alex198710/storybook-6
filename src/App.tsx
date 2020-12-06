import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
