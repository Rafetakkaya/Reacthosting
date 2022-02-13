import React from 'react';
import Body from "./components/Body"
import Slider from "./components/Slider"

import Althead from './components/Althead';
import Footer from "./components/Footer"
import './Css/App.css';

import Headcard from './components/Headcard';
import Host from './components/Host';
import Secondbody from "./components/Secondbody"
import SetBanner from './components/Setbanner';
import Network from './components/Network';
import Cap from './components/Cap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Cap />

        <Body />
        <Slider />
        <Secondbody />
        <Althead />
        <Host />
        <SetBanner />
        <Network />
        <Headcard />
        <Footer />
      </div>
      </Router >




      );
}

export default App;
