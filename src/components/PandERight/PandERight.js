import React, { useContext } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./PandERight.css";
import { UserContext } from "../../App";

const PandERight = () => {
  const { setBills } = useContext(UserContext);
  const billOptions = [
    { value: "Electricity", label: "Electricity" },
    { value: "Gas", label: "Gas" },
    { value: "Water", label: "Water" },
    { value: "Internet", label: "Internet" },
    { value: "TV License", label: "TV License" },
    { value: "Other", label: "Other" },
  ];

  const handleSelect = (e) => {
    console.log(e);
    setBills(e.map((bill) => bill.value));
  };

  return (
    <div className="PandERight">
      <div className="PandERightWrapper">
        <Select isMulti options={billOptions} onChange={handleSelect}></Select>
        <div className="PandEButtonContainer">
          <Link className="PandEButton" to="/confirm">
            Sign and Send Contract to Tenant(s)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PandERight;
