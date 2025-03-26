import { Alert, Layout } from 'antd'
import React, { useState } from 'react'
import HeaderComponent from './commonComponents/HeaderComponent'
import { Content, Header } from 'antd/es/layout/layout'
import DetailNavBar from './commonComponents/DetailNavBar'
// import { Comments, CustomerInfo, Transaction, UploadDocuments } from './DeatilsNavBarComponents'
import Contracts from './Contracts'
import AlertComponent from './DeatilsNavBarComponents/AlertComponent'
import UpdateComponent from './DeatilsNavBarComponents/UpdateComponent'

const IndividualData = () => {
  const tabsComponents = {
    "Customer Info": CustomerInfo,
    "Transaction": Transaction,

    "Contract": Contracts,
    "Alert": AlertComponent,
    "Update": UpdateComponent
  }
  const [showCompanyName, setShowCompanyName] = useState(true)
  const [activeTab, setActiveTab] = useState("Customer Info")
  const ActiveTabComponent = tabsComponents[activeTab]

  return (

    <div>
      {/* <Layout style={{background:'white'}}>
        <Header style={{
          background: '#fff',
          padding: 0,
         
        }}>
          <HeaderComponent  showCompanyName={showCompanyName} />
        </Header>
        <Content style={{ overflowY: "auto", height: "calc(100vh - 80px)", padding: "16px", }} className="dashboard-content">
          <DetailNavBar activeTab={activeTab} setActiveTab={setActiveTab}
          />
          <div style={{ marginLeft: "0px", marginTop: "30px" }}>
            <ActiveTabComponent />
          </div>
        </Content>
      </Layout> */}
    </div>
  )
}

export default IndividualData




