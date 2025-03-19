// import React, { useState }  from 'react'
// import { BellOutlined, MailOutlined, DownOutlined, } from '@ant-design/icons'
// import { Popover, Badge } from 'antd'
// import Notification from '../Notifcation'

// const HeaderIndividual = () => {
//     const [notifiPopover, setNotifiPopover] = useState(false)
//      const [notifyCount,setNotifyCount]=useState(3)
//       const [chatModal,setChatModal]=useState(false)
//     return (
//         <div>
//             {/* name */}
//             <div>

//             </div>
//             {/* options */}
//             <div className="icon-container">
//                 <div className="icon-wrapper message-icon">

//                     <Popover
//                         arrow={false}
//                         trigger="click"
//                         placement='bottomLeft'
//                         overlayStyle={{ marginTop: "20px" }}
//                         open={notifiPopover}
//                         onOpenChange={(newChange) => setNotifiPopover(newChange)}
//                         getPopupContainer={(triggerNode) => triggerNode.parentNode}
//                         content={<Notification setPopover={setNotifiPopover} notifyCount={setNotifyCount} className='custom-popover-notication' />}
//                     >
//                         <Badge count={notifyCount}

//                             className='notifi-count'
//                             style={{ backgroundColor: "#FFD9D9", color: "#DC3131", fontSize: "14px" }}>
//                             <BellOutlined style={{ fontSize: "20px", color: "#DC3131" }} />
//                         </Badge>
//                     </Popover>

//                 </div>
//                 <div onClick={() => setChatModal(true)}
//                     className="icon-wrapper mail-icon" >
//                     <MailOutlined style={{ color: "#08816D", fontSize: "20px" }} />
//                 </div>
//             </div>
//             <div className="profile-header-container">
//                 <div className="profile-in-header"></div>
//                 <div>selica</div>
//                 <div><DownOutlined className="drop-down-profile" /></div>
//             </div>
//         </div>
//     )
// }

// export default HeaderIndividual