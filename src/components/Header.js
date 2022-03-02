import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/studentdetails">StudentDetails</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Header;
