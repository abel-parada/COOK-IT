import React from "react";
import "../styles/popup.css";
const closeHandler = () => {
  window.location.reload();
};

const PopUp = ({ firstname, lastname, username, email, postHandler }) => {
  return (
    <div className="overlay">
      <div className="inner-popup">
        <h3>Your note:</h3>
        <p>
          First name <span>{firstname}</span>
        </p>
        <p>
          Last name <span>{lastname}</span>
        </p>
        <p>
          username <span>{username}</span>
        </p>
        <p>
          email <span>{email}</span>
        </p>

        <button className="yesButton" onClick={postHandler}>
          Save
        </button>
        <button className="noButton" onClick={closeHandler}>
          Back to register
        </button>
      </div>
    </div>
  );
};

export default PopUp;
