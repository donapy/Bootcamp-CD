import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const mystyle = {
    paddingRight: "15px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <Link style={mystyle} to="/">
        Home
      </Link>
      <Link style={mystyle} to="/authors">
        List of Author
      </Link>
      <Link to="/newauthor">Add Author</Link>
    </div>
  );
};

export default Navbar;
