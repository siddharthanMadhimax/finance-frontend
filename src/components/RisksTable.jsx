import React, { useState } from 'react'
import { _exports } from '../constants'
import { Drawer, Table } from 'antd'
import { RightCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setSelectedCustomerId} from "../redux/riskSlice"
const RisksTable = () => {
    const dispatch=useDispatch()
    const [openDrawer,setOpenDrawer]=useState(false)
    const [selectedAlert,setSelectedAlert]=useState()
    const navigate=useNavigate()
    const handleViewData=(value,e)=>{
        // e.stop.propagation()
        console.log("all data",value)
        console.log("seleted",value.customerId)
        dispatch(setSelectedCustomerId(value.customerId))
        navigate("/risk-details")
        
    }
    const handleRowClick=(record)=>{
        setOpenDrawer(true)
        setSelectedAlert(record)
    }
    const columns=[
        {
            title:"Date",
            dataIndex:"date",
            key:'date'
        },
        {
            title:"Rule id",
            dataIndex:"ruleId",
            key:'ruleId',
        },
        {
            title:"Risk lvl",
            dataIndex:"riskLevel",
            key:'riskLevel'
        },
        {
            title:"Cust.Name",
            dataIndex:"customerName",
            key:'customerName'
        },
        {
            title:"Trans.Id",
            dataIndex:"transId",
            key:'trnasId'
        },
        {
            title:"Trans.Amount",
            dataIndex:"transAmount",
            key:'transAmount'
        },
        {
            title:"Trans.Date",
            dataIndex:"transDate",
            key:'transDate'
        },
        {
            title:"Details",
            key:'details',
            render:(text,record)=>(
                <RightCircleOutlined style={{cursor:"pointer",color:"#08816D"}} onClick={(e)=>handleViewData(record,e)}/>

            )
        }
    ]

    const dataSouce=[
        {
            customerId:123456677,
            key: '1',
            date: '28/03/2025',
            ruleId: 'AML-143',
            riskLevel: 'High',
           
            customerName: 'Rajan',
            transId: 'TXN001234',
            transAmount: 300000000,
            transDate: '28/03/2025',
            phone:"7308991992",
            Address:"8, holy cross street, maduvinkarai, chennai, guindy, 600032",
            AccountNumber:"9875262782",
            AccountEstablished:'lorem ipsum',
            LoanAmount:"1000000",
            Balance:"300000"

        },
        {
            customerId:2234567,
            key: '2',
            date: '20/03/2025',
            ruleId: 'AML-141',
            riskLevel: 'High',
           
            customerName: 'Rufas',
            transId: 'TXN001238',
            transAmount: 200000000,
            transDate: '19/03/2025',
        },
        {
            key: '3',
            date: '18/03/2025',
            ruleId: 'AML-142',
            riskLevel: 'High',
            customerId: '98019190',
            customerName: 'Muss',
            transId: 'TXN001237',
            transAmount: 100000000,
            transDate: '16/03/2025',
        },
        {
            key: '4',
            date: '17/03/2025',
            ruleId: 'AML-144',
            riskLevel: 'Mid',
            customerId: '98019190',
            customerName: 'Jepsnal',
            transId: 'TXN001236',
            transAmount: 10000000,
            transDate: '15/03/2025',
        },
        {
            key: '5',
            date: '15/03/2025',
            ruleId: 'AML-143',
            riskLevel: 'Mid',
            customerId: '98019190',
            customerName: 'Manu',
            transId: 'TXN001234',
            transAmount: 5000000,
            transDate: '28/03/2025',
        },
    ]
    return (
        <div style={{overflowY:'hidden'}}>
            <Drawer 
            open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
            >
                <h1>hello</h1>
            </Drawer>
            <div className='alerts-container'>
                {_exports.alertsData.map((item, index) => (
                    <div key={index} className='alerts-items-container'>
                        <div className='alerts-items-count'>
                            {item.alertCount}
                        </div>
                        <div className='alerts-items-title'>
                            {item.alertTitle}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{marginTop:"55px"}}>
                <h2 style={{ padding: '5px', marginLeft: "5px" }}
                 className='heading-table-recent-alert'>Resent Alerts</h2>
                <div className='table-container'>
                    <Table
                    pagination={false}
                    bordered={false}
                    columns={columns}
                    dataSource={dataSouce}
                    onRow={(record)=>(
                        {
                            onClick:()=>handleRowClick(record)
                        }
                    )}
                    // scroll={{ x: "max-content", y: 400 }} 
                    className='custom-table-risk-alerts'
                    >

                    </Table>
                </div>
            </div>
        </div>
    )
}

export default RisksTable


