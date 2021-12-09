import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import SingleProfile from "./pages/SingleProfile";
import NotFound from "./pages/NotFound";
import About from "./pages/About"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route:is the component user needs to see when they will navigate to that path. */}
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="SingleProfile" element={<SingleProfile />} />
          <Route path="NotFound" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
