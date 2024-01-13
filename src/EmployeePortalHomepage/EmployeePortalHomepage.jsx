import React from 'react'
import "./styles/EmployeePortalHomepage.css";
const EmployeePortalHomepage = () => {
  return (
    <>
      {/* -------------- header--------------------- */}
      <EmployeePortalHomepageHeader />
      
    </>
  );
}

export default EmployeePortalHomepage


// ----------------- EmployeePortalHomepageHeader --------------------





export  const EmployeePortalHomepageHeader = () => {
  return (
    <div>
      <div className="EmployeePortalHomepageHeader_container">
        <div className="EmployeePortalHomepageHeader_subcontainer">
          <div className="EmployeePortalHomepageHeader_logo">
            <img src="" alt="logo" />
          </div>
          <div className="EmployeePortalHomepageHeader_nav_menu_container">
            <div className="EmployeePortalHomepageHeader_nav_menu">
              
            </div>
            <div className="EmployeePortalHomepageHeader_nav_menu_btns_container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

