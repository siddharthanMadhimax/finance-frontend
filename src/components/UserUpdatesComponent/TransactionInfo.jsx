import { Table } from 'antd'
import React, { useState } from 'react'
import { _exports } from '../../constants';
import { useSelector } from 'react-redux';

const TransactionInfo = () => {
  const selectedCustomerId=useSelector((state)=>state.risk.selectedCustomerId)

 const [datasource]=useState(()=>_exports.transactions.filter((item)=>item.customerId==selectedCustomerId))

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transId",
      key: "transId",
    },
    {
      title: "Customer ID",
      dataIndex: "custId",
      key: "custId",
    },
    {
      title: "Customer Name",
      dataIndex: "custName",
      key: "custName",
    },
    {
      title: "Branch ID",
      dataIndex: "branchId",
      key: "branchId",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Rule ID",
      dataIndex: "ruleId",
      key: "ruleId",
    },
    {
      title: "Transaction Amount",
      dataIndex: "transAmt",
      key: "transAmt",
    },
    {
      title: "Transaction Date",
      dataIndex: "transDate",
      key: "transDate",
    },
    {
      title: "Home Branch",
      dataIndex: "homeBranch",
      key: "homeBranch",
    },
    {
      title: "Destination Branch",
      dataIndex: "destBranch",
      key: "destBranch",
    },
  ];
  return (
    <div>


      <div className='table-container transaction-table-container'>
        <Table columns={columns} className="custom-table-risk-alerts custom-transaction-info-table"
        dataSource={datasource}
        pagination={false}
          scroll={
            { x: "max-content" }
          } />
      </div>
    </div>
  )
}

export default TransactionInfo