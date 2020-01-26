import React from "react";
import "./ButtonFetchUser.css";

const ButtonFetchUsers = props => {
  return (
    <>
      <button className={props.class} onClick={props.click}>
        {`${props.value > 1 ? `Losuj ${props.value}` : "Dodaj użytkownika"}`}
      </button>
    </>
  );
};
export default ButtonFetchUsers;
