import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homePage/home";
import Project1 from "./Project1/project1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
      </Routes>
    </Router>
  );
}

export default App;
