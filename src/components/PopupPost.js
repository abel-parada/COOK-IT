import React from "react";
import { FaTimes, FaFileImage, FaFileAlt, FaFileVideo } from "react-icons/fa";

const closeHandler = () => {
  window.location.reload();
};
const PopupPost = ({
  firstname,
  lastname,
  username,
  email,
  password,
  postHandler,
}) => {
  return (
    <div className="overlay">
      <div className="inner-popup">
        <div className="contaner popup-header">
          <h2>Create a post</h2>
          <button onClick={closeHandler}>
            <FaTimes className="icon" />
          </button>
        </div>
        <div className="contaner prof-img">
          <img
            className="profile"
            src="assets/images/anjula.jpg
          "
            alt="profile"
          />
          <h2>User name</h2>
        </div>
        <div className="contaner post-text">
          <p>What do you want to post about?</p>
        </div>
        <div className="contaner shareBtn-container">
          <div className="share-icon-container">
            <button>
              <FaFileImage className="icon" />
            </button>
            <button>
              <FaFileVideo className="icon" />
            </button>
            <button>
              <FaFileAlt className="icon" />
            </button>
          </div>
          <div>
            <button onClick={postHandler}>post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupPost;
