import React, { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Loading from "./components/commonComponents/Loading";
// import IndividualData from "./components/IndividualData";
// import AnimatedCard from "./components/AnimatedCard";
import { AlertTable, AssignedTable, NotAssignedTable } from "./components/DeatilsNavBarComponents";
import { CustomerInfo, TransactionInfo, UpdateComponent } from "./components/UserUpdatesComponent";
// import UpdateUsersPages from "./components/UpdateUsersPages";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Help = lazy(() => import("./components/Help"));
const Login = lazy(() => import("./components/Login"));
const Settings = lazy(() => import("./components/Settings"));
const RisksTable = lazy(() => import("./components/RisksTable"));
const UpdateUsersPages = lazy(() => import("./components/UpdateUsersPages"))
const GeneralSetting = lazy(() => import("./components/SettingsComponenet/GenrelSettings"))
const UserCreation = lazy(() => import("./components/SettingsComponenet/UserCreation"))

const App = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null); // ✅ Null indicates loading state

  useEffect(() => {
    const token = localStorage.getItem("login");
    const timer = setTimeout(() => {
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        navigate("/");
      }
    }, 2000)

    return () => clearInterval(timer)

  }, []);



  if (isAuth === null) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}> {/* ✅ Lazy load all components */}
      <Routes>
        {!isAuth ? (
          <>
            <Route path="/" element={<Login isAuth={setIsAuth} />} />
            <Route path="*" element={<Login isAuth={setIsAuth} />} />
          </>
        ) : (

          <>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<RisksTable />} />
              <Route path="risk-table" element={<RisksTable />} />
              <Route path="/dashboard/settings" element={<Settings />}>
                <Route index element={<Navigate to="general-setting" replace />} />
                <Route path="general-setting" element={<GeneralSetting />} />
                <Route path="user-creation" element={<UserCreation />} />
              </Route>
              <Route path="not-assign" element={<NotAssignedTable />} />
              <Route path="assign" element={<AssignedTable />} />
              <Route path="alert-table" element={<AlertTable />} />
              <Route path="help" element={<Help />} />

              <Route path="updates" element={<UpdateUsersPages />}>
                <Route index element={<Navigate to="customer-info" replace />} />
                <Route path="customer-info" element={<CustomerInfo />} />
                <Route path="transaction-info" element={<TransactionInfo />} />
                <Route path="update-comments" element={<UpdateComponent />} />
              </Route>
            </Route>
            {/* <Route path="/risk-details" element={<IndividualData/>} />
            <Route path="*" element={<Dashboard />} />
            
            <Route path="animated" element={<AnimatedCard/>} /> */}
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default App;
