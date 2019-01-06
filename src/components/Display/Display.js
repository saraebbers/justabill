import React from 'react';
import '../../index.scss';
import Bills from '../../containers/Bills/Bills';
import Favorites from '../../containers/Favorites/Favorites';
import PropTypes from 'prop-types';

const Display = (props) => {
  if (props.type==='Bills')
    return(
      <div className='display'>
        <Bills />
      </div>
    )

  if (props.type==='Favorites')
    return(
      <div className='display'>
        <Favorites />
      </div>
    )
}

Display.propTypes = {
  Bills: PropTypes.object,
  Favorites: PropTypes.object
}

export default Display;