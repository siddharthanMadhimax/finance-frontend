import React from 'react'

const AlertComponent = () => {
  return (
    <div>AlertComponent</div>
  )
}

export default AlertComponent


// const columns = [
//   {
//       title: "Date",
//       dataIndex: "date",
//       key: 'date'
//   },
//   {
//       title: "Rule id",
//       dataIndex: "ruleId",
//       key: 'ruleId',
//   },
//   {
//       title: "Risk lvl",
//       dataIndex: "riskLevel",
//       key: 'riskLevel'
//   },
//   {
//       title: "Cust.Name",
//       dataIndex: "customerName",
//       key: 'customerName'
//   },
//   {
//       title: "Trans.Id",
//       dataIndex: "transId",
//       key: 'trnasId'
//   },
//   {
//       title: "Trans.Amount",
//       dataIndex: "transAmount",
//       key: 'transAmount'
//   },
//   {
//       title: "Trans.Date",
//       dataIndex: "transDate",
//       key: 'transDate'
//   },
//   {
//       title: "Details",
//       key: 'details',
//       render: (text, record) => (
//           <Popover
//           arrow={false}
//           placement='bottom'
//           open={openPopUp==record.key}
//           trigger="click"
//           onOpenChange={(newChange)=>setOpenPopup(newChange)}
//           content={
//               <div className='popover-choose-drawer-update'>
//                   <Button style={{backgroundColor:"#E7F3F1"}} onClick={()=>handleViewData(record)}>Update</Button>
//                   <Button  style={{backgroundColor:"#E7F3F1"}} onClick={()=>handleOpenDrawer(record)}>View More</Button>
//               </div>
//           }
//           >
//               <EllipsisOutlined style={{
//                   cursor: "pointer", color: "#08816D",
//                   fontSize: "25px"
//               }} onClick={()=>setOpenPopup(true)} />
//           </Popover>

//       )
//   }
// ]


// const dataSouce = [
//   {
//       customerId: 123456677,
//       key: '1',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   },
//   {
//       customerId: 123456677,
//       key: '2',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   }, {
//       customerId: 123456677,
//       key: '10',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   }, {
//       customerId: 123456677,
//       key: '10',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   }, {
//       customerId: 123456677,
//       key: '10',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   }, {
//       customerId: 123456677,
//       key: '10',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   }, {
//       customerId: 123456677,
//       key: '10',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   }, {
//       customerId: 123456677,
//       key: '10',
//       date: '28/03/2025',
//       ruleId: 'AML-143',
//       riskLevel: 'High',

//       customerName: 'Rajan',
//       transId: 'TXN001234',
//       transAmount: 300000000,
//       transDate: '28/03/2025',
//       phone: "7308991992",
//       Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//       AccountNumber: "9875262782",
//       AccountEstablished: 'lorem ipsum',
//       LoanAmount: "1000000",
//       Balance: "300000",
      
//       loanType:"vehicle Loan",
//       contractId:"vl2002",
//       loanTerm:"24 months",
//       emi_Amount:"$687",


//   },
//   {
//       customerId: 2234567,
//       key: '10',
//       date: '20/03/2025',
//       ruleId: 'AML-141',
//       riskLevel: 'High',

//       customerName: 'Rufas',
//       transId: 'TXN001238',
//       transAmount: 200000000,
//       transDate: '19/03/2025',
//   },
//   {
//       key: '10',
//       date: '18/03/2025',
//       ruleId: 'AML-142',
//       riskLevel: 'High',
//       customerId: '98019190',
//       customerName: 'Muss',
//       transId: 'TXN001237',
//       transAmount: 100000000,
//       transDate: '16/03/2025',
//   },
 
// ]