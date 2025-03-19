import React, { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loading from "./components/commonComponents/Loading";
import IndividualData from "./components/IndividualData";
import AnimatedCard from "./components/AnimatedCard";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Help = lazy(() => import("./components/Help"));
const Login = lazy(() => import("./components/Login"));
const Settings = lazy(() => import("./components/Settings"));
const RisksTable = lazy(() => import("./components/RisksTable"));

const App = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null); // ✅ Null indicates loading state

  useEffect(() => {
    const token = localStorage.getItem("login");
  const timer= setTimeout(()=>{
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      navigate("/");
    }
   },2000)

   return ()=>clearInterval(timer)

  }, []);



  if (isAuth === null) {
    return <Loading/>; 
  }

  return (
    <Suspense fallback={<Loading/>}> {/* ✅ Lazy load all components */}
      <Routes>
        {!isAuth ? (
          <>
            <Route path="/" element={<Login isAuth={setIsAuth} />} />
            <Route path="*" element={<Login isAuth={setIsAuth} />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<RisksTable />} />
              <Route path="risk-table" element={<RisksTable />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<Help />} />
            </Route>
            <Route path="/risk-details" element={<IndividualData/>} />
            <Route path="*" element={<Dashboard />} />
            <Route path="animated" element={<AnimatedCard/>} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default App;
