import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import SingleProfile from "./pages/SingleProfile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route:is the component user needs to see when they will navigate to that path. */}

          <Route path="/" exact component={LandingPage} />
          <Route path="/Home" component={Home} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LandingPage" component={LandingPage} />
          <Route path="Profile" component={Profile} />
          <Route path="SingleProfile" component={SingleProfile} />
          <Route path="NotFound" component={NotFound} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
