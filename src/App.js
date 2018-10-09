import React, { Component } from 'react';
import { Icon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

import logo from './logo.svg';
import './App.css';

import AppBar from './components/AppBar';
import NavList from './components/NavList';

class App extends Component {
  state = {
    navOpen: false
  };
  toggleDrawer = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };
  render() {
    return (
      <div className="App">
        <AppBar onClickMenu={this.toggleDrawer} />
        <Drawer open={this.state.navOpen} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <NavList />
          </div>
        </Drawer>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Icon className="App-logo">star</Icon>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
