import React from "react";
import PhotoGrid from "./PhotoGrid";
import SocialNetwork from "./SocialNetwork";
const Main = () => {
  return (
    <main>
      <div className="container">
        {/* Route:is the component user needs to see when they will navigate to that path. */}
        <SocialNetwork />
        <PhotoGrid />
      </div>
    </main>
  );
};

export default Main;
