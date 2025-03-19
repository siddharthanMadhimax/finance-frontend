import React, { useState } from 'react'
import { BellOutlined, MailOutlined, DownOutlined } from '@ant-design/icons'
import { Badge, Drawer, Modal, Popover } from 'antd'
import Notifcation from '../Notifcation'
import ChatPeople from '../ChatPeople'
import { useNavigate } from 'react-router-dom'
const HeaderComponent = ({showCompanyName}) => {
  const [notifiPopover, setNotifiPopover] = useState(false)
  const [notifyCount, setNotifyCount] = useState(3)
  const [chatModal, setChatModal] = useState(false)
  const navigate=useNavigate()


  return (
    <>
      {/* <Drawer open={chatModal}
        onClose={() => setChatModal(false)}
        width={800}
        bodyStyle={{ padding: "0px" }}
        className='drawer-chatbox'
        closable={false}
      >

        <ChatPeople setChatModal={setChatModal} />

      </Drawer> */}
      <div>

        <div className='header-with-name'>

          <div className='header-name'onClick={()=>navigate("/dashboard/risk-table")}>
           {
            showCompanyName &&  <h1 className='company-name' style={{padding:"0px 5px",cursor:"pointer"}}>ComplIQ</h1>
           }
          </div>
          <div className="header">


            <div className="icon-container">
              <div className="icon-wrapper message-icon">

                <Popover
                  arrow={false}
                  trigger="click"
                  placement='bottomLeft'
                  overlayStyle={{ marginTop: "20px" }}
                  open={notifiPopover}
                  onOpenChange={(newChange) => setNotifiPopover(newChange)}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  content={<Notifcation setPopover={setNotifiPopover} notifyCount={setNotifyCount} className='custom-popover-notication' />}
                >
                  <Badge count={notifyCount}

                    className='notifi-count'
                    style={{ backgroundColor: "#FFD9D9", color: "#DC3131", fontSize: "14px" }}>
                    <BellOutlined style={{ fontSize: "20px", color: "#DC3131" }} />
                  </Badge>
                </Popover>

              </div>
              {/* <div onClick={() => setChatModal(true)}
                className="icon-wrapper mail-icon" >
                <MailOutlined style={{ color: "#08816D", fontSize: "20px" }} />
              </div> */}
            </div>
            <div className="profile-header-container">
              <div className="profile-in-header"></div>
              <div>selica</div>
              <div><DownOutlined className="drop-down-profile" /></div>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default HeaderComponent