import React from 'react'
import { _exports } from '../constants'
import { Table } from 'antd'
import { RightCircleOutlined } from '@ant-design/icons'

const RisksTable = () => {
    const handleViewData=(value)=>{
        console.log("all data",value)
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
                <RightCircleOutlined style={{cursor:"pointer",color:"#08816D"}} onClick={()=>handleViewData(record)}/>
            )
        }
    ]

    const dataSouce=[
        {
            key: '1',
            date: '28/03/2025',
            ruleId: 'AML-143',
            riskLevel: 'High',
            customerId: '98019190',
            customerName: 'Rajan',
            transId: 'TXN001234',
            transAmount: 300000000,
            transDate: '28/03/2025',
        },
        {
            key: '2',
            date: '20/03/2025',
            ruleId: 'AML-141',
            riskLevel: 'High',
            customerId: '98019190',
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
        <div>
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

            <div >
                <h2 style={{ padding: '5px', marginLeft: "10px" }}
                 className='heading-table-recent-alert'>Resent Alerts</h2>
                <div className='table-container'>
                    <Table
                    pagination={false}
                    bordered={false}
                    columns={columns}
                    dataSource={dataSouce}
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