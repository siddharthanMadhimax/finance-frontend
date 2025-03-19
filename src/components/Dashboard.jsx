import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
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
} from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { Routes } from "react-router-dom";
import HeaderComponent from "./commonComponents/HeaderComponent";

const Dashboard = () => {
  const navigate=useNavigate()
  
  return (
    <div style={{backgroundColor:"red"}}>
      <Layout style={{ minHeight: "100vh",overflowY:"hidden" }}>
      <Sider className="slider-screen" collapsible trigger={null} theme="light">
        {/* Branding */}
        <div className="company-name" style={{padding:"10px"}}>ComplIQ</div>

        {/* Wrapper to allow bottom alignment */}
        <div className="menu-container">
          {/* Main Menu */}
          <Menu
            className="menu-sider"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              backgroundColor: "#E7F3F1",
              borderRight: "none",
              fontSize: "16px",
              flexGrow: 1, // Push bottom items down
            }}
          >
            <Menu.Item key="1" icon={<AppstoreFilled />} onClick={()=>navigate("/dashboard/risk-table")}>
              Dashboard
            </Menu.Item>

            <Menu.SubMenu key="risks" icon={<UnorderedListOutlined />} title="Risk Management">
              <Menu.Item key="2">High level risk</Menu.Item>
              <Menu.Item key="3">Mid level risk</Menu.Item>
              <Menu.Item key="4">Low level risk</Menu.Item>
            </Menu.SubMenu>
          </Menu>

          {/* Bottom Menu Items */}
          <div className="bottom-menu">
            <Menu mode="inline" style={{ backgroundColor: "#E7F3F1", borderRight: "none", fontSize: "16px" }}>
              <Menu.Item key="3" icon={<SettingOutlined />} onClick={()=>navigate("/dashboard/settings")}>
                Settings
              </Menu.Item>
              <Menu.Item key="4" icon={<QuestionCircleOutlined />} onClick={()=>navigate("/dashboard/help")}>
                Help
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {/* re-usable header componenet */}
          <HeaderComponent/>
        </Header>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </div>

  );
};

export default Dashboard;
