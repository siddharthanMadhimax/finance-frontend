


import React, { useState } from 'react'
import { _exports } from '../constants'
import { AlertFilled, AlertOutlined, AlertTwoTone, FieldTimeOutlined, FileDoneOutlined, HourglassOutlined, SafetyOutlined, UserDeleteOutlined, UsergroupDeleteOutlined, UserOutlined } from '@ant-design/icons'
import ChartAlertCompare from './commonComponents/ChartAlertCompare'
import BarChartMonthly from './BarChartMonthly'
import { Button, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const RisksTable = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("selcia")


    
const columns = [
    {
        title: "Date",
        dataIndex: "date",
        key: 'date'
    },
    {
        title: "Rule id",
        dataIndex: "ruleId",
        key: 'ruleId',
    },
    {
        title: "Risk lvl",
        dataIndex: "riskLevel",
        key: 'riskLevel'
    },
    {
        title: "Cust.Name",
        dataIndex: "customerName",
        key: 'customerName'
    },
    {
        title: "Status",
        dataIndex: "status",
        key: 'status'
    },
    {
        title: "Trans.Id",
        dataIndex: "transId",
        key: 'transId'
    },
    {
        title: "Trans.Amount",
        dataIndex: "transAmount",
        key: 'transAmount'
    },
    {
        title: "Trans.Date",
        dataIndex: "transDate",
        key: 'transDate'
    },
   
  ]
  
  
  const dataSouce = [
    {
        customerId: 123456677,
        key: '1',
        date: '28/03/2025',
        ruleId: 'AML-143',
        riskLevel: 'High',
  
        customerName: 'Rajan',
        transId: 'TXN001234',
        transAmount: 300000000,
        transDate: '28/03/2025',
        phone: "7308991992",
        Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
        AccountNumber: "9875262782",
        AccountEstablished: 'lorem ipsum',
        LoanAmount: "1000000",
        Balance: "300000",
        status:"Not Assigned",
        loanType:"vehicle Loan",
        contractId:"vl2002",
        loanTerm:"24 months",
        emi_Amount:"$687",
  
  
    },
    {
        customerId: 123456677,
        key: '2',
        date: '28/03/2025',
        ruleId: 'AML-143',
        riskLevel: 'High',
  
        customerName: 'Rajan',
        transId: 'TXN001234',
        transAmount: 300000000,
        transDate: '28/03/2025',
        phone: "7308991992",
        Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
        AccountNumber: "9875262782",
        AccountEstablished: 'lorem ipsum',
        LoanAmount: "1000000",
        Balance: "300000",
        status:"Not Assigned",
        loanType:"vehicle Loan",
        contractId:"vl2002",
        loanTerm:"24 months",
        emi_Amount:"$687",
  
  
    }, 
  ]


    const IconPicker = (value) => {
        switch (value) {
            case "Total Alerts":
                return <AlertOutlined className='total-alert-icon' />
            case "Not Assigned":
                return <UserDeleteOutlined />
            case "Pending":
                return <HourglassOutlined />
            case "Not Suspicious":
                return <SafetyOutlined />
            case "STR Reported":
                return <FieldTimeOutlined />
            case "STR Completed":
                return <FileDoneOutlined />
        }
    }
    const getClassName = (value) => {
        return value.toLowerCase().replace(/\s+/g, "-");
    }
    return (
        <div>
            <h3 className='welcome-msg'>Welcome back, {name}</h3>

            {/* cards of showing details of risk */}

            <div className='risk-car-conatiner'>
                {
                    _exports.alertsData.map((item, index) => (
                        <div key={index} className={`risk-card ${getClassName(item.alertTitle)}`}>
                            <div>
                                <p style={{ color: "#202224", fontSize: "16px" }}>{item.alertTitle}</p>
                                <p style={{ color: "#202224", fontSize: "20px" }}>{item.alertCount}</p>
                            </div>
                            <div className={`icons-risk-cards ${getClassName(item.alertTitle)}-icon`}>
                                {IconPicker(item.alertTitle)}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div>

                <div className='bar-charts-graph-container'>
                    <motion.div
                    initial={{opacity:0,x:-10}}
                    animate={{opacity:1,x:0}}
                    transition={{duration:0.5}}
                     style={{ flex: 1, height: "250px" }}>
                        <ChartAlertCompare />
                    </motion.div>

                    <div style={{ flex: 1, height: "250px" }}>
                    <BarChartMonthly/>
                    </div>
                </div>

                <div >
                    <h3 style={{marginBottom:"20px"}} className='heading newAlertBlink'>New Alert</h3>
                   <div>
                   <Table
                    className='table-container table-container-colors'
                    scroll={{ x: "max-content" }} 
                   
                    pagination={false}
                    columns={columns}
                    dataSource={dataSouce}/>
                   </div>
                   <motion.div initial={{opacity:0,y:30}}
                   whileInView={{opacity:1,y:0}} transition={{duration:0.5}}
                    style={{textAlign:"center",marginTop:"10px"}}>
                    <Button className='readMoreBtn' onClick={()=>navigate("/dashboard/alert-table")}>More Alerts</Button>
                   </motion.div>
                </div>

            </div>
        </div>
    )
}

export default RisksTable





