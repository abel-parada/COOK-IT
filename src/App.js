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
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="singleprofile" element={<SingleProfile />} />
          <Route path="notfound" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
