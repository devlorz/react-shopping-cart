import React, { Component, lazy, Suspense } from 'react'
import Drawer from '@material-ui/core/Drawer'

import './App.css'

import AppBar from './components/AppBar'
import NavList from './components/NavList'
const SearchBar = lazy(() => import('./components/SearchBar'))

class App extends Component {
  state = {
    navOpen: false,
  }
  toggleDrawer = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }
  render() {
    const searchBar = (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
    )
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
        <div>{searchBar}</div>
      </div>
    )
  }
}

export default App
