import React from "react";

const AnimatedCard = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Animated Card</h2>
        <p>This card has a smooth gradient animation effect.</p>
      </div>
    </div>
  );
};

export default AnimatedCard;



// import { CompassFilled, CompassTwoTone } from "@ant-design/icons";
// import React from "react";
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // Sample total risk data for January and February
// const data = [
//   { month: "January", janRisk: 450, febRisk: 520 },
//   { month: "February", janRisk: 200, febRisk: 900 },
// ];

// const ChartAlertCompare = () => {
//   return (
//     <div style={{ width: "100%", height: "250px", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
//       <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px", color: "#2B3674" }}>Customer Satisfaction</h2>

//       <ResponsiveContainer width="100%" height={150}>
//         <AreaChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
//           {/* Gradient Definitions */}
//           <defs>
//             <linearGradient id="colorJan" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#34D399" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
//             </linearGradient>
//             <linearGradient id="colorFeb" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
//             </linearGradient>
//           </defs>

//           {/* Axes & Grid */}
//           {/* <XAxis dataKey="month" stroke="#A0AEC0" tick={{ fontSize: 12 }} /> */}
//           {/* <YAxis stroke="#A0AEC0" tick={{ fontSize: 12 }} /> */}
//           {/* <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} /> */}
//           <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", fontSize: "14px" }} />

//           {/* January Risk - Green */}
//           <Area type="monotone" dataKey="janRisk" stroke="#34D399" strokeWidth={3} fillOpacity={0.5} fill="url(#colorJan)" />

//           {/* February Risk - Blue */}
//           <Area type="monotone" dataKey="febRisk" stroke="#6366F1" strokeWidth={3} fillOpacity={0.5} fill="url(#colorFeb)" />
//         </AreaChart>

//         <div style={{ marginTop: "20px" }}>
//           <div>




//             <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"60px"}}>
//               <div style={{ display: "flex",color:"#6366F1", alignItems: "center", gap: "8px" }}>
//                 <CompassFilled style={{ fontSize: "16px", verticalAlign: "middle" }} />
//                 <p style={{ margin: 0 }}>Last month</p>
//               </div>

//               <div style={{ display: "flex",color:"#34D399", alignItems: "center", gap: "8px" }}>
//                 <CompassFilled style={{ fontSize: "16px", verticalAlign: "middle" }} />
//                 <p style={{ margin: 0 }}>This month</p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ChartAlertCompare;

// explain me this that i can make myself like that







