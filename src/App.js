import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Layout from './components/layout/Layout';
import Home from './Screens/Home/Home';
import FoodDelivery from './Screens/FoodDelivery/FoodDelivery';
import Gallery from './Screens/Gallery/Gallery';
import HowItWorks from './Screens/HowItWorks/HowItWorks';
import Cities from './Screens/Cities/Cities';
import SignUp from './Screens/SignUp/SignUp';
import './sass/main.scss';
import './index.css'


class App extends Component {
  render() {
    return (
     
        <Router>
           <Layout>
           <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/delivery" component={FoodDelivery} />
              <Route path="/howitworks" component={HowItWorks} />
              <Route path="/cities" component={Cities} />
              </AnimatedSwitch>
          </Layout>
        </Router>
      
    );
  }
}

export default App;
