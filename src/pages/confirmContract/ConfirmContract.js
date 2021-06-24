import React from "react";
import ConfirmContractRight from "../../components/confirmContractRight/ConfirmContractRight";
import Sidebar from "../../components/sidebar/Sidebar";
import "./ConfirmContract.css";

const ConfirmContract = () => {
  return (
    <div className="confirmContract">
      <div className="confirmContractWrapper">
        <Sidebar previewAndEditPage />
        <ConfirmContractRight />
      </div>
    </div>
  );
};

export default ConfirmContract;
