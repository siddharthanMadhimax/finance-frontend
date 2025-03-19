import { Layout } from 'antd'
import React, { useState } from 'react'
import HeaderComponent from './commonComponents/HeaderComponent'
import { Content, Header } from 'antd/es/layout/layout'
import DetailNavBar from './commonComponents/DetailNavBar'
import { Comments, CustomerInfo, Transaction, UploadDocuments } from './DeatilsNavBarComponents'

const IndividualData = () => {
  const tabsComponents={
    "Customer Info":CustomerInfo,
    "Transaction":Transaction,
    "Comments":Comments,
    "Upload Documents":UploadDocuments
  }
  const [showCompanyName,setShowCompanyName]=useState(true)
  const [activeTab,setActiveTab]=useState("Customer Info")
  const ActiveTabComponent=tabsComponents[activeTab] 

  return (

    <div>
      <Layout>
        <Header  style={{ 
  background: '#fff', 
  padding: 0, 
  boxShadow: '0px 4px 10px rgba(0, 255, 166, 0.1)' // Adds shadow
}}>
         <HeaderComponent showCompanyName={showCompanyName}/>
        </Header>
        <Content style={{backgroundColor:"white"}}>
          <DetailNavBar activeTab={activeTab} setActiveTab={setActiveTab}
          />
         <div style={{marginLeft:"0px",marginTop:"30px"}}>
         <ActiveTabComponent/>
         </div>
        </Content>
      </Layout>
    </div>
  )
}

export default IndividualData






// <div style={{ marginTop: "20px" }}>
// <h2>Comments</h2>
// <List
//   dataSource={_exports.comments}
//   renderItem={(comment) => (
//     <div style={{ paddingBottom: "15px", borderBottom: "1px solid #ddd" }}>
//       {/* Main Comment */}
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <Avatar icon={<UserOutlined />} />
//         <strong style={{ color: "#007bff" }}>Stanley</strong>
//       </div>
//       <p style={{ margin: "5px 0" }}>{comment.commentsMsg}</p>
//       <div style={{ color: "gray", fontSize: "12px" }}>
//         <span style={{ marginRight: "10px", cursor: "pointer" }}>Like</span>
//         <span style={{ marginRight: "10px", cursor: "pointer" }}>Reply</span>
//         <span>20h</span>
//       </div>

//       {/* Replies Section */}
//       {comment.commentReply.length > 0 && (
//         <div style={{ marginLeft: "40px", marginTop: "10px", borderLeft: "2px solid #ddd", paddingLeft: "10px" }}>
//           <List
//             dataSource={comment.commentReply}
//             renderItem={(reply) => (
//               <div style={{ paddingBottom: "10px" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                   <Avatar icon={<UserOutlined />} />
//                   <strong style={{ color: "#007bff" }}>Louis</strong>
//                 </div>
//                 <p style={{ margin: "5px 0" }}>{reply.replyMessage}</p>
//                 <div style={{ color: "gray", fontSize: "12px" }}>
//                   <span style={{ marginRight: "10px", cursor: "pointer" }}>Like</span>
//                   <span style={{ marginRight: "10px", cursor: "pointer" }}>Reply</span>
//                   <span>6h</span>
//                 </div>
//               </div>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   )}
// />
// </div> 