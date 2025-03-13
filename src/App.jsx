import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard, Help, Login,  Settings } from './components'
import RisksTable from './components/RisksTable'

const App = () => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("login")
    if (token) {
      setIsAuth(true)
    }
    else {
      navigate("/")
    }
  }, [isAuth])
  return (
    <div>
      {
        !isAuth ?
          <Routes>
            <Route path='/' element={<Login isAuth={setIsAuth} />} />
          </Routes> :
          <div>
            <Routes>
              <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<RisksTable />} /> 
              <Route path='risk-table' element={<RisksTable/>} /> 
              <Route path='settings' element={<Settings/>}/>
              <Route path='help' element={<Help/>}/>
              </Route>
            </Routes>
          </div>
      }

    </div>
  )
}

export default App