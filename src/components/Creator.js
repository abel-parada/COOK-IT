import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Creator = ({ name, pic, id, job, github }) => {
  const githubHandler = () => {
    window.open(`https://github.com/${github}`);
  };
  const linkedinHandler = () => {
    window.open(`https://github.com/${github}`);
  };
  return (
    <>
      <div className="wrapper">
        <div className="circle">
          <img className="picture" src={pic} alt={name} />
          <h2>{name}</h2>
          <p>{job}</p>
          <div className="social-icon">
            <button onClick={githubHandler}>
              <FaGithub color="purple" className="svgIcon" />
            </button>
            <button onClick={linkedinHandler}>
              <FaLinkedin color="purple" className="svgIcon" />
            </button>
          </div>

          {/* <img src={pic1} alt={props.name}/> */}
        </div>
      </div>
    </>
  );
};

export default Creator;
