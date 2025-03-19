

const _exports={}

_exports.alertsData=[
    {alertCount:720,alertTitle:"Total Alerts"},
    {alertCount:650,alertTitle:"Not Assigned"},
    {alertCount:420,alertTitle:"Pending"},
    {alertCount:160,alertTitle:"STR Reported"},
    {alertCount:"0.5%",alertTitle:"STR Completed"},
    {alertCount:160,alertTitle:"Resolved"}
]

_exports.notificationAlert=[
    {
        
        notificationType:"tasks",
        icon:"audit",
        notify:"You have pending flagged transactions that need your review.",
        hours:"8hr ago"
    },
    {
        
        notificationType:"tasks",
        icon:"audit",
        notify:"There are transactions pending escalation that need to be reviewed and escalated to the bank manager.",
        hours:"1 day ago"
    },
    {
       
        notificationType:"remainder",
        icon:"bar",
        notify:"The investigation status for the flagged transaction needs to be updated.",
        hours:"1 day ago"
    },
    {
        
        notificationType:"remainder",
        icon:"bar",
        notify:"You need to close the investigation for all transaction, which has been resolved.",
        hours:"1 day ago"
    },
    
]


_exports.chats=[
    {
        userId:"1234",
        userName:"siddhu",message:[
            {time:"08:30 pm",message:"hello dude how care you",sender:"me"},
            {time:"08:40 pm",message:"dude are you ok now",sender:"other"},
            {time:"08:30 pm",message:"hello dude how care you",sender:"me"},
            {time:"08:40 pm",message:"dude are you ok now",sender:"other"},
            {time:"08:40 pm",message:"dude are you ok now",sender:"other"},   {time:"08:40 pm",message:"dude are you ok now",sender:"other"},
            
            {time:"09:40 pm",message:"ok  jhbjhbjhbj jhbjhbih kihjjbjhbjhb kbhbb kihjbhbjhjb khbjhbdude call be when you are free",sender:"me"}
        ],
        profilePic:"",

    },
    {
        userId:"5678",
        userName:"Rufas",message:[
            {time:"08:30 pm",message:"hello dude how care you",sender:"me"},
            {time:"08:40 pm",message:"dude are you ok now",sender:"other"},
            {time:"09:40 pm",message:"ok dude call be when you are free",sender:"me"}
        ],
        profilePic:"",

    },
    {
        userId:"91011",
        userName:"Karthi",message:[
            {time:"08:30 pm",message:"hello dude how care you",sender:"me"},
            {time:"08:40 pm",message:"dude are you ok now",sender:"other"},
            {time:"09:40 pm",message:"ok dude call be when you are free",sender:"me"}
        ],
        profilePic:"",

    },
    {
        userId:"1213",
        userName:"Pooja",message:[
            {time:"08:30 pm",message:"hello dude how care you",sender:"me"},
            {time:"08:40 pm",message:"dude are you ok now",sender:"other"},
            {time:"09:40 pm",message:"ok dude call be when you are free",sender:"me"}
        ],
        profilePic:"",

    }
]


_exports.userInfo=[
    {
        customerId:123456677,
        name:"Rajan",
        phone:"7683976898",
        address:"8, holy cross street, maduvinkarai, chennai, guindy, 600032",
        accountNumber:"986872678828",
        accountEstablished:"lorem perum",
        loanAmount:"1000000",
        Balance:"30000",
        BranchId:'16426',
        transactionId:'tnx528962',
        transactionAmount:400000,
        paymentMethod:"cash",
        paymentDate:"28/03/2025"
    },
    {
        customerId:2234567,
        name:"Rufas",
        phone:"7683976898",
        address:"8, holy cross street, maduvinkarai, chennai, guindy, 600032",
        accountNumber:"986872678828",
        accountEstablished:"lorem perum",
        loanAmount:"1000000",
        Balance:"30000",
        BranchId:'16426',
        transactionId:'tnx528962',
        transactionAmount:400000,
        paymentMethod:"cash",
        paymentDate:"28/03/2025"
    }
]

_exports.comments=[
    {
        name:"rufas",
        commentId:123,
        commentReply:[
            {
                name:"Rajan",
                replyId:101,
                replyMessage:"hello we talk to customer he will submit documents tommorow"
            },
         
        ],
        commentsMsg:"here the amount of transaction  is high so communicate with customer and verify that"
    },
    {
        name:"rufas",
        commentId:123,
        commentReply:[
            {
                name:"Rajan",
                replyId:101,
                replyMessage:"okey sure"
            },
           
          
        ],
        commentsMsg:"okey then submit the document tommorow"
    },
    
]

export{
    _exports
}