import React from 'react';
import '../../index.scss';
import Bills from '../../containers/Bills/Bills';

const Display = (props) => {
if (props.type==='Bills')
  return(
    <div className='display'>
      <Bills />
    </div>

  )
}

export default Display;