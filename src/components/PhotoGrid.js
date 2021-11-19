import React from "react";
import foodImg1 from "../images/food1.jpg";
import foodImg2 from "../images/food2.jpg";
import bake from "../images/bake.jpg";
import cook from "../images/cook.jpg";
import cut from "../images/cut.jpg";
import eat from "../images/eat.jpg";

const PhotoGrid = () => {
  return (
    <div className="gallery">
      <div className="card box1">
        <img src={bake} alt="Food" width="500" height="400"></img>
      </div>
      <div className="card box2">
        <img src={foodImg1} alt="Food" width="500" height="400"></img>
      </div>
      <div className="card box3">
        <img src={foodImg2} alt="Food" width="500" height="400"></img>
      </div>
      <div className="card box4">
        <img src={cut} alt="Food" width="500" height="400"></img>
      </div>
      <div className="card box5">
        <img src={eat} alt="Food" width="500" height="400"></img>
      </div>
      <div className="card box6">
        <img src={cook} alt="Food" width="500" height="400"></img>
      </div>
    </div>
  );
};

export default PhotoGrid;
