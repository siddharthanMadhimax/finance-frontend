import { EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Sider, Content } = Layout;

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "calc(100vh - 100px)", overflowY: "hidden" }}>
      <Sider style={{ background: "#F4F7FE", borderRight: "1px solid gray" }}>
        <Menu
          className="settings-menu menu-sider"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item
            key="/dashboard/settings/general-setting"
            icon={<EditOutlined className="edit-setting-menu" />}
            onClick={() => navigate("/dashboard/settings/general-setting")} // ✅ Ensure correct path
          >
            General
          </Menu.Item>
          <Menu.Item
            key="/dashboard/settings/user-creation"
            icon={<UserAddOutlined className="edit-setting-menu" />}
            onClick={() => navigate("/dashboard/settings/user-creation")}
          >
            User Creation
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ backgroundColor: "#F4F7FE",padding:"10px" }}>
        <Outlet /> 
      </Content>
    </Layout>
  );
};

export default Settings;
