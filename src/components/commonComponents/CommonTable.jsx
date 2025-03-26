import React, { useState } from 'react'
import { _exports } from '../../constants'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedCustomerId } from '../../redux/riskSlice'
import { Drawer,Table,Popover,Button} from 'antd'
import { motion } from 'framer-motion'
import { EllipsisOutlined } from '@ant-design/icons'


const CommonTable = ({ value,title }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [dataSource, setDataSource] = useState(_exports.dataSource)
  const filteredData = dataSource.filter((item) => item.status == value)
  const [openPop, setOpenPop] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [customerId, setCustomerId] = useState()
  const [customerData,setCustomerData]=useState([])
  


  const StatusColorPicker = (value) => {
    switch (value) {
      case "notAssigned":
        return "custom-select-notAssigned"
      case "assigned":
        return "custom-select-assigned"
    }
  }

  const handleUpdateBtn = async (customerId) => {
    dispatch(setSelectedCustomerId(customerId))
    navigate("/dashboard/updates")
  }

  const handleOpenDrawer = async (customerId) => {
    setCustomerId(customerId);
        console.log("Dispatched Customer ID:", customerId); // Debugging
        setCustomerData(_exports.customerInfo.find((item)=>item.customerId==customerId))
        console.log("ijikub",customerData)
        setOpenDrawer(true);
    
        setOpenPop(false);
  }

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Rule ID",
      dataIndex: "ruleId",
      key: "ruleId",
    },
    {
      title: "Risk Catg.",
      dataIndex: "riskLevel",
      key: "riskLevel",
    },


    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
    },

    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: 'status',
      render: (status) => (
        <div
          className={StatusColorPicker(status)}>
          {status == "assigned" ? "Assigned" : "Not Assigned"}
        </div>
      )
    },
    {
      title: "Transaction ID",
      dataIndex: "transId",
      key: "transId",
    },
    {
      title: "Transaction Amount",
      dataIndex: "transAmount",
      key: "transAmount",
    },
    {
      title: "Transaction Date",
      dataIndex: "transDate",
      key: "transDate",
    },
    {
      title: "Details",
      key: "details",
      render: (_, record) => (
        <Popover
          open={openPop === record.key}
          placement="bottom"
          onOpenChange={(newOpen) => setOpenPop(newOpen ? record.key : null)}
          arrow={false}
          trigger="click"
          content={
            <motion.div initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="risk-alert-btns-container">
              <div className="button-risk-alert">
                <Button className="risk-alert-btns" onClick={() => handleOpenDrawer(record.customerId)}>
                  View More
                </Button>
              </div>
              <div className="button-risk-alert">
                <Button className="risk-alert-btns" onClick={() => handleUpdateBtn(record.customerId)}>Update</Button>
              </div>
            </motion.div>
          }
        >
          <div className="details-alert-dots">
            <EllipsisOutlined />
          </div>
        </Popover>
      ),
    },
  ];


  return (
    <div>
     <Drawer open={openDrawer}
           height={300}
            onClose={() => setOpenDrawer(false)} closable={false}>
             <div className="heading">
               {_exports.userInfo.filter((item) => item.customerId == customerId).map((item, index) => (
                 <div key={index}>
                   <h2>User Profile</h2>
                  
     
                  {/* personal details */}
                  <div className="personal-details-container">
                   <h3>Personal</h3>
                   <div className="border-for-heading"></div>
     
                   <div style={{marginTop:"20px"}}>
                     <div className="flex-p">
                       <p>Name</p>
                       <p>{customerData?.customerName}</p>
                     </div>
                     <div className="flex-p">
                       <p>Date of birth</p>
                       <p>{customerData?.dateofBirth}</p>
                     </div>
                     <div className="flex-p">
                       <p>Gender</p>
                       <p>{customerData?.gender}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Phone</p>
                       <p>{customerData?.phone}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Address</p>
                       <p>{customerData?.address}</p>
                     </div>
                   </div>
     
     
                  
                  </div>
     
                   {/* Account details */}
     
                   <div style={{marginTop:"10px"}}>
                     <h3>Account Details</h3>
                     <div className="border-for-heading"></div>
                     <div style={{marginTop:'20px'}}>
                     <div className="flex-p">
                       <p>customer Id</p>
                       <p>{customerData?.customerId}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Branch Id</p>
                       <p>{customerData?.branchId}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Region</p>
                       <p>{customerData?.region}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Location</p>
                       <p>{customerData?.location}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Account Number</p>
                       <p>{customerData?.accountNumber}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Account Type</p>
                       <p>{customerData?.accountType}</p>
                     </div>
     
                     <div className="flex-p">
                       <p>Account Status</p>
                       <p style={{color:`${customerData.accountStatus=="Active"?"green":"red"}`}}>{customerData?.accountStatus}</p>
                     </div>
                     </div>
                   </div>
     
                   <div style={{marginTop:"10px"}}>
                     <h2>Contract Details</h2>
                     <div className="border-for-heading"></div>
                     <div>
                       <ul className="heading" style={{display:'flex',gap:"25px",padding:"10px",fontWeight:"600"}}>
                         {customerData.contracts?.map((item,index)=>(
                           <li key={index}>
                             {item.loanType}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
     
                 </div>
               ))}
             </div>
           </Drawer>
     
      
      <div>

        <h1 className='heading' style={{marginTop:"20px",padding:"10px"}}>{title}</h1>
        
      <div style={{marginTop:"40px"}}>
      <Table
       className=" table-container custom-table-risk-alerts"
       scroll={
        { x: 'max-content' }
      } 
      pagination={false}
      columns={columns}
      dataSource={filteredData}
      
      />
      </div>
      </div>
    </div>
  )
}

export default CommonTable