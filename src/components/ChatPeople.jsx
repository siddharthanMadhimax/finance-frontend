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