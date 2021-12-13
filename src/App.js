import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import SingleProfile from "./pages/SingleProfile";
import NotFound from "./pages/NotFound";
// import "./App.css";
//  test
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            {/* Route:is the component user needs to see when they will navigate to that path. */}
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/me" element={<Profile />} />
            <Route path="/user/:singleprofile" element={<SingleProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
