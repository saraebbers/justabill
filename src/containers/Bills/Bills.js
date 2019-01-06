import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import PropTypes from 'prop-types';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';


export class Bills extends Component {
  constructor() {
    super ()
    this.state = {
      congress: 115
    }
  }
  
  async componentDidMount() {
    const url = `https://api.propublica.org/congress/v1/${this.state.congress}/both/bills/enacted.json`
    await this.props.fetchBillsThunk(url)
  }


  render() {
    const { billArray, isLoading } = this.props
    const { congress } = this.state

    const title = `Below are the bills that became law during the ${congress}th Congress.`;

    let information; 

    if(isLoading === true) {
      information = (<Loading />)
    } else {
      billArray.filter(billItem => {
        if(billItem.congress === this.state.congress) {
          information = billItem.bills.map(bill => {
            return <Card {...bill} key={bill.id}/>
          })
        }
        return information
      })
    }

    return(
      <div>
        <h3>
          { title }
        </h3>
        <div className='cardContainer'>
          { information }
        </div>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills);