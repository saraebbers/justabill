import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../../index.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <header>
            <h1>Just a Bill</h1>
          </header>
        </div>
        <div className='nav-section'>
          <nav>
            <NavLink to='/bills' component={Bills} className='nav'>Bills</NavLink>
            <NavLink to='/lessons' component={Lessons} className='nav'>Lesson Plans</NavLink>
            <NavLink to='/resources' component={Resources} className='nav'>Resources</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
