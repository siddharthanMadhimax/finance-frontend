import React from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis,Tooltip } from 'recharts'

const ChartAlertCompare = () => {
  const data=[
    {week:"week1",risk:1},
    {week:"week2" , risk:13},
    {week:"week3",risk:6},
    {week:"week4",risk:4}
  ]
  return (
    <div>
      <div className='bar-chart-container-weekly'>
        <h3 className='heading'>Weekly Risk Analysis</h3>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={data}>
         
            <defs>
            <linearGradient id='colorRisk'  x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.5%" stopColor='#6366F1' stopOpacity={0.7}/>
              <stop offset="95%" stopColor='#6366F1' stopOpacity={0.2}/>
            </linearGradient>
            </defs>
            <Tooltip
            itemStyle={{color:"white"}}
             contentStyle={{ backgroundColor: "#6366F1", borderRadius: "8px", fontSize: "14px",color:"white"}} />
         <XAxis dataKey="week" stroke='#8884d8' padding={{left:20,right:20}} interval={0}/>
         <Area type="monotone" dataKey="risk" stroke='#6366F1' strokeWidth={3} fill='url(#colorRisk)' fillOpacity={0.6}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartAlertCompare