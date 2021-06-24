import React from "react";
import PreviewAndEditBody from "../../components/PreviewAndEditBody/PreviewAndEditBody";
import Sidebar from "../../components/sidebar/Sidebar";
import "./PreviewAndEditPage.css";

const PreviewAndEdit = () => {
  return (
    <div className="previewAndEditPage">
      <div className="previewAndEditWrapper">
        <Sidebar previewAndEditPage />
        <PreviewAndEditBody />
      </div>
    </div>
  );
};

export default PreviewAndEdit;
