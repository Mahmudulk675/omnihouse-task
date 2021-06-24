import React from "react";
import SidebarOptionLeft from "../sidebarOptionLeft/SidebarOptionLeft";
import SidebarOptionRight from "../sidebarOptionRight/SidebarOptionRight";
import "./Sidebar.css";

const Sidebar = ({ previewAndEditPage }) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarOptionLeft />
        <SidebarOptionRight previewAndEditPage={previewAndEditPage} />
      </div>
    </div>
  );
};

export default Sidebar;
