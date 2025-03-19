import React from 'react'
import { useSelector } from 'react-redux'
import { _exports } from '../../constants'

const CustomerInfo = () => {
  const selectedCustomerId=useSelector((state)=>state.risk.selectedCustomerId)
  
  console.log("sssss",selectedCustomerId)

  
  return (
    <div style={{
      marginLeft:"50px"
    }}>
      <div>
        {_exports.userInfo.filter((item)=>item.customerId==selectedCustomerId).map((item,index)=>(
          <div key={index}>

           <div className='customer-info'>
            <p>Customer Id : </p>
            <p>{item.customerId}</p>
           </div>

           <div  className='customer-info'>
            <p>Name : </p>
            <p>{item.name}</p>
           </div>
           <div  className='customer-info'>
            <p>Phone : </p>
            <p>{item.phone}</p>
           </div>

           <div  className='customer-info'>
            <p>Address : </p>
            <p>{item.address}</p>
           </div>

           <div  className='customer-info'>
            <p>Account number : </p>
            <p>{item.accountNumber}</p>
           </div>

           <div  className='customer-info'>
            <p>Account established : </p>
            <p>{item.accountEstablished}</p>
           </div>
           <div  className='customer-info'>
            <p>Loan amount : </p>
            <p>{item.loanAmount}</p>
           </div>

           <div  className='customer-info'>
            <p>Balance : </p>
            <p>{item.Balance}</p>
           </div>

           <div  className='customer-info'>
            <p>Branch Id : </p>
            <p>{item.BranchId}</p>
           </div>

           <div  className='customer-info'>
            <p>Transaction Id : </p>
            <p>{item.transactionId}</p>
           </div>

           <div  className='customer-info'>
            <p>Transaction amount : </p>
            <p>{item.transactionAmount}</p>
           </div>

           <div  className='customer-info'>
            <p>Payment method : </p>
            <p>{item.paymentMethod}</p>
           </div>

           <div  className='customer-info'>
            <p>Payment Date : </p>
            <p>{item.paymentDate}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerInfo