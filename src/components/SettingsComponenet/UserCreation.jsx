import { Table, Button, Drawer, Modal, message, Form, Input, Select } from "antd";
import { pre } from "framer-motion/client";
import React, { useState } from "react";

const UserCreation = () => {
  const dataSource = [
    {
      key: "1",
      userId: "TXN001234",
      userName: "Vincent",
      position: "Manager",
      createdDate: "12/03/2025",
      createdBy: "Manager",
      userEmail: "rajan123@gmail.com",
      firstName:"Vincent",
      lastName:"M",
      phone:"899378930"
    },
    {
      key: "2",
      userId: "TXN001235",
      userName: "John",
      position: "Representative",
      createdDate: "12/03/2025",
      createdBy: "Manager",
      userEmail: "john123@gmail.com",
      firstName:"jhon",
      lastName:"M",
      phone:"899378930"
    },
    {
      key: "3",
      userId: "TXN001236",
      userName: "Alice",
      position: "Supervisor",
      createdDate: "12/03/2025",
      createdBy: "Supervisor",
      userEmail: "alice123@gmail.com",
      firstName:"Alice",
      lastName:"M",
      phone:"899378930"
    },
  ];
  const [removeBtn, setRemoveBtn] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [selectedUser,setSelectedUser]=useState()
  const[userDrawer,setUserDrawer]=useState(false)
  const [allUserData,setAllUserData]=useState(dataSource)
  const [removeModal,setRemoveModal]=useState(false)
  const [deletionName,setDeletionName]=useState()
  const [inidividaulUserId,setIndividualUserId]=useState()
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [position,setPosition]=useState("")
  const [pass,setPass]=useState("")

  const columns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
  ];

 

  // Handle row selection
  const rowSelection = {
    onChange: (selectedRowKeys) => {
      const selectedUsers = allUserData
        .filter((item) => selectedRowKeys.includes(item.key))
        .map((item) => item.userId);
      // const selectedUserName=allUserData.filter((item)=>item.userId==sele  )

      setSelectedUserIds(selectedUsers);
      // setDeletionName()
      setRemoveBtn(selectedUsers.length > 0);
    },
  };

  const handleRemoveUser=()=>{
    setAllUserData((prev)=>prev.filter((item)=>!selectedUserIds.includes(item.userId)))
    setRemoveModal(false)
    message.success("success")
    setRemoveBtn(false)
  }
  
const formFinish=(values)=>{
  console.log("val",values)
  setAllUserData((prev)=>{
    const newData={
      key:"10",
      userId:"TNX78282",
      createdDate:new Date().toLocaleDateString(),
      userName:values.firstName,
      firstName:values.firstName,
      lastName:values.lastName,
      phone:values.phone,
      createdBy:"Manager",
      userEmail:values.userEmail,
      position:values.position
      
    }

    const alldata=[newData,...prev]
    return alldata
   
  })
}

const handleOpendrawer=(id)=>{
  const selectedUser=allUserData.find((item)=>item.userId==id)
  setIndividualUserId(selectedUser)
  setFirstName(inidividaulUserId.firstName)
  setLastName(inidividaulUserId.lastName)
  setEmail(inidividaulUserId.userEmail)
  setPosition(inidividaulUserId.position)
  // setPass(x)

  setUserDrawer(true)

  
}

  return (
    <div>
      <Modal open={removeModal}
      closable={false}
      onCancel={()=>setRemoveModal(false)}
      onOk={()=>setRemoveModal(false)}
      footer={false}
      onClose={()=>setRemoveModal(false)}>
       <div>
        <div style={{width:"100%"}}><h1 className="confimartion-div-head">Confirmation</h1></div>
        <div>
          <p style={{textAlign:"center",fontSize:"20px"}}>please confirm the deletion of users </p>
        </div>

        <div style={{position:"relative",left:"300px",display:"flex",gap:"20px"}}>
          <Button className="confirm-btn" onClick={handleRemoveUser}>Confirm</Button>
          <Button className="cancel-btn" onClick={()=>setRemoveModal(false)}>Cancel</Button>
        </div>
       </div>
      </Modal>
        <Drawer open={userDrawer} onClose={()=>setUserDrawer(false)}>
           <div className="selected-user-data-form">
           <div className="flex-div-input-user-data">
              <label>First Name</label>
              <Input className="form-user-add" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
           </div>
            <div className="flex-div-input-user-data">
              <label>Last Name</label>
              <Input className="form-user-add" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
           </div>

            <div className="flex-div-input-user-data">
              <label>Email</label>
              <Input className="form-user-add" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>

            <div className="flex-div-input-user-data"
             >
              <label>Position</label>
              
              <Select className="select-position setting-customer"
                dropdownStyle={{ padding: "20px" }}
                placeholder="position"
                value={position}
                onChange={(value)=>setPosition(value)}
               options={[
                {label:"Manager",value:'Manager'},
                {label:"Supervisor",value:"Supervisor"},
                {label:"Representative",value:"Representative"}
               ]}/>
           </div>
           </div>
        </Drawer>
      <Drawer closable={false} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div>
          <h2 className="heading">User Creation</h2>
          <div style={{marginTop:"20px"}}>
            <Form layout="vertical" onFinish={formFinish}>
              <Form.Item 
              label="First Name" name="firstName">
                <Input className="form-user-add" placeholder="Enter your first name..." />
              </Form.Item>

              <Form.Item 
              label="Last Name" name="lastName">
                <Input className="form-user-add" placeholder="Enter your last name..." />
              </Form.Item>

              <Form.Item 
              label="Email" name="userEmail">
                <Input className="form-user-add" placeholder="Enter your Email..." />
              </Form.Item>

              <Form.Item 
              label="Phone No" name="phone">
                <Input className="form-user-add" placeholder="Enter your Phone no..." />
              </Form.Item>

              <Form.Item 
              label="Position" name="position">
               <Select className="select-position setting-customer"
                dropdownStyle={{ padding: "20px" }}
                placeholder="position"
               options={[
                {label:"Manager",value:'Manager'},
                {label:"Supervisor",value:"Supervisor"},
                {label:"Representative",value:"Representative"}
               ]}/>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" className="save-btn-general" type="primary">Save</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Drawer>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          type="primary"
          className="add-btn-user"
          onClick={() => setOpenDrawer(true)}
        >
          Add User
        </Button>
        {removeBtn && (
          <Button
            type="primary"
            className="remove-btn-user"
           onClick={()=>setRemoveModal(true)}
          >
            Remove
          </Button>
        )}
      </div>

      <div className="table-container transaction-table-container">
        <Table
          dataSource={allUserData}
          className="custom-transaction-info-table"
          columns={columns}
          pagination={false}
          rowSelection={rowSelection} 
          scroll={{ x: "max-content" }}
          onRow={(record)=>({
            onClick:()=>handleOpendrawer(record.userId)
          })}
          
        />
      </div>
    </div>
  );
};

export default UserCreation;
