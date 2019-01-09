import React from 'react';
import '../../index.scss';


const ErrorMes = (props) => {

  return(
    <div className='ErrorMes-msg'>
      <h3>
        An error has occured, for details, see the message below.  A page refresh may resolve the problem.  
      </h3>
      <h3> 
        {props.message}
      </h3>
    </div>

  )
}

export default ErrorMes;