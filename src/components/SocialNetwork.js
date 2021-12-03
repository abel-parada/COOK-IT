import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialNetwork = () => {
  return (
    <div className="socialnetwork">
      <FaFacebook color="purple" size="5rem" className="icon" />
      <FaInstagram color="purple" size="5rem" className="icon" />
    </div>
  );
};

export default SocialNetwork;
