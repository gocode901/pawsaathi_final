import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup1 from "./pages/signup1/Signup1.jsx";
import Signup2 from "./pages/signup2/Signup2.jsx";
import Signup3 from "./pages/signup3/Signup3.jsx";
import Signup4 from "./pages/signup4/Signup4.jsx";
import Signup5 from "./pages/signup5/Signup5.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup1" element={<Signup1 />} />
          <Route path="/Signup2" element={<Signup2 />} />
          <Route path="/Signup3" element={<Signup3 />} />
          <Route path="/Signup4" element={<Signup4 />} />
          <Route path="/Signup5" element={<Signup5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
