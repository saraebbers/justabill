import React, { Component } from 'react';
import '../../index.scss';
import { addFavorite, removeFavorite } from '../../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


export class Card extends Component {

  handleAddFavorite = () => {
    const { id, addFavorite } = this.props
    addFavorite(id)

  }

  handleRemoveFavorite = () => {
    const { id, removeFavorite } = this.props
    removeFavorite(id)
  }


  render() { 
    let { id, title, sponsor, major_action, major_action_date, summary, bill_uri, favorites } = this.props
    let button
    
    if(summary === '') {
      summary = 'A summary of this bill is not currently available'
    }

    if(favorites.includes(id)) {
      button= 
        <button 
          onClick={() => this.handleRemoveFavorite()}
          className='fav'
          >Remove bill {id} from Favorites</button>
    } else {
       button= 
        <button 
          onClick={() => this.handleAddFavorite()}
          className='not-fav'
          >Save bill {id} as Favorite</button>
    }

    return(
      <div className='card'>
        {button}
        <h4>{title}</h4>
        <h5>Sponsored by: {sponsor} </h5>
        <h5>{major_action}</h5>
        <h5>Date of last Major Action: {major_action_date}</h5>
        <h5>Summary: </h5>
        <p>{summary}</p>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (id) => dispatch(addFavorite(id)),
  removeFavorite: (id) => dispatch(removeFavorite(id))
})

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sponsor: PropTypes.string.isRequired,
  major_action: PropTypes.string.isRequired,
  major_action_date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  bill_uri: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));