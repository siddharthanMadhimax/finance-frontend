import React, { useState } from 'react'
import { _exports } from '../constants'
import { Button, Drawer, Popover, Table } from 'antd'
import { EllipsisOutlined, RightCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedCustomerId } from "../redux/riskSlice"
import { useSelector } from 'react-redux'

const RisksTable = () => {
    const selectedCustomerId=useSelector((state)=>state.risk.selectedCustomerId)
    const dispatch = useDispatch()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectedAlert, setSelectedAlert] = useState()
    const [openPopUp,setOpenPopup]=useState(false)

    const navigate = useNavigate()
    const handleViewData = (value, e) => {
        // e.stop.propagation()
        console.log("all data", value)
        console.log("seleted", value.customerId)
        dispatch(setSelectedCustomerId(value.customerId))
        navigate("/risk-details")

    }
    // const handleRowClick=(record)=>{
    //     setOpenDrawer(true)
    //     setSelectedAlert(record)
    // }\

    const handleOpenDrawer=(value)=>{
        setOpenDrawer(true)
        setOpenPopup(false)
        dispatch(setSelectedCustomerId(value.customerId))
    
    }
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
            title: "Trans.Id",
            dataIndex: "transId",
            key: 'trnasId'
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
        {
            title: "Details",
            key: 'details',
            render: (text, record) => (
                <Popover
                arrow={false}
                placement='bottom'
                open={openPopUp==record.key}
                trigger="click"
                onOpenChange={(newChange)=>setOpenPopup(newChange)}
                content={
                    <div className='popover-choose-drawer-update'>
                        <Button style={{backgroundColor:"#E7F3F1"}} onClick={()=>handleViewData(record)}>Update</Button>
                        <Button  style={{backgroundColor:"#E7F3F1"}} onClick={()=>handleOpenDrawer(record)}>View More</Button>
                    </div>
                }
                >
                    <EllipsisOutlined style={{
                        cursor: "pointer", color: "#08816D",
                        fontSize: "25px"
                    }} onClick={()=>setOpenPopup(true)} />
                </Popover>

            )
        }
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
            
            loanType:"vehicle Loan",
            contractId:"vl2002",
            loanTerm:"24 months",
            emi_Amount:"$687",


        },
        {
            customerId: 2234567,
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
        <div style={{ overflowY: 'hidden' }}>
            <Drawer
            width={500}
                open={openDrawer}
                closable={false}
                onClose={() => setOpenDrawer(false)}
            >
                <h1>Overview</h1>
                <div>
                    {
                        dataSouce.filter((item)=>item.customerId==selectedCustomerId).map((item,index)=>(
                            <div key={index}>
                                <div className='drawer-risk-alert'>
                                    <p>Name </p>
                                    <p>{item.customerName}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Transaction Date </p>
                                    <p>{item.date}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Risk Level </p>
                                    <p>{item.riskLevel}</p>
                                </div>

                                {/* <div className='drawer-risk-alert'>
                                    <p>Loan Amount </p>
                                    <p>{`$ ${item.LoanAmount}`}</p>
                                </div> */}

                                <div className='drawer-risk-alert'>
                                    <p>Transaction Id </p>
                                    <p>{item.transId}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Transaction Amount </p>
                                    <p>{`$ ${item.transAmount}`}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Loan Amount </p>
                                    <p>{`$ ${item.LoanAmount}`}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Loan Type </p>
                                    <p>{`$ ${item.loanType}`}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Loan Term</p>
                                    <p>{`$ ${item.loanTerm}`}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Emi Amount </p>
                                    <p>{`$ ${item.emi_Amount}`}</p>
                                </div>

                                <div className='drawer-risk-alert'>
                                    <p>Contract Id</p>
                                    <p>{`$ ${item.contractId}`}</p>
                                </div>


                                {/* <div className='drawer-risk-alert'>
                                    <p>Loa </p>
                                    <p>{`$ ${item.LoanAmount}`}</p>
                                </div> */}

                            </div>
                        ))
                    }
                </div>
                <div>

                </div>
            </Drawer>
            <div className='alerts-container' >
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

            <div style={{ marginTop: "20px",overflowY:'auto'}}>
                <h2 style={{ padding: '5px', marginLeft: "5px" }}
                    className='heading-table-recent-alert'>Recent Alerts</h2>
                <div className='table-container'>
                    <Table
                        pagination={false}
                        bordered={false}
                        columns={columns}
                        dataSource={dataSouce}
                        // onRow={(record)=>(
                        //     {
                        //         onClick:()=>handleRowClick(record)
                        //     }
                        // )}
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


