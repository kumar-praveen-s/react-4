import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import StudentDetails from "./components/StudentDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./components/index.css";
import StudentDescCreate from "./components/student-desc-create";
import StudentDescEdit from "./components/student-desc-edit";
import { StudentProvider } from "./components/context";

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/studentdesc" element={<StudentDescEdit />} />
          <Route path="/studentdesc/:id" element={<StudentDescEdit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;
