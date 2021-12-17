import React from "react";
import "./../styles/share.css";
import { VscFileMedia, VscReactions } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import { BiTag } from "react-icons/bi";
import pic from "../images/bake.jpg";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={pic} alt="" />
          <button
            onClick={() => console.log("I am gonna cook")}
            className="shareInput"
          >
            What are you cooking today?
          </button>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VscFileMedia className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <BiTag className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <VscReactions className="shareIcon" />
              <span className="shareOptionText">Reactions</span>
            </div>
            <div className="shareOption">
              <GoLocation className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          {/* We want the shareButton inside the popUp post form */}
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
