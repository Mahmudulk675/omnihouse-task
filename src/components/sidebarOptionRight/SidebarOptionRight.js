import { Add, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./SidebarOptionRight.css";

const SidebarOptionRight = ({ previewAndEditPage }) => {
  const SidebarOptionRightBottom = () => {
    return (
      <>
        <div className="sidebarBottomWrapper">
          <div className="sidebarBottomTitle">
            <span>Table of Contents</span>
          </div>
          <div className="sidebarBottomLists">
            <span className="sidebarBottomListsTitle">
              Section 1: Table of Contents
            </span>
            <ul>
              <li>1.1: Part A</li>
              <li>1.2: Part B</li>
              <li>1.3: Part C</li>
              <li>1.4: Part D</li>
            </ul>

            <span className="sidebarBottomListsTitle">
              Section 2: Table of Contents
            </span>
            <ul>
              <li>2.1: Part A</li>
              <li>2.2: Part B</li>
              <li>2.3: Part C</li>
              <li>2.4: Part D</li>
            </ul>
            <span className="sidebarBottomListsTitle">
              Section 3: Table of Contents
            </span>
            <ul>
              <li>3.1: Part A</li>
              <li>3.2: Part B</li>
              <li>3.3: Part C</li>
              <li>3.4: Part D</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="sidebarOptionRight">
      <div className="sidebarRightWrapper">
        <div className="sidebarRightTitle">
          <h3>Contract Builder</h3>
        </div>
        <ul className="sidebarRightLists">
          <li className="sidebarRightItems sidebarRightItemsActive">
            <Add className="sidebarRightIconActive" />
            <span className="sidebarRightText">
              Create new tenancy contract
            </span>
          </li>
          <li className="sidebarRightItems">
            <FiberManualRecord className="sidebarRightIcon" />
            <span className="sidebarRightText">Active tenancy contract</span>
          </li>
          <li className="sidebarRightItems">
            <FiberManualRecord className="sidebarRightIcon" />
            <span className="sidebarRightText">Draft tenancy contract</span>
          </li>
          <li className="sidebarRightItems">
            <FiberManualRecord className="sidebarRightIcon" />
            <span className="sidebarRightText">Signed tenancy contract</span>
          </li>
        </ul>
        {previewAndEditPage ? <SidebarOptionRightBottom /> : ""}
      </div>
    </div>
  );
};

export default SidebarOptionRight;
