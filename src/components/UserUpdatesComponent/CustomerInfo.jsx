import { CarFilled, HomeOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { _exports } from '../../constants'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const CustomerInfo = () => {
  const selectedCustomerId = useSelector((state) => state.risk.selectedCustomerId);
  const [customerData] = useState(() =>
    _exports.customerInfo.find((item) => item.customerId == selectedCustomerId) || null
  );
  console.log("ssss", selectedCustomerId)
  console.log("xxxx", customerData)
const iconPicker = (value) => {
  const realValue = value.toLowerCase().trim();
  
  if (realValue.includes("personal")) {
    return <MoneyCollectOutlined className='icon-contracts'/>;
  } else if (realValue.includes("home")) {
    return <HomeOutlined className='icon-contracts' />;
  } else if (realValue.includes("vehicle")) {
    return <CarFilled className='icon-contracts' />;
  }

  return null; 
};

  return (
    <div>
      
     

    <div className='customer-top-container-data'>
      {/* top div */}
        <motion.div style={{overflow:"hidden"}}
        
         initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.8}}
        className='top-customer-info-container'>
            {/* name icon container */}
            <div className='customer-profile-name-container'>
              <div className='user-icon-container'>
                <UserOutlined className='user-icon' />
              </div>
              <div className='customer-name'>
                <p>{customerData ? customerData.customerName:""}</p>
              </div>
            </div>

            {/* other-customer data */}

            <div>
              <div className='customer-other-data'>
                <p className='customer-data-var'>Customer Id </p>
                <p>{customerData ? customerData.customerId:""}</p>
              </div>

              <div className='customer-other-data'>
                <p className='customer-data-var'>Phone </p>
                <p>{customerData ? customerData.phone:""}</p>
              </div>

              <div className='customer-other-data'>
                <p className='customer-data-var'>Address </p>
                <p>{customerData ? customerData.address:""}</p>
              </div>

              <div className='customer-other-data'>
                <p className='customer-data-var'>Ac.No </p>
                <p>{customerData ? customerData.accountNumber:""}</p>
              </div>

              <div className='customer-other-data'>
                <p className='customer-data-var'>Ac.Type </p>
                <p>{customerData ? customerData.accountType:""}</p>
              </div>

              <div className='customer-other-data'>
                <p className='customer-data-var'>Ac.Status </p>
                <p>{customerData ? customerData.accountStatus:""}</p>
              </div>
            </div>

          </motion.div>


          {/* side alert data */}
          <motion.div initial={{opacity:0,x:50}}

          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
           className='aler-data-container' style={{padding:"20px",overflow:"hidden"}}>
            <h1 className='heading' style={{textAlign:'center'}}>Alert Information</h1>

            <div className='alert-separate-div'>

              <div>
              <div className='customer-other-data alert-cus-data'>
                <p className='customer-data-var'>Alert Id</p>
                <p>{customerData?customerData.alertId:""}</p>
              </div>

              <div className='customer-other-data alert-cus-data'>
                <p className='customer-data-var'>Transaction Id</p>
                <p>{customerData?customerData.transactionId:""}</p>
              </div>

              <div className='customer-other-data alert-cus-data'>
                <p className='customer-data-var'>Risk Level</p>
                <p>{customerData?customerData.riskLevel:""}</p>
              </div>

              <div className='customer-other-data alert-cus-data'>
                <p className='customer-data-var'>Alert Status</p>
                <p>{customerData?customerData.alerStatus:""}</p>
              </div>

              <div className='customer-other-data alert-cus-data '>
                <p className='customer-data-var'>Transaction Amount</p>
                <p>{customerData?customerData.transAmount:""}</p>
              </div>

              <div className='customer-other-data alert-cus-data'>
                <p className='customer-data-var'>Branch Id</p>
                <p>{customerData?customerData.branchId:""}</p>
              </div>

              <div className='customer-other-data alert-cus-data'>
                <p className='customer-data-var'>Loan Amount</p>
                <p>{customerData?customerData.loanAmount:""}</p>
              </div>
              </div>


              <div>
                <div className='customer-other-data alert-cus-min'>
                  <p className='customer-data-var'>Balance</p>
                  <p>{customerData ? customerData.balance:""}</p>
                </div>

                <div className='customer-other-data alert-cus-min'>
                  <p className='customer-data-var' >Payment Method</p>
                  <p>{customerData ? customerData.paymentMethod:""}</p>
                </div>

                <div className='customer-other-data alert-cus-min'>
                  <p className='customer-data-var'>Payment Date</p>
                  <p>{customerData ? customerData.paymentDate:""}</p>
                </div>
              </div>


            </div>

          </motion.div>
    </div>


    <motion.div
     className='contracts-container '
    initial={{opacity:0,y:10}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8}}
    style={{marginTop:"30px"}}>
      
      <div className='contracts-top-container '>
        <div><h2 style={{fontWeight:"700",fontSize:"30px"}}>Contracts</h2></div>
        <div className='border-line'></div>
      </div>
      <div  className='risk-car-conatiner cars-contracts-container'>
      {
        customerData ? customerData.contracts.map((item,index)=>(
          <div key={index} className='contaracts-inner-div-data'>


            <div >
            <div>
            <h1 style={{color:"#2B2F42"}}>{item.loanType}</h1>
            </div>

            <div className='icon-contracts-container'>
              {iconPicker(item.loanType)}
            </div>
            </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>ContractId </p>
            <p>: {item.contractId}</p>
           </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>customer Name </p>
            <p>: {item.customerName}</p>
           </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>Loan Amount</p>
            <p>: {item.loanAmount}</p>
           </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>Loan Term</p>
            <p>: {item.loanTerm}</p>
           </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>Status</p>
            <p>: {item.status}</p>
           </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>Emi Amount</p>
            <p>: {item.emiAmount}</p>
           </div>

           <div className='contracts-data-container'>
            <p className='customer-data-var'>No.of installments</p>
            <p>: {item.noOfInstallments}</p>
           </div>

          </div>
        )):""
      }
      </div>
    </motion.div>


    
    
    </div>
  )
}

export default CustomerInfo