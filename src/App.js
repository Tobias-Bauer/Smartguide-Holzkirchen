import React from 'react';
import Home from './components/Home';
import Map from './components/Map';
import Station from './components/Station';
import About from './components/About';
import Policy from './components/Policy';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    if(localStorage.getItem('darkmode') === "true"){
      this.state = {dark: true}
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    } else {
      this.state = {dark: false}
    }
  }
  componentDidMount() {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if((!e.matches && localStorage.getItem('darkmode') === "true") || (e.matches && localStorage.getItem('darkmode') === "false")){
          e.matches ? localStorage.setItem('darkmode', true) : localStorage.setItem('darkmode', false);
          window.location.reload(false);
        }
      });
    } catch (error) {
      window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
        if((!e.matches && localStorage.getItem('darkmode') === "true") || (e.matches && localStorage.getItem('darkmode') === "false")){
          e.matches ? localStorage.setItem('darkmode', true) : localStorage.setItem('darkmode', false);
          window.location.reload(false);
        }
      });
    }
  }
  render() {
    return (
      <div className={this.state.dark?"darkMode":""}>
        <Router>
          <Switch>
              <Route path="/home/:language" component={Home} />
              <Route path="/map/:language" component={Map} />
              <Route path="/station/:language/:id" component={Station} />
              <Route path="/about/:language" component={About} />
              <Route path="/policy/:language" component={Policy} />
              <Redirect path="/map" to="/map/de"/>
              <Redirect path="*" to="/home/de"/>
          </Switch>
        </Router>
      </div>);
  }
}

export default App;
