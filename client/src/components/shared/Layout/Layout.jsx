import React from "react";
import Header from "./Header";
import HomePage from "../../../pages/HomePage";
import Sidbar from "./Sidbar";


const Layout = ({children}) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidbar/>
        </div>
         <div className="col-md-9">{children}</div>
      </div>

      
    
      
       
     
       
    </>
  );
};

export default Layout;




