import React from "react";
import { staff } from "../components/Staff";
import Creator from "../components/Creator";
import bake from "../images/bake.jpg";
import Headerone from "../components/Headerone";
import "../styles/about.css";

const About = (props) => {
  console.log(staff);
  return (
    <div>
      <Headerone />
      <img src={bake} alt="ingredients" />
      <h1>Meet the CHEFS!</h1>
      <div className="wrapper">
        {staff.map((member) => (
          <Creator
            key={member.id}
            name={member.name}
            job={member.job}
            pic={member.pic}
            github={member.github}
            profile={member.profile}
          />
        ))}
      </div>
      <div className="why">
        <p>why</p>
      </div>
      <div className="partners">
        <p>Partners</p>
      </div>
    </div>
  );
};

export default About;
