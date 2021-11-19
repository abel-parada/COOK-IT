import React, { useState } from "react";

const Nav2 = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const Logged = () => {
    <h1>logged</h1>;
  };
  const NewUser = () => {
    <h1>not logged</h1>;
  };
  return <div>{authenticated ? <Logged /> : <NewUser />}</div>;
};

export default Nav2;
