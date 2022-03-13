import React from "react";
import "../styles/popup.css";
const closeHandler = () => {
  window.location.reload();
};

const PopUp = ({ firstname, lastname, username, email, postHandler }) => {
  return (
    <div className="overlay">
      <div className="inner-popup">
        <h2>User detail</h2>
        <p>
          Firstname: <span>{firstname}</span>
        </p>
        <p>
          Lastname: <span>{lastname}</span>
        </p>
        <p>
          Username: <span>{username}</span>
        </p>
        <p>
          Email: <span>{email}</span>
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
