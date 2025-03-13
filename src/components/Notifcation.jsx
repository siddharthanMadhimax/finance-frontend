import React, { useState } from "react";
import { AuditOutlined, BarsOutlined, ClockCircleOutlined, CloseOutlined, InboxOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { _exports } from "../constants";
import { color } from "framer-motion";


const Notification = ({notifyCount}) => {
  const [countOfNotification, setCountOfNotification] = useState(4);

  const [notification,setNotifications]=useState(_exports.notificationAlert)
  const getIcons=(icons)=>{
    switch (icons){
      case "audit":
        return <AuditOutlined/>
      case "bar":
        return <BarsOutlined/>
    }
  }
  const getStyles=(icon)=>{
    switch (icon){
      case "audit":
        return {backgroundColor:"#E7F3F1",color:"#08816D"}
      case "bar":
        return {backgroundColor:"#FFD9D9",color:"#DC3131"}
    }
  }
  const clearAllFunc=()=>{
    setNotifications("")
    setCountOfNotification('')
    notifyCount("")
  }

  return (
    <div className="notification-alerts-container">
      <div className="notification-container">
        {/* Notification Header */}
        <div className="notification-with-count-container">

          <div className="notification-title">
            <div ><h4 className="your-notification-title">YOUR NOTIFICATIONS</h4></div>
            <div className="notification-count">{countOfNotification ? countOfNotification: 0} New</div>
          </div>

          {/* Clear All Button */}
          <div className="notification-clear">
            <CloseOutlined onClick={clearAllFunc} style={{ color: "#08816D" }} />
            <p>Clear All</p>
          </div>

        </div>

      </div>

      <div className="tabs-pane-notification">
        <Tabs defaultActiveKey="1">
          <TabPane tab="View all" key='1'>
            <div className="notification-message-container">
              {
               notification ? notification ?.map((item,index)=>{
                  return <div key={index} className="notification-message-box">
                    <div className="notifcation-message-icon" style={getStyles(item.icon)}>
                      {getIcons(item.icon)}
                    </div>
                    <div>
                      <div>{item.notify}</div>
                      <div>{item.hours}</div>
                    </div>
                  </div>
                })
                :<div className="after-clear-notification-container">
                  <div className="after-clear-icon">
                    <InboxOutlined/>
                  </div>
                  <div className="after-clear-message">
                    No data avilable
                  </div>
                </div>
              }
            </div>
          </TabPane>
          <TabPane tab="Tasks" key="2">
            <div  className="notification-message-container">
              {
                  notification ? notification.filter((item)=>item.notificationType=="tasks").map((item,index)=>(
                  <div key={index} className="notification-message-box">
                    <div className="notifcation-message-icon" style={getStyles(item.icon)}>
                    {
                      getIcons(item.icon)
                    }
                    </div>
                    <div>
                      <div>
                        {item.notify}
                      </div>
                      <div>
                        {item.hours}
                      </div>
                    </div>
                  </div>
                )):
                <div className="after-clear-notification-container">
                  <div className="after-clear-icon">
                    <InboxOutlined/>
                  </div>
                  <div className="after-clear-message">
                    No data avilable
                  </div>
                </div>
              }
            </div>
          </TabPane>
          <TabPane tab="Remainder" key="3">
           <div  className="notification-message-container">
           {
             notification ? notification.filter((item)=>item.notificationType=="remainder").map((item,index)=>(
                <div key={index} className="notification-message-box">
                 <div className="notifcation-message-icon" style={getStyles(item.icon)}>
                 {getIcons(item.icon)}
                 </div>
                 <div>
                  <div>
                    {item.notify}
                  </div>
                  <div>
                    {item.hours}
                  </div>
                 </div>
                </div>
              )):
              <div className="after-clear-notification-container">
                  <div className="after-clear-icon">
                    <InboxOutlined/>
                  </div>
                  <div className="after-clear-message">
                    No data avilable
                  </div>
                </div>
            }
           </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Notification;

