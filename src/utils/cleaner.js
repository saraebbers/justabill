export const cleanBillsData = (uncleanBillsData) => {
  let congress = uncleanBillsData[0].congress;
  let bills = uncleanBillsData.reduce((acc, data) => {
      let bill = data.bills.map(bill => {
        return ({
          id: bill.bill_id,
          title: bill.title,
          sponsor: bill.sponsor_name,
          major_action: bill.latest_major_action,
          major_action_date: bill.latest_major_action_date,
          summary: bill.summary,
          bill_uri: bill.bill_uri 
        })
      })
    return[...acc, ...bill]
  }, [])

 return ({congress: congress, bills: bills})
}
