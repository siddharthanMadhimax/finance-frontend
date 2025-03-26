import React, { useState } from 'react'
import { ProfilePic } from '..'
import { Button, DatePicker, Form, Input, Select } from 'antd'
import { _exports } from '../../constants'
import dayjs from 'dayjs'

const GenrelSettings = () => {
    const [employeeData, setEmployeData] = useState(_exports.employeeData)
    const [firstName, setfirstName] = useState(employeeData.firstName)
    const [dateOfBirth, setDateOfBirth] = useState(employeeData.dateOfBirth ? dayjs(employeeData.dateOfBirth):null)
    const [lastName, setLastName] = useState(employeeData.lastName)
    const [position, setPosistion] = useState(employeeData.position)
    const [email, setEmail] = useState(employeeData.yourEmail)
    const [phone,setPhone]=useState(
        employeeData.phoneNumber
    )

    console.log("emp",employeeData)


    return (
        <div>
            <div>
                <h2 className='heading'>General</h2>
                <p className='customize-content'>customize your basic persona</p>
                <div className='div-line'></div>
            </div>

            <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", marginTop: "10px" }}>
                <div className='profile-pic-container'>
                    <div className='profile-pic-box'> <img src={ProfilePic} className='profile-img' style={{ objectFit: "cover" }} alt="profile" /></div>
                </div>
            </div>

           <div>
           <div style={{padding:'',display:"flex",alignItems:'center',justifyContent:"space-around"}}>
             
             <div >
             <div className='setting-inpu-container'>
                  <label>First Name</label>
                  <Input className='general-settin-input' value={firstName} placeholder='First Name...' onChange={(e)=>setfirstName(e.target.value)}/>
              </div>
              <div className='setting-inpu-container'>
                  <label>Your Email</label>
                  <Input className='general-settin-input' value={email} placeholder='First Name...' onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className='setting-inpu-container'>
                  <label>Position</label>
                  <Select
                   dropdownStyle={{ padding: "20px" }}
                   style={{width:'250px',height:"50px"}}
                   className='setting-customer' 
                  options={[
                      {label:"Manager",value:"manager"},
                      {label:"Supervisor",value:'supervisor'},
                      {label:"Representative",value:"reps"}
                  ]}
                   value={email} placeholder='First Name...' onChange={(value)=>setEmail(value)}/>
              </div>
             </div>
             
          <div>
             <div className='setting-inpu-container'>
                  <label>Last Name</label>
                  <Input className='general-settin-input' value={lastName} placeholder='Last Name...' onChange={(e)=>lastName(e.target.value)}/>
              </div>

              <div className='setting-inpu-container'>
                  <label>Your Email</label>
                  <Input className='general-settin-input' value={phone} placeholder='Phone Number...' onChange={(e)=>setPhone(e.target.value)}/>
              </div>

              <div className='setting-inpu-container'>
                  <label>Your Email</label>
                  <DatePicker className='general-settin-input' value={dateOfBirth} placeholder='Phone Number...' onChange={(date)=>setDateOfBirth(date)}/>
              </div>
          </div>

          
          </div>
          <div style={{width:'100%'}}>
          <Button className='save-btn-general' >Save</Button>
          </div>
           </div>

        </div>
    )
}

export default GenrelSettings