import { Button, Form, Input } from 'antd'
import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = ({isAuth}) => {
    const navigate=useNavigate()
    const handleFormSubmit=async(values)=>{
        console.log("values : ",values)
        localStorage.setItem("login","success")
        isAuth(true)
        navigate("/dashboard")
    }
  return (
    <div className='login-screen'>
       <div className='login-container'>
         {/* name of prouct */}
         <div>
            <h1 className='headings'>ComplIQ</h1>
        </div>
        {/* login form */}
        <div className='login-form-container'>
            <p className='form-heading'>Sign In</p>
            <Form layout='vertical' onFinish={handleFormSubmit}>
                <Form.Item label="Username" name="username">
                    <Input placeholder='Enter your username'/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password placeholder='Enter your password'/>
                </Form.Item>
                <div className="forgot-password-container">
              <a className="forgot-password">
                Forgot Password?
              </a>
              </div>
                <Form.Item>
                    <Button htmlType='submit' className='sign-in-btn'>Sign in</Button>
                </Form.Item>
            </Form>
        </div>
       </div>
    </div>
  )
}

export default Login