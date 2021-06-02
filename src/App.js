import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import Management from './components/Management/Management';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path='/'>
          <div className="app__mainpage">
            <SideBar />
            <Home />
          </div>
        </Route>
        <Route exact path='/department'>
          <div className="app__mainpage">
            <SideBar />
            <Management />
          </div>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
