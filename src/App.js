import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

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
      </div>
    );
  }
}

export default App;
