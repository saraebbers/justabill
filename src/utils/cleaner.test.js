import { cleanBillsData } from './cleaner.js';

describe('cleanBillsData', () => {
  it('takes in an array and returns an object with only the necessary items', () => {
    let mockUncleanBillsData = [{
      congress: 115,
      chamber: 'Both',
      bills: [{
        bill_id: "hr-5759-115", 
        bill_slug: 'hr5759',
        bill_type: 'hr',
        title: 'a great title',
        sponsor_name: 'Bobby Sue',
        latest_major_action: "Became Public Law No: 115-336.",
        latest_major_action_date: '2018-12-24',
        summary: '',
      },{
        bill_id: "hr-123-115", 
        bill_slug: 'hr123',
        bill_type: 'hr',
        title: 'a less than great title',
        sponsor_name: 'Bobby Joe',
        latest_major_action: "Became Public Law No: 116-7.",
        latest_major_action_date: '2018-1-24',
        summary: 'Something',
      } ]
    }]

    let expected = {congress: 115, bills: [{
        id: "hr-5759-115", 
        title: 'a great title',
        sponsor: 'Bobby Sue',
        major_action: "Became Public Law No: 115-336.",
        major_action_date: '2018-12-24',
        summary: '',
      },{
        id: "hr-123-115", 
        title: 'a less than great title',
        sponsor: 'Bobby Joe',
        major_action: "Became Public Law No: 116-7.",
        major_action_date: '2018-1-24',
        summary: 'Something',
      } ]}

      let result = cleanBillsData(mockUncleanBillsData)
      expect(expected).toEqual(result)
  })
})