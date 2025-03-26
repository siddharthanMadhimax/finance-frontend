import { BoldOutlined, ItalicOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons';
import { Button, List, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import { _exports } from '../../constants';
import Item from 'antd/es/list/Item';

const Comments = () => {

  const [commentValue,setCommentvalue]=useState("")
  const [allComments,setAllComments]=useState(_exports.comments)
  const [commentWrite,setCommentWrite]=useState(true)
  const [commentLength,setCommentLength]=useState(500)
  
  const handleCommentWordsCal=(value)=>{
    
    
    setCommentLength(500-value.length)
    const totalLength=500;
    if(value.length >=totalLength){
      // value=value.slice(0,totalLength)
      setCommentWrite(false)
      return
    }
    setCommentvalue(value)
    setCommentWrite(true)

  }

  const handleCommentSubmit=()=>{
    if(!commentWrite){
      message.error("")
      return
    }
    console.log("new comment",commentValue)
    setAllComments((prev)=>{
      const newComment={
        name:"rufas",
        commentId:167,
        commentReply:[

        ],
        commentsMsg:commentValue,
      }
      const addedComment=[...prev,newComment]
      return addedComment

    })
    setCommentvalue("")
    
    message.success("success")
  }
  return (
    <div>
      {/* Comment Add Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center",padding:"10px" }}>
        <div className='commet-add-section-container'>

          <div>
            <TextArea
            // readOnly={commentWrite}
            value={commentValue}
            onChange={(e)=>handleCommentWordsCal(e.target.value)}
              autoSize={{ minRows:2, maxRows: 8 }}
              placeholder='Add comment...' className='custom-text-area' />
          </div>

          <div className='buttonm-container-submit'>
            <div className='text-desgin-button-container'>
              <Button><BoldOutlined /></Button>
              <Button><ItalicOutlined /></Button>
              <Button><UnderlineOutlined /></Button>
            </div>
            <div className='number-of-comment-container'>
            <div className='comment-total-word'>
                {commentLength}/500
              </div>  
              <div>
              <button  className={commentWrite ? `comment-submit`:'disable-comment'}
              onClick={handleCommentSubmit}>Submit</button>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* Comments Section */}
      <div style={{ marginTop: "20px", marginLeft: "60px", }}>
        <h2>Comments</h2>
        <List
        style={{maxWidth:"800px"  ,overflowX:"hidden",wordWrap:"break-word"}}
          dataSource={allComments}
          renderItem={(commentMsg, index) => (
            <div className='comment-section'>
              <div className='comment-container'>
                <div className='user-profile'>
                  <UserOutlined />
                </div>
                <div className='comment-content'>
                  <div className='comment-name'>{commentMsg.name}</div>
                  <div className='comment-text'>{commentMsg.commentsMsg}</div>
                  <div className='comment-actions'>
                    <span>Like</span>
                    <span onClick={() => handleReplyClick(index)} style={{ cursor: 'pointer', color: 'blue' }}>Reply</span>
                  </div>
                </div>
              </div>

              {/* Reply Input */}


              {/* Display Replies */}
              {commentMsg.commentReply && commentMsg.commentReply.length > 0 && (
                <div className='replies-container'>
                  {commentMsg.commentReply.map((reply) => (
                    <div key={reply.replyId} className='reply-item'>
                      <div className='reply-comment-name-profile'>
                        <div>
                          <UserOutlined className='user-profile' />
                        </div>
                        <div>
                         <div>
                         {reply.name}
                         </div>
                         <div>{reply.replyMessage}</div>
                        </div>
                      </div>
                      <div>
                       
                        
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Comments;
