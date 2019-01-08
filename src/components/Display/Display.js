import React from 'react';
import '../../index.scss';
import Bills from '../../containers/Bills/Bills';
import Favorites from '../../containers/Favorites/Favorites';
import PropTypes from 'prop-types';

const Display = (props) => {
  if (props.type==='Favorites') {
    return(
      <div className='display'>
        <Favorites />
      </div>
    ) 
  } else if (props.type==='Bills') {
    return(
      <div className='display'>
        <Bills />
      </div>
    )
  } else {
    return (<div></div>)
  }

}

Display.propTypes = {
  type: PropTypes.string
}

export default Display;