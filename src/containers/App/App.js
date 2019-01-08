import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import '../../index.scss';
import Welcome from '../../components/Welcome/Welcome';
import Display from '../../components/Display/Display';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';
import { withRouter } from 'react-router';



export class App extends Component {

  async componentDidMount() {
    const url = 'https://api.propublica.org/congress/v1/115/both/bills/enacted.json'
    await this.props.fetchBillsThunk(url)
  }

  render() {
    return (
      <div >
        <section className="App">
          <Link to='/' className='header'>
            <header>
              <h1>Just A Bill</h1>
            </header>
          </Link>
          <div className='nav-section'>
            <NavLink to='/bills' className='nav'>Bills</NavLink>
            <NavLink to='/favorites' className='nav'>Favorites</NavLink>
          </div>
        </section>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/bills' render={() => <Display type="Bills" />} />
          <Route exact path='/favorites' render={() => <Display type="Favorites" />} />
          <Route render={() => (
            <div className='redirect'>
              <Link to='/' className='lnk-redirect'>
                <h1 >OOPS!  Can't find that page</h1>
                <button className='home'> Click Here To Return Home </button>
              </Link>
            </div>
            )} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  billArray: state.bills,
  isLoading: state.isLoading,
  errorMessage: state.errorMessage,
})

export const mapDispatchToProps = (dispatch) => ({
  fetchBillsThunk: (url) => dispatch(fetchBillsThunk(url)),
})

App.propTypes = {
  billArray: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
