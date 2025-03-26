import { ArrowLeftOutlined, ArrowRightOutlined, EllipsisOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Drawer, Input, message, Popover, Select, Table } from "antd";
import React, { useState } from "react";
import { _exports } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCustomerId } from "../../redux/riskSlice";
import { motion } from "framer-motion";
import { li } from "framer-motion/client";
const AlertTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  


  const { RangePicker } = DatePicker;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  const [customerId, setCustomerId] = useState()
  const [searchIcon,setSeachIcon]=useState(false)
  const [dataSource,setDataSource]=useState(_exports.dataSource)
  const [riskLevel,setRiskLevel]=useState("all")
  const [status,setStatus]=useState("All")
  const [customerData,setCustomerData]=useState([])


  const filteredData=()=>{
    let filteredData=[...dataSource]
    if(riskLevel!=="all"){
      filteredData=filteredData.filter((item)=>item.riskLevel==riskLevel)
    }
    if(status=="notAssigned"||status=="assigned"){
      filteredData=filteredData.filter((item)=>item.status==status)
    }
    return filteredData
  }




  const handleOpenDrawer = async (customerId) => {
    setCustomerId(customerId);
    console.log("Dispatched Customer ID:", customerId); // Debugging
    setCustomerData(_exports.customerInfo.find((item)=>item.customerId==customerId))
    console.log("ijikub",customerData)
    setOpenDrawer(true);

    setOpenPop(false);

    
  };
  const handleUpdateBtn = (customerId) => {

    dispatch(setSelectedCustomerId(customerId))
    
    navigate("/dashboard/updates")

  }


  const StatusColorPicker = (value) => {
    switch (value) {
      case "notAssigned":
        return "custom-select-notAssigned"
      case "assigned":
        return "custom-select-assigned"
    }
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
          {status=="assigned" ? "Assigned" :"Not Assigned"}
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
          placement="bottom" // Fixed typo
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

      <h1 className="heading">All Alerts</h1>

      <div>
        <div>
          <div style={{maxWidth:"250px",marginTop:"20px"}}>
          <Input 
          className="seach-alert-table"
          placeholder="search..."
          onFocus={()=>setSeachIcon(true)}
          onBlur={()=>setSeachIcon(false)}
          prefix={
            <motion.div
            initial={{rotate:0}}
            animate={{rotate:searchIcon ? 360 :0}}
            transition={{duration:0.3}}
            >
              {searchIcon ? <ArrowLeftOutlined className="icon-search"/> :<SearchOutlined className="icon-search"/>}
            </motion.div>
          }
          />

          <div style={{display:"flex",marginTop:"30px",alignItems:"center",gap:"30px"}}>
            <div>
            <Select style={{width:"150px"}}
            placeholder="Status"
            className="select-custom-filter"
            value={status}
            onChange={(value)=>setStatus(value)}
            options={[
              {
                label:"All",value:"all"
              },
              {label:"Not Assigned",value:"notAssigned"},
              {label:"Assigned",value:"assigned"}
            ]}

            />
            </div>
            <div>
              <Select style={{width:"150px"}}
              placeholder="Risk level"
               className="select-custom-filter"
              value={riskLevel}
              onChange={(value)=>setRiskLevel(value)}
              options={[
                {label:"All",value:"all"},
                {label:"High Level Risk",value:"high"},
                {label:"Medium Level Risk",value:"medium"},
                {label:"Low Level Risk",value:"low"},
               
              ]}
              />
            </div>
          </div>
          </div>
        </div>

        <div>

          <Table style={{ marginTop: "40px" }}
            className="custom-table-risk-alerts"
            columns={columns}
            scroll={
              { x: 'max-content' }
            }
            dataSource={filteredData()}
            pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default AlertTable;
