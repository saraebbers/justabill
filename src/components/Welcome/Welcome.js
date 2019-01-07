import React from 'react';
import '../../index.scss';

const Welcome = () => {

  return(
    <div className='welcome'>
      <section className='welcome-message'>
        <h3>
          Welcome Teachers and Life-long Students 
        </h3>
        <p>
          This application aggrogates infromation on bills that have become law.  Hopefully you can use this information to engage your students with current issues as you help them to understand the process of how a bill becomes law.  We invite you to save topics for later referance by clicking in the top right of the information.
        </p>
      </section>
    </div>
  )
}

export default Welcome;