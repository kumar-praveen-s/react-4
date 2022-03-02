import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import StudentDetails from "./components/StudentDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./components/index.css";
import StudentDesc from "./components/student-desc";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/studentdesc/:id" element={<StudentDesc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
