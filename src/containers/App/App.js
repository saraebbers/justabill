import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import '../../index.scss';
import Welcome from '../../components/Welcome/Welcome';
import Display from '../../components/Display/Display';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Link to='/' className='header'>
          <header>
            <h1>Just A Bill</h1>
          </header>
        </Link>
        <div className='nav-section'>
          <NavLink to='/bills' className='nav'>Bills</NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/bills' render={() => <Display type="Bills" />} />
          <Route exact path='/favorites' render={() => <Display type="Favorites" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
