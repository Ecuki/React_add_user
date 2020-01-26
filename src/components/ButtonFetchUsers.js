import React from "react";
import "./ButtonFetchUser.css";

const ButtonFetchUsers = props => {
  return (
    <>
      <button className={props.class} onClick={props.click}>
        {` Losuj  ${props.value > 1 ? `${props.value}` : "użytkownika"}`}
      </button>
    </>
  );
};
export default ButtonFetchUsers;
