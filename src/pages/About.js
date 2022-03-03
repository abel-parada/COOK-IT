import React from "react";
import { staff } from "../components/Staff";
import Creator from "../components/Creator";
import bake from "../images/bake.jpg";
import Headerone from "../components/Headerone";
import "../styles/about.css";

const About = (props) => {
  console.log(staff);
  return (
    <div className="creater-container">
      <Headerone />
      <div className="bgImage-container">
        <img src={bake} alt="ingredients" className="bg-image" />
      </div>

      <h1>Meet the Tech Chefs</h1>
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
        <h2 className="pt-6">Why COOK-IT?</h2>
        <p>
          We bring multiculturalism into your life through your stomach. Cook
          aims to make internationalitation more than a marketing narrative in
          our daily routines.
        </p>
      </div>
      {/* <div className="partners">
        <p>Partners</p>
      </div> */}
    </div>
  );
};

export default About;
