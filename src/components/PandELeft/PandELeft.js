import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./PandELeft.css";

const PandELeft = () => {
  const { bills, userInput } = useContext(UserContext);
  console.log(userInput.name);
  return (
    <div className="PandELeft">
      <div className="PandELeftWrapper">
        <div className="PandETitle">
          <span>Preview and Edit: Terms of Contract</span>
        </div>
        <div className="PandESectionTop">
          <div className="PandESectionTextBoxTop">
            <span className="PandESectionText">Section 1:</span>

            <h3 className="PandESectionText">AGREEMENT</h3>
            <h4 className="PandESectionText">In name of</h4>
            <h3 className="PandESectionText">{userInput?.name}</h3>
          </div>
        </div>
        <div className="PandESectionBottom">
          <div className="PandESectionTextBoxBottom">
            <span>Section 2:</span>
            <h3>Bills included:</h3>
            <ul>
              {bills?.map((bill) => (
                <li key={bill}>{bill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandELeft;
