import React from 'react'

const DetailNavBar = ({setActiveTab,activeTab}) => {
    const Tabs=["Customer Info","Transaction","Comments","Upload Documents"]
  return (
    <div>
        <div className='details-navbar-container'>
            {Tabs.map((tab,index)=>(
                <div key={index}>
                    <div className={`deatils-navbar-content ${activeTab == tab ?"active-tab":"" }`}
                    onClick={()=>setActiveTab(tab)}>
                        {tab}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DetailNavBar