import { Drawer, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  SettingOutlined,
  QuestionCircleOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  AppstoreFilled,
  MessageFilled,
  NotificationOutlined,
  BellOutlined,
  MailOutlined,
  DownOutlined,
  MenuOutlined,
  ExclamationCircleFilled,
  SettingFilled,
  AlertOutlined,
  AlertFilled,
} from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { Routes } from "react-router-dom";
import HeaderComponent from "./commonComponents/HeaderComponent";

const Dashboard = () => {
  const [collapse, setCollapse] = useState(true)
  const navigate = useNavigate()
  const [mainDrawer, setMainDrawer] = useState(false)

  return (

    <>
      <Drawer
        placement="left"
        closable={false}
        width={300}
        open={mainDrawer}
        onClose={() => setMainDrawer(false)}
      >
        <div>
          {/* Drawer Header */}
          <div className="drawer-company-bar">
            <MenuOutlined onClick={() => setMainDrawer(false)} className="bar-icon" />
            <h1 style={{fontWeight:"700"}}>Compli <span className='company-sub-name'>IQ</span></h1>
          </div>

          {/* Sidebar Menu inside Drawer */}
          <Menu
            className="menu-sider"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ backgroundColor: "white", borderRight: "none", fontSize: "16px", marginTop: "30px" }}
          >
            <Menu.Item key="1" icon={<AppstoreFilled />} onClick={() => navigate("/dashboard/risk-table")}>
              Dashboard
            </Menu.Item>

            <Menu.SubMenu key="Alerts" title="Alert Management" icon={<AlertOutlined/>}>

            <Menu.Item key="2" onClick={()=>navigate("/dashboard/not-assign")}>
              Not Assign
            </Menu.Item>
            <Menu.Item key="3" onClick={()=>navigate("/dashboard/assign")}>
              Assigned
            </Menu.Item>
            </Menu.SubMenu>
            {/* <Menu.SubMenu key="risks" icon={<UnorderedListOutlined />} title="Risk Management">
              <Menu.Item key="2" onClick={()=>navigate("/dashboard/high-risk")}>High level risk</Menu.Item>
              <Menu.Item key="3" onClick={()=>navigate("/dashboard/mid-risk")}>Mid level risk</Menu.Item>
              <Menu.Item key="4" onClick={()=>navigate("/dashboard/low-risk")}>Low level risk</Menu.Item>
            </Menu.SubMenu> */}

           <Menu.Item key="5" icon={<SettingFilled/>} onClick={()=>navigate("/dashboard/settings")}>
           Settings
           </Menu.Item>

            <Menu.Item key="6" icon={<QuestionCircleOutlined />} onClick={() => navigate("/dashboard/help")}>
              Help
            </Menu.Item>

          </Menu>



        </div>
      </Drawer>
      <div style={{}}>
        <Layout style={{ minHeight: "100vh", overflowY: "hidden" }}>
          <Sider
            className="slider-screen" collapsedWidth={100} collapsed={collapse} collapsible trigger={null} theme="light">
            {/* Branding */}
            <div className="siderOpenBtn" style={{ padding: "10px", marginTop: "15px" }}
              onClick={() => setMainDrawer(true)}
            ><MenuOutlined /></div>

            {/* Wrapper to allow bottom alignment */}
            <div className="menu-container">
              {/* Main Menu */}
              <Menu
                className="menu-sider"
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{
                  backgroundColor: "white",
                  borderRight: "none",
                  fontSize: "16px",
                  flexGrow: 1,
                }}
              >
                <Menu.Item key="1" icon={<AppstoreFilled />} onClick={() => navigate("/dashboard/risk-table")}>
                  Dashboard
                </Menu.Item>

                <Menu.SubMenu key="Alerts" title="Alert Management" icon={<AlertFilled/>}>
                <Menu.Item key="2" onClick={()=>navigate("/dashboard/not-assign")}>Not Assigned</Menu.Item>
                <Menu.Item key="3" onClick={()=>navigate("/dashboard/assign")}>Assigned</Menu.Item>
                </Menu.SubMenu>
              </Menu>

              {/* Bottom Menu Items */}
              <div className="bottom-menu menu-sider">
                <Menu mode="inline" style={{ backgroundColor: "white", borderRight: "none", fontSize: "16px" }}>
                 <Menu.Item key="5" icon={<SettingFilled/>} onClick={()=>navigate("/dashboard/settings")}>
                 settings
                 </Menu.Item>
                  <Menu.Item key="7" icon={<QuestionCircleOutlined />} onClick={() => navigate("/dashboard/help")}>
                    Help
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          </Sider>
          <Layout>
            <Header style={{
              backgroundColor: "white",
              padding: 0,
             
            }}>
              <HeaderComponent setCollapse={setCollapse} />
            </Header>
            <Content style={{ overflowY: "auto", height: "calc(100vh - 100px)", padding: "16px", backgroundColor: "#F4F7FE" }} className="dashboard-content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>

  );
};

export default Dashboard;
