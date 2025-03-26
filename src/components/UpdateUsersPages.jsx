import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UpdateUsersPages = () => {
  return (
    <div>
        {/* navs */}
        <div>
            <nav className='navbar-customer-info'>
                <NavLink  to="customer-info" className={({isActive})=>isActive ?"active-nav":"not-active-nav"}>
                     Info
                </NavLink>

                <NavLink to="transaction-info" className={({isActive})=>isActive ?"active-nav":"not-active-nav"}>
                    transaction
                </NavLink>

                <NavLink to="update-comments" className={({isActive})=>isActive ?"active-nav":"not-active-nav"}>
                    Update
                </NavLink>
            </nav>
        </div>

        <div className='dashboard-content' style={{marginTop:"10px",padding:"20px", overflowY: "auto", height: "calc(100vh - 150px)"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default UpdateUsersPages