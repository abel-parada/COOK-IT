import React from "react";
import Navigation from "../components/Navigation";
import Newsfeed from "../components/Newsfeed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import "./../styles/home.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="homecontainer">
        <Sidebar />
        <Newsfeed />
        {/* <Rightbar /> */}
      </div>
    </div>
  );
};

export default Home;
