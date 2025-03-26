


const _exports={}

_exports.alertsData=[
    {alertCount:720,alertTitle:"Total Alerts"},
    {alertCount:650,alertTitle:"Not Assigned"},
    {alertCount:420,alertTitle:"Pending"},
    {alertCount:160,alertTitle:"Not Suspicious"},
    {alertCount:120,alertTitle:"STR Reported"},
    {alertCount:"0.5%",alertTitle:"STR Completed"}
   
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


_exports.transactions = [
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:123456677
  },
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:123456677,
  },
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:123456677
  },
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:78920800
  },
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:2234567,
  },
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:12980801,
  },
  {
    transId: "TXN001234",
    custId: "9801919",
    custName: "Rajan",
    branchId: "132476",
    state: "Tamil Nadu",
    city: "Chennai",
    ruleId: "AML-143",
    transAmt: "$1000000",
    transDate: "28/03/2025",
    homeBranch: "Chennai",
    destBranch: "Bangalore",
    customerId:2234567,
  }
];

_exports.dataSource= [
    {
      key: "1",
      customerId: 123456677,
      date: "28/03/2025",
      ruleId: "AML-143",
      riskLevel: "high",
      customerName: "Rajan",
      transId: "TXN001234",
      transAmount: 300000000,
      transDate: "28/03/2025",
      status: "assigned",
     
    },
    {
      key: "2",
      customerId: 2234567,
      date: "20/03/2025",
      ruleId: "AML-141",
      riskLevel: "medium",
      customerName: "Rufas",
      transId: "TXN001238",
      transAmount: 200000000,
      transDate: "19/03/2025",
      status: "notAssigned"

    },
   
  ];

  _exports.customerInfo=[
    {customerId:123456677,phone:"7356729920",address:"8,holy street, Maduvinkarai, Chennai, 600032",
      accountNumber:"89879808778",accountType:"Personal",accountStatus:"Active",customerName:"Rajan",
      gender:"male",dateofBirth:"20/11/2002",location:"chennai",region:"sothern",accountType:"bussiness",
      contracts:[
        {
          contractId: "PL3002",
          customerName: "Raajan",
          loanAmount: "$10,000",
          loanTerm: "2 years",
          status: "Active",
          emiAmount: "$420",
          noOfInstallments: 24,
          loanType: "Personal Loan"
        },
        {
          contractId: "HL4002",
          customerName: "Raajan",
          loanAmount: "$200,000",
          loanTerm: "20 years",
          status: "Approved",
          emiAmount: "$1,200",
          noOfInstallments: 240,
          loanType: "Home Loan"
        },
        {
          contractId: "VL5001",
          customerName: "Raajan",
          loanAmount: "$50,000",
          loanTerm: "5 years",
          status: "Pending",
          emiAmount: "$900",
          noOfInstallments: 60,
          loanType: "Vehicle Loan"
        }
      ],
      alertId:"768758500",
      transactionId:"768758599",
      riskLevel:"High",
      alerStatus:"Not assigned",
      transAmount:"$1000000",
      branchId:"SB500012",
      loanAmount:"$1000000",
      balance:"$300000",
      paymentMethod:"Cash",
      paymentDate:"12/02/2025"
      
    },
    {
      customerId: 2234567,
      phone: "8123456789",
      address: "28, Lakeview Street, Tambaram, Chennai, 600045",
      accountNumber: "23456789012",
      accountType: "Business",
      accountStatus: "Inactive",
      customerName: "Rufas",
      gender:"male",dateofBirth:"20/11/2002",
      location:"chennai",region:"sothern",accountType:"bussiness",
      contracts:[
        {
          contractId: "PL3002",
          customerName: "Rufas",
          loanAmount: "$10,000",
          loanTerm: "2 years",
          status: "Active",
          emiAmount: "$420",
          noOfInstallments: 24,
          loanType: "Personal Loan"
        },
        {
          contractId: "HL4002",
          customerName: "Rufas",
          loanAmount: "$200,000",
          loanTerm: "20 years",
          status: "Approved",
          emiAmount: "$1,200",
          noOfInstallments: 240,
          loanType: "Home Loan"
        },
        {
          contractId: "VL5001",
          customerName: "Rufas",
          loanAmount: "$50,000",
          loanTerm: "5 years",
          status: "Pending",
          emiAmount: "$900",
          noOfInstallments: 60,
          loanType: "Vehicle Loan",
          paymentMethod:"Cash",
          paymentDate:"12/05/2025"
        }
      ],
      alertId:"768758599",
      transactionId:"768758599",
      riskLevel:"High",
      alerStatus:"Not assigned",
      transAmount:"$1000000",
      branchId:"SB500012",
      loanAmount:"$1000000",
      balance:"$300000",
      paymentMethod:"Cash",
       paymentDate:"12/02/2025"
      
    },
  
  ]


  _exports.usersData=[
    {
      name:"Alen",
      position:"supervisor",
      email:"alen@gmail.com",
      phone:"838729088",
      gender:"Male",
      
    },

  ]
_exports.employeeData={
  firstName:"siddhu",
  lastName:"M",
  phoneNumber:"638808720",
  yourEmail:"siddhu@gmail.com",
  position:"manager",
  dateOfBirth:"20/1/2002"
}

export{
 _exports   
}