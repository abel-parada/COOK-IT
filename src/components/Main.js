import React from "react";
import PhotoGrid from "./PhotoGrid";
const Main = () => {
  return (
    <main>
      <div className="container">
        {/* Route:is the component user needs to see when they will navigate to that path. */}
        <PhotoGrid />
      </div>
    </main>
  );
};

export default Main;
