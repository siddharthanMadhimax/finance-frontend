  import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleOutlined, SendOutlined, UserOutlined } from '@ant-design/icons'
  import { Input, message } from 'antd'
  import React, { useRef, useState,useEffect } from 'react'
  import { SearchOutlined } from '@ant-design/icons'
  import { _exports } from '../constants'
  import { motion } from 'framer-motion'
  

  const ChatPeople = ({ setChatModal }) => {

    
    const [peopleChats, setPeopleChats] = useState(_exports.chats)
    const [selectedUser, setSelectedUser] = useState()
    const [searchInFocus, setSearchInFocus] = useState(false)
    const [selectedContactChats, setSelectedContactChats] = useState({})
    const [messagetosent,setMessagetoSend]=useState()
     const chatContainerRef = useRef(null);

     useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [selectedContactChats.message]); 
    
    

    const handleSearchContact = (value) => {
      // setSearchContact(value)
      console.log("search value",value)
      const filteredContacts = _exports.chats.filter((item) => item.userName.toLowerCase().includes(value.toLowerCase()))
      setPeopleChats(filteredContacts)
    }
    const handleConatctSeleted = (userId) => {
      setSelectedUser(userId)
      console.log("contact", userId)
      const selectedData = _exports.chats.find((item) => item.userId == userId)
      console.log("selected user", selectedData)
      setSelectedContactChats(selectedData)
    }
    const handleSendMessage=()=>{
      // setPeopleChats((prev)=>console.log("jjjj",prev))
      console.log(peopleChats)
      console.log(messagetosent)

      if(messagetosent.trim()===""|| !selectedUser) return

      const newMessage={
        sender:"me",
        message:messagetosent,
        time:new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setPeopleChats((prev)=>
      prev.map((chat)=>chat.userId==selectedUser.userId ?{...chat,message:[...chat.message,newMessage] } : chat))
      setSelectedContactChats((prev) => ({
        ...prev,
        message: [...prev.message, newMessage],
      }));
      setMessagetoSend("")
    
    }
    return (
      <div>
        {/* chat box */}
        <div className='chat-people-type-container'>
          {/* top with closable */}

          <div className='top-chat-people'>
            <div className='top-today-closeIcon'>
              <div style={{ textAlign: 'center' }}>
                Today
              </div>
              <div className='closed-icon' onClick={() => setChatModal(false)}>
                <CloseCircleOutlined />
              </div>
            </div>

            <div className='input-contains-with-chat-box'>
            <div style={{ marginTop: "70px",gap:'20px' }} 
            ref={chatContainerRef}
            className='chats-sender-receiver'>
              {selectedContactChats?.message?.map((item, index) => (
                <div
                  key={index}
                  className={`chat-message ${item.sender === "me" ? "my-message" : "other-message"}`}
                >
                  {item.sender === "other" && (
                    <div className="profile-pic-chats">
                      <UserOutlined />
                    </div>
                  )}
                  <div className="chats-people-box">
                    {item.message}
                  </div>
                  {item.sender === "me" && (
                    <div className="profile-pic-chats">
                      <UserOutlined />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className='input-send-message-container'>
            {
              selectedUser &&   <Input className='send-message' placeholder='type something'
              suffix={<SendOutlined style={{color:"#08816D",cursor:"pointer",fontSize:"18px"}}
              onClick={handleSendMessage}/>}
              value={messagetosent}
              onChange={(e)=>setMessagetoSend(e.target.value)}/>
            }
            </div>
            </div>

          </div>


          {/* input chat */}
          <div className='people-in-chats-container'>
            {/* search bar */}
            <div className='search-box-chats'>
              <Input
                onFocus={() => setSearchInFocus(true)}
                onBlur={() => setSearchInFocus(false)}
                onChange={(e) => handleSearchContact(e.target.value)}
                placeholder="Search..."
                prefix={
                  <motion.div initial={{ rotate: 0 }}
                    animate={{ rotate: searchInFocus ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >

                    {searchInFocus ? <ArrowRightOutlined /> : <SearchOutlined />}
                  </motion.div>
                } // Moves icon to left
              />
            </div>
            {/* all and unread */}
            <div className='chats-categery-container'>
              <div className='all-chats-category'>All</div>
              <div className='unread-category'>Unread</div>
            </div>

            {/* people names and last message */}
            <div style={{ marginTop: "20px" }}>
              {peopleChats.map((item, index) => {
                const lastMessage = item.message[item.message.length - 1]
                const lastMessageText = lastMessage ? lastMessage.message : "no message yet"
                return <div key={index}
                  style={{ backgroundColor: `${selectedUser == item.userId ? "#08816D" : ""}`, color: `${selectedUser == item.userId ? "white" : ""}` }}
                  className='last-messages-peopleName-container'

                  onClick={() => handleConatctSeleted(item.userId)}>

                  {/* profile pic */}

                  <div className='user-profile-chatbox'>
                    <UserOutlined />
                  </div>

                  <div className='name-time-lastMsg-container'>

                    <div className='name-time-chatbox'>
                      {/* name */}
                      <div>
                        {item.userName}
                      </div>
                      {/* last message */}
                      <div>
                        {lastMessage ? lastMessage.time : "No messages yet"}
                      </div>
                    </div>

                    <div>
                      {lastMessageText.length > 20 ? `${lastMessageText.slice(0, 15)}...` : lastMessageText}
                    </div>

                  </div>

                </div>

              })}
            </div>
          </div>
        </div>

      </div>
    )
  }

  export default ChatPeople





//   import React, { useState } from 'react'
// import { _exports } from '../constants'
// import { AlertTwoTone, FieldTimeOutlined, FileDoneOutlined, HourglassOutlined, SafetyOutlined, UserDeleteOutlined, UsergroupDeleteOutlined } from '@ant-design/icons'
// import ChartAlertCompare from './commonComponents/ChartAlertCompare'
// import BarChartMonthly from './BarChartMonthly'
// import { Button, Table } from 'antd'
// import { useNavigate } from 'react-router-dom'
// import { Reorder, motion } from 'framer-motion';
// const RisksTable = () => {
//     const navigate = useNavigate()
//     const [name, setName] = useState("selcia")
//     const [alerts, setAlerts] = useState(_exports.alertsData);
//     const [renderItems, setRenderItems] = useState([
//         { id: "chart", content: "chart" },
//         { id: "table", content: "table" }
//     ])


//     const columns = [
//         {
//             title: "Date",
//             dataIndex: "date",
//             key: 'date'
//         },
//         {
//             title: "Rule id",
//             dataIndex: "ruleId",
//             key: 'ruleId',
//         },
//         {
//             title: "Risk lvl",
//             dataIndex: "riskLevel",
//             key: 'riskLevel'
//         },
//         {
//             title: "Cust.Name",
//             dataIndex: "customerName",
//             key: 'customerName'
//         },
//         {
//             title: "Status",
//             dataIndex: "status",
//             key: 'status'
//         },
//         {
//             title: "Trans.Id",
//             dataIndex: "transId",
//             key: 'transId'
//         },
//         {
//             title: "Trans.Amount",
//             dataIndex: "transAmount",
//             key: 'transAmount'
//         },
//         {
//             title: "Trans.Date",
//             dataIndex: "transDate",
//             key: 'transDate'
//         },

//     ]


//     const dataSouce = [
//         {
//             customerId: 123456677,
//             key: '1',
//             date: '28/03/2025',
//             ruleId: 'AML-143',
//             riskLevel: 'High',

//             customerName: 'Rajan',
//             transId: 'TXN001234',
//             transAmount: 300000000,
//             transDate: '28/03/2025',
//             phone: "7308991992",
//             Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//             AccountNumber: "9875262782",
//             AccountEstablished: 'lorem ipsum',
//             LoanAmount: "1000000",
//             Balance: "300000",
//             status: "Not Assigned",
//             loanType: "vehicle Loan",
//             contractId: "vl2002",
//             loanTerm: "24 months",
//             emi_Amount: "$687",


//         },
//         {
//             customerId: 123456677,
//             key: '2',
//             date: '28/03/2025',
//             ruleId: 'AML-143',
//             riskLevel: 'High',

//             customerName: 'Rajan',
//             transId: 'TXN001234',
//             transAmount: 300000000,
//             transDate: '28/03/2025',
//             phone: "7308991992",
//             Address: "8, holy cross street, maduvinkarai, chennai, guindy, 600032",
//             AccountNumber: "9875262782",
//             AccountEstablished: 'lorem ipsum',
//             LoanAmount: "1000000",
//             Balance: "300000",
//             status: "Not Assigned",
//             loanType: "vehicle Loan",
//             contractId: "vl2002",
//             loanTerm: "24 months",
//             emi_Amount: "$687",


//         },
//     ]


//     const IconPicker = (value) => {
//         switch (value) {
//             case "Total Alerts":
//                 return <AlertTwoTone className='total-alert-icon' />
//             case "Not Assigned":
//                 return <UserDeleteOutlined />
//             case "Pending":
//                 return <HourglassOutlined />
//             case "Not Suspicious":
//                 return <SafetyOutlined />
//             case "STR Reported":
//                 return <FieldTimeOutlined />
//             case "STR Completed":
//                 return <FileDoneOutlined />
//         }
//     }
//     const getClassName = (value) => {
//         return value.toLowerCase().replace(/\s+/g, "-");
//     }
//     return (
//         <div>
//             <h3 className='welcome-msg'>Welcome back, {name}</h3>

//             {/* cards of showing details of risk */}

//             <div className='risk-car-conatiner'>
//                 {
//                     _exports.alertsData.map((item, index) => (
//                         <div key={index} className={`risk-card ${getClassName(item.alertTitle)}`}>
//                             <div>
//                                 <p style={{ color: "#202224", fontSize: "16px" }}>{item.alertTitle}</p>
//                                 <p style={{ color: "#202224", fontSize: "20px" }}>{item.alertCount}</p>
//                             </div>
//                             <div className={`icons-risk-cards ${getClassName(item.alertTitle)}-icon`}>
//                                 {IconPicker(item.alertTitle)}
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>

//             <div>
//             <Reorder.Group axis="y" values={renderItems} onReorder={setRenderItems}>
//     {renderItems.map((sections) => (
//         <Reorder.Item key={sections.id} value={sections} className="item-dragable">
//             {sections.content === "chart" && (
//                 <div className='bar-charts-graph-container'>
//                     <motion.div
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         style={{ flex: 1, height: "250px" }}>
//                         <ChartAlertCompare />
//                     </motion.div>

//                     <div style={{ flex: 1, height: "250px" }}>
//                         <BarChartMonthly />
//                     </div>
//                 </div>
//             )}

//             {sections.content === "table" && (
//                 <div>
//                     <h3 style={{ marginBottom: "20px" }} className='heading newAlertBlink'>New Alert</h3>
//                     <Table
//                         className='table-container'
//                         scroll={{ x: "max-content" }}
//                         pagination={false}
//                         columns={columns}
//                         dataSource={dataSouce}
//                     />
//                     <motion.div initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
//                         style={{ textAlign: "center", marginTop: "10px" }}>
//                         <Button className='readMoreBtn' onClick={() => navigate("/dashboard/alert-table")}>More Alerts</Button>
//                     </motion.div>
//                 </div>
//             )}
//         </Reorder.Item>
//     ))}
// </Reorder.Group>

//             </div>
//         </div>
//     )
// }

// export default RisksTable