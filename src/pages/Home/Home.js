import React from "react";
import Navigation from "../../components/Navigation";
import Newsfeed from "../../components/Newsfeed";
import Rightbar from "../../components/Rightbar";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return <div>
    <Navigation />
    <Sidebar />
    <Newsfeed />
    <Rightbar />
  </div>;
};

export default Home;
