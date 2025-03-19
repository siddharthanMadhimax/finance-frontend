import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { DatePicker, Input, Table } from 'antd'
import moment from 'moment';
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Transaction = () => {
  const { RangePicker } = DatePicker;
  const [dateValue,setDateValue]=useState([null,null])
  const [inFocus,setInFocus]=useState(false)
  const [searchValue,setSearchValue]=useState("")


  const columns=[
    {
      title:"Transaction Id",
      dataIndex:"transactionId",
      key:"transactionId"
    },
    {
      title:"Cust. Name",
      dataIndex:"customerName",
      key:"customerName"
    },
    {
      title:"Cust. Id",
      dataIndex:"customerId",
      key:"customerId"
    },
    {
      title:"Rule Id",
      dataIndex:"ruleId",
      key:"ruleId"
    },
    {
      title:"Alert Level",
      dataIndex:"alertLevel",
      key:"alertLevel"
    },
    {
      title:"Location",
      dataIndex:"location",
      key:"location"
    },
    {
      title:"Trans. Amount",
      dataIndex:"transactionAmount",
      key:"transactionAmount"
    },
    {
      title:"Trans. Date",
      dataIndex:"transactionDate",
      key:"transactionDate"
    },
    {
      title:"Trans. Description",
      dataIndex:"transactionDescription",
      key:"transactionDescription"
    },
  ]

  
  const transactionsData = [
    { key: 123, transactionId: "TNX001982", customerName: "Raajan",

      customerId: 123, ruleId: "AML-123", alertLevel: "High", 
      location: "Chennai", transactionAmount: 9000000, 
      transactionDate: "2025-04-29", transactionDescription: "Deposit" },
    { key: 456, transactionId: "TNX001983", customerName: "Arjun", 

      customerId: 456, ruleId: "AML-456", alertLevel: "Medium", 
      location: "Delhi", transactionAmount: 5000000, 
      transactionDate: "2025-03-15", transactionDescription: "Withdrawal" },
    { key: 789, transactionId: "TNX001984", customerName: "Suresh",

      customerId: 789, ruleId: "AML-789", alertLevel: "Low", 
      location: "Mumbai", transactionAmount: 7000000, 
      transactionDate: "2025-02-20", transactionDescription: "Transfer" },
    { key: 109, transactionId: "TNX001985", customerName: "Vikram",

      customerId: 109, ruleId: "AML-101", alertLevel: "High", 
      location: "Hyderabad", transactionAmount: 8000000, 
      transactionDate: "2025-05-10", transactionDescription: "Payment" },
    { key: 823, transactionId: "TNX001986", customerName: "Rahul", 

      customerId: 823, ruleId: "AML-202", alertLevel: "Medium", 
      location: "Pune", transactionAmount: 6000000, 
      transactionDate: "2025-04-10", transactionDescription: "Deposit" },
  ];

  const filteredData=()=>{
    let filteredvalue=[...transactionsData]
    if(searchValue){
      filteredvalue=transactionsData.filter((item)=>{
        const matchedSearchValue=item.transactionId.toLowerCase().includes(searchValue.toLowerCase())
        return matchedSearchValue
      })
    }
    if(!dateValue || !dateValue[0] || !dateValue[1]){
      return filteredvalue
    }
    if(dateValue && dateValue[0] && dateValue[1]){
      const startDate=dateValue[0].format("YY-MM-DD")
      const lastDate=dateValue[1].format("YY-MM-DD")
      
      filteredvalue=filteredvalue.filter((item)=>{
        const filterDate=moment(item.transactionDate).format("YY-MM-DD")
        return filterDate>=startDate && filterDate<=lastDate

      }) 

    }
    return filteredvalue
    
  }

  const handleDateFilter=(dates)=>{
    setDateValue(dates)
    filteredData(dateValue,searchValue)
  }
  const handleFilterInput=(value)=>{
    setSearchValue(value)
    filteredData(value,dateValue)
  }


  return (
    <div style={{padding:"20px",overflow:"hidden",marginLeft:"20px"}}>

     <div className='search-datefilter-container'>
     <div className='date-range-picker'>
       <RangePicker value={dateValue} onChange={handleDateFilter} format="YYYY-MM-DD" />
       
      </div>
      <div className='search-transaction'>
        <Input 
        value={searchValue}
        onChange={(e)=>handleFilterInput(e.target.value)}
        onFocus={()=>setInFocus(true)}
        onBlur={()=>setInFocus(false)}
        
        prefix={
          <motion.div initial={{rotate:0}} animate={{rotate : inFocus ? 180 : 0}}
          transition={{duration:0.4}}
          >
            {
              !inFocus ? <SearchOutlined/> : <ArrowRightOutlined/>
            }
          </motion.div>
        }/>
      </div>
     </div>
      <div style={{marginTop:"10px"}}>
       <div
       className='custom-transaction-table'>
       <Table
       pagination={false}
      //  scroll={{y:200}}
        dataSource={filteredData()}
        columns={columns}
        />
       </div>
      </div>
    </div>
  )
}

export default Transaction