import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import PropTypes from 'prop-types';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';
import Loading from '../../components/Loading/Loading';
import Card from '../Card/Card';


export class Bills extends Component {
  constructor() {
    super ()
    this.state = {
      congress: 115
    }
  }
  
  searchAnotherCongress = async (congressNumber) => {
    await this.setState({congress: congressNumber})
    const url = `https://api.propublica.org/congress/v1/${this.state.congress}/both/bills/enacted.json`
    await this.props.fetchBillsThunk(url)
  }

  render() {
    const { billArray, isLoading } = this.props
    const { congress } = this.state

    const title = `Below are the 20 most recent bills that became law during the ${congress}th Congress.`;

    let information; 

    if(isLoading === true) {
      information = (<Loading />)
    } else {
      billArray.filter(billItem => {
        if(billItem.bills.length && billItem.congress === this.state.congress) {
          information = billItem.bills.map(bill => {
            return <Card {...bill} key={bill.id}/>
          })
        } else {
          information = <div className='no-Bills'><h4>The congress you selected has yet to pass a bill that has become law.</h4>
          <p>Please select another Congress</p> </div>
        }
        return information
      })
    }

    return(
      <div id='bills-pg'>
        <section className='bill-container'>
          <div className='bill-msg'>
            <h3 className='title'>
              { title }
            </h3>
            <h3>Search a different congress</h3>
            <div className='btn-holder'>
              <button className='113' onClick={()=>this.searchAnotherCongress(113)}>113</button>
              <button className='114' onClick={()=>this.searchAnotherCongress(114)}>114</button>
              <button className='115' onClick={()=>this.searchAnotherCongress(115)}>115</button>
              <button className='116' onClick={()=>this.searchAnotherCongress(116)}>116</button>
            </div>
          </div>
          <div className='cardContainer'>
            { information }
          </div>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  billArray: state.bills,
  isLoading: state.isLoading,
  errorMessage: state.errorMessage,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  fetchBillsThunk: (url) => dispatch(fetchBillsThunk(url)),
})

Bills.propTypes = {
  billArray: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills);