import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import '../../index.scss';
import Welcome from '../../components/Welcome/Welcome';
import Bills from '../Bills/Bills';
import Lessons from '../Lessons/Lessons';
import Favorites from '../Favorites/Favorites';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Link to='/'>
          <div className='header-section'>
            <header>
              <h1>Just a Bill</h1>
            </header>
          </div>
        </Link>
        <div className='nav-section'>
          <nav>
            <NavLink to='/bills'>Bills</NavLink>
            <NavLink to='/lessons'>Lesson Plans</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
          </nav>
        </div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/bills' component={Bills} />
          <Route exact path='/lessons' component={Lessons} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>
      </div>
    );
  }
}

export default App;
