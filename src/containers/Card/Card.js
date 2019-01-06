import React, { Component } from 'react';
import '../../index.scss';


export class Card extends Component {


  render() { 
  let { id, title, sponsor, major_action, major_action_date, summary, bill_uri } = this.props
  if(summary === '') {
    summary = 'A summary of this bill is not currently available'
  }

    return(
      <div className='card'>
        <h4>{id}: {title}</h4>
        <h5>Sponsored by: {sponsor} </h5>
        <h5>{major_action}</h5>
        <h5>Date of last Major Action: {major_action_date}</h5>
        <h5>Summary: </h5>
        <p>{summary}</p>
      </div>
    )
  }
}

