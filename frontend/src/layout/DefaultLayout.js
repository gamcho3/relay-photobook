import React from "react";
import NavBar from "../Navbar/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar>
        <div className="color:yellow">릴레이북 잘 될까요</div>
      </NavBar>
      {children}
    </div>
  );
};

export default DefaultLayout;
