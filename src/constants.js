import { icons } from "antd/es/image/PreviewGroup"

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

export{
    _exports
}