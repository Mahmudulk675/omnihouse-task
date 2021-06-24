import { Send } from "@material-ui/icons";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./ConfirmContractRight.css";

const ConfirmContractRight = () => {
  const { userInput, bills } = useContext(UserContext);

  const handleConfirm = () => {
    alert("Contract Confirmed");
  };
  return (
    <div className="confirmContractRight">
      <div className="confirmRightWrapper">
        <span className="confirmRightTitleText"> Preview Contract</span>
        <div className="confirmRightSection">
          <h5>Section: A</h5>
          <p>
            AGREEMENT <br />
            In name of <br />
            {userInput.name}
          </p>
        </div>
        <div className="confirmRightSection">
          <h5>Section: 2</h5>
          <p>Bills Included:</p>
          {bills.map((bill) => (
            <li key={bill}>{bill}</li>
          ))}
        </div>
      </div>
      <button onClick={handleConfirm} className="confirmButton">
        Confirm Contract <Send style={{ marginLeft: "10px" }} />{" "}
      </button>
    </div>
  );
};

export default ConfirmContractRight;
