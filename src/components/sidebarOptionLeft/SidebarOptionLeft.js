import React from "react";
import {
  Note,
  Notes,
  PersonOutline,
  PlaylistAddCheck,
  Weekend,
} from "@material-ui/icons";
import "./SidebarOptionLeft.css";

const SidebarOptionLeft = () => {
  return (
    <div className="sidebarOptionLeft">
      <ul className="sidebarOptionLeftLists">
        <li className="sidebarOptionLeftItems">
          <PersonOutline className="sidebarLeftIcons" />
          <hr />
        </li>
        <li className="sidebarOptionLeftItems">
          <PlaylistAddCheck className="sidebarLeftIcons" />
          <span className="sidebarLeftText">OmniCheck</span>
        </li>
        <li className="sidebarOptionLeftItems">
          <Note className="sidebarLeftIcons" />
          <span className="sidebarLeftText">Contract Builder</span>
        </li>
        <li className="sidebarOptionLeftItems">
          <Notes className="sidebarLeftIcons" />
          <span className="sidebarLeftText">OmniNews</span>
        </li>
        <li className="sidebarOptionLeftItems">
          <Weekend className="sidebarLeftIcons" />
          <span className="sidebarLeftText">OmniScan</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarOptionLeft;
