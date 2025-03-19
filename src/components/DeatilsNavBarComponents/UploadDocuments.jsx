import { CheckCircleOutlined, CloudUploadOutlined,CloseCircleOutlined,Loading3QuartersOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const UploadDocuments = () => {
  const [uploadIcon,setUploadIcon]=useState("idle")
  const handleUpload = (info) => {
    const file = info.file; 
    if (!file) return;

    setUploadIcon("loading");

   
    setTimeout(() => {
      const status =true; 
      setUploadIcon(status ? "success" : "failure");
      if(status==true){
        message.success("success")
      }
    }, 2000);
  };
  // const handleUploadIcon=()=>{
  //   setuploadIcon(true)
  // }
  return (
    <div 
    style={{marginTop:"20px",display:"flex",alignItems:'center',justifyContent:'center'}}>
     <Upload.Dragger
     showUploadList={false}
     customRequest={handleUpload} 
     className='custom-upload-dragger'>
     <div className='upload-doc-conatiner' 
     >
        <div>
        <motion.div animate={{ rotate: uploadIcon === "loading" ? 360 : 0 }} transition={{ repeat: uploadIcon === "loading" ? Infinity : 0, duration: 1 }}>
            {
              uploadIcon === "idle" ? <CloudUploadOutlined className='upload-icon' /> :
              uploadIcon === "loading" ? <Loading3QuartersOutlined className='upload-icon spin' /> :
              uploadIcon === "success" ? <CheckCircleOutlined className='upload-icon success' /> :
              <CloseCircleOutlined className='upload-icon error' />
            }
          </motion.div>
        </div>
        <div><h1>Select your file or drag and drop</h1></div>
        <div>
          <p>png,pdf,jpg docx accepted

          </p>
        </div>
        <div className='upload-btn-container' onClick={(e)=>e.stopPropagation()}>
          <Upload className='upload-btn'
           showUploadList={false}>
            Upload
          </Upload>
        </div>
      </div>
     </Upload.Dragger>
    </div>
  )
}

export default UploadDocuments