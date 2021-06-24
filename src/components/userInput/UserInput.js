import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./UserInput.css";
import { NavigateNext } from "@material-ui/icons";

const UserInput = () => {
  const { setUserInput } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserInput(data);
  };

  // console.log(watch("example"));

  return (
    <div className="userInput">
      <div className="userInputWrapper">
        <div className="inputBox">
          <p className="inputBoxText">
            Enter your full name and/or the company
            <br /> name that the tenant(s) is entering the
            <br />
            agreement with
          </p>
          <div className="inputForm">
            <form onChange={handleSubmit(onSubmit)}>
              <input
                placeholder="Full name"
                className="formValue"
                {...register("name", { required: true })}
                type="text"
              />
              <input
                placeholder="Middle name(s)"
                className="formValue"
                {...register("middleName", { required: true })}
                type="text"
              />
              <input
                placeholder="Surname"
                className="formValue"
                {...register("surname", { required: true })}
                type="text"
              />
              <input
                placeholder="Company name"
                className="formValue"
                {...register("companyName", { required: true })}
                type="text"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="formBtn">
                <Link className="linkBtn" to="/edit" type="submit">
                  Home <NavigateNext />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
