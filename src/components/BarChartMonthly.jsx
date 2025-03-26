import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarChartMontly = () => {
  const data = [
    { month: "Jan", risk: 42 },
    { month: "Feb", risk: 52 },
    { month: "Mar", risk: 38 },
    { month: "Apr", risk: 22 },
    { month: "June", risk: 32 },
    { month: "Jul", risk: 25 },
    { month: "Aug", risk: 20 }
  ];

  return (
    <div className="bar-chart-container-weekly">
        <h3 className="heading">yearly Risk Analysis</h3>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <defs>
          <linearGradient  id="barGradient" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#53D5AA" offset="0%" />
            <stop stopColor="#A0EEC0" offset="100%" />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          
          <Tooltip 
            cursor={{ fill: "transparent" }} 
            contentStyle={{ backgroundColor: "#53D5AA", borderRadius: "5px", border: "none", color: "#fff" }} 
            itemStyle={{ color: "#fff" }}
          />


          <Bar 
          dataKey="risk" 
          fill="url(#barGradient)" 
          barSize={10} 
          // activeBar={false} 
          animationBegin={200}  
          animationDuration={1000} 
          animationEasing="ease-out" />
          </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartMontly;
