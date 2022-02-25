import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SingleProfile from "./pages/SingleProfile";
import NotFound from "./pages/NotFound";
import RecepieForm from "./pages/RecepieForm";
import Newsfeed from "./components/Newsfeed";
import PopUp from "./components/PopUp";
// import "./App.css";
//  test
function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Routes>
            {/* Route:is the component user needs to see when they will navigate to that path. */}
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/recepie" exact element={<RecepieForm />} />
            <Route path="/about" exact element={<About />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/popup" element={<PopUp />} />
            <Route path="/user/:singleprofile" element={<SingleProfile />} />
            {/* <Redirect to="/notfound" /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
