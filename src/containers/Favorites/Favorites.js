import React from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';


export const Favorites = (props) => {

  const { billArray, favoritesArray } = props

  let information;

  if(!favoritesArray.length) {
    information = 'There are no selected favorites to display'
  } else {
    billArray.map(billItem => {
          information = billItem.bills.map(bill => { 
            if(favoritesArray.includes(bill.id)) {
              return <Card {...bill} key={bill.id} />
            }
          })
          return information
        })
  }

  return(
      <div className='favorite-container'>
        <h3>
          Below are your selected favorites.
        </h3>
        <div className='cardContainer'>
          { information }
        </div>
      </div>
    )
}

export const mapStateToProps = (state) => ({
  billArray: state.bills,
  favoritesArray: state.favorites
})


Favorites.propTypes = {
  billArray: PropTypes.array.isRequired,
  favoritesArray: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Favorites);

  