import React, { Component } from 'react';
import '../../index.scss';


export class Card extends Component {


  render() { 
  const { id, title, sponsor, major_action, major_action_date, summary, bill_uri } = this.props

  console.log(id)

    return(
      <div className='Card'>
        GRTRREOEWUHFGOPDUHG
      </div>
    )
  }
}



// ({
//           id: bill.bill_id,
//           title: bill.title,
//           sponsor: bill.sponsor_name,
//           major_action: bill.latest_major_action,
//           major_action_date: bill.latest_major_action_date,
//           summary: bill.summary,
//           bill_uri: bill.bill_uri // this is how you get to the whole bill
//         })

// <h4>{title}</h4>
//         <h5>{major_action}</h5>
//         <h6>{major_action_date}</h6>
//         <p>{summary}</p>
