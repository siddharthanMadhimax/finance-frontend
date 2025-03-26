import { BoldOutlined, CheckCircleOutlined, CloseCircleOutlined, CloudUploadOutlined, ItalicOutlined, Loading3QuartersOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons'
import { Button, message, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import { _exports } from '../../constants'
import { motion } from 'framer-motion'

const UpdateComponent = () => {
  const [commentMsg, setCommentMsg] = useState("")
  const [totalCount, setTotalCount] = useState(0)
  const [showBtn, setShowBtn] = useState(true)
  const [allComments, setAllCommnets] = useState(_exports.comments)
  const [uploadIcons, setUploadIcons] = useState("normal")

  const handleComment = (value) => {

    setTotalCount(value.length)

    if (value.length > 500) {
      setShowBtn(false)

    } else {
      setShowBtn(true)
    }
    setCommentMsg(value)


  }
  const handleCommentSubmit = () => {
    if (commentMsg.length <= 0) {
      message.error("please type something...")
      return
    }
    setAllCommnets((prev) => {
      const newComment = {
        name: "rufas",
        commentId: 167,
        commentReply: [

        ],
        commentsMsg: commentMsg,

      }
      const allComments = [...prev, newComment]
      return allComments
    })
    message.success("success")
    setCommentMsg("")
  }

  const handleUpload = async (info) => {
    const file = info.file
    if (!file) return

    setUploadIcons("loading")

    setTimeout(() => {
      const status = true;
      setUploadIcons(status ? "success" : "error");
      if (status == true) {
        message.success("success")
      }
    }, 2000);
  }

  return (
    <div className='upload-comment-section-container'  >
      {/* comment section */}
      <div className='comment-section-container'>
        {/* upper section comment type */}
        {/* <h1></h1> */}
        <div className='comment-type-section'>
          <div>
            <TextArea
              value={commentMsg}
              onChange={(e) => handleComment(e.target.value)}
              className='comment-text-area custom-text-area'
              placeholder='type something...'
              style={{ borderRadius: "10px" }}
              autoSize={{ minRows: 3, maxRows: 8 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className='comment-btns-container'>
              <Button className='comment-btn'><BoldOutlined /></Button>
              <Button className='comment-btn'><ItalicOutlined /></Button>
              <Button className='comment-btn'><UnderlineOutlined /></Button>
            </div>
            <div style={{ padding: "10px", display: "flex", alignItems: "center", gap: "20px" }}>
              <div>
                {totalCount}/500
              </div>
              <div>
                <Button disabled={!showBtn} className={`${showBtn ? 'submit-btn-comment' : "showbtn-hide"}`}
                  onClick={handleCommentSubmit}
                >Submit</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='showing-cmments-container'>
          <h2 className='comment-heading' style={{ marginLeft: "15px" }}>Comments</h2>
          {/* comments */}
          <div>
            {allComments.map((item, index) => (
              <div key={index}>

                <div style={{ padding: '10px' }}>
                  <div className='comments-msg-conatiner' >
                    {/* profile */}
                    <div style={{ position: 'relative', top: "-20px" }} className='comment-profile-pic'>
                      <UserOutlined />
                    </div>
                    {/* name and msg */}
                    <div className='comment-profile-container' >
                      <div className='comment-name'>{item.name}</div>
                      <div >{item.commentsMsg}</div>
                      <div className='reply-like-section'>
                        <div>Like</div>
                        <div>Reply</div>
                      </div>
                    </div>
                  </div>

                  {/* reply message */}
                  <div style={{ marginTop: "20px" }}>
                    {item.commentReply && item.commentReply.map((item, index) => {
                      return (
                        <div key={index} className='reply-comment-msg-container' >
                          <div>
                            {/* profile */}
                            <div className='reply-comment-msg-profile-container'>
                              <div><UserOutlined /></div>
                              <div>
                                <div className='comment-name'>{item.name}</div>
                                <div>{item.replyMessage}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>


      {/* upload section */}
      <div className='upload-div-container' style={{ backgroundColor: "white" }}>
        <Upload.Dragger
          showUploadList={false}
          customRequest={handleUpload}
          style={{ backgroundColor: 'white' }} >
          <div className='upload-div-content-container'>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: uploadIcons === "loading" ? 360 : 0 }}
              transition={{ repeat: uploadIcons === "loading" ? Infinity : 0, duration: 0.8 }}
            >{uploadIcons == "normal" ? <CloudUploadOutlined className='upload-icon' /> : uploadIcons == "error" ? <CloseCircleOutlined className='upload-icon red-icon' /> : uploadIcons == "success" ? <CheckCircleOutlined className='upload-icon success-icon' /> : uploadIcons == "loading" ? <Loading3QuartersOutlined className='upload-icon'/> : ""}</motion.div>
            <div className='upload-intrusction'>Select your file or drag and drop</div>
            <div className='upload-format'>png,pdf,jpg,docx accepted</div>
            <div className='upload-btn-container'><button className='upload-btn'>Upload</button></div>
          </div>
        </Upload.Dragger>
      </div>
    </div>
  )
}

export default UpdateComponent