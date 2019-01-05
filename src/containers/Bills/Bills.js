import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import PropTypes from 'prop-types';
import { addBills } from '../../actions/index';
import { cleanBills } from '../../utils/cleaner';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';


export class Bills extends Component {
  
  async componentDidMount() {
    const url = 'https://api.propublica.org/congress/v1/115/both/bills/enacted.json'
    const bills = await this.props.fetchBillsThunk(url)
    console.log(bills)
    this.props.addBills(bills)
  }

  render() {
    return(
      <div>
        <h3>
          Bills signed into law
        </h3>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  bills: state.bills,
  isLoading: state.isLoading,
  errorMessage: state.errorMessage
})

export const mapDispatchToProps = (dispatch) => ({
  fetchBillsThunk: (url) => dispatch(fetchBillsThunk(url)),
  addBills: (url) => dispatch(addBills(url))
})

Bills.propTypes = {
  bills: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  addBills: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills);