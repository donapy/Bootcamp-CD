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
      <Link style={mystyle} to="/products">
        List of Products
      </Link>
      <Link to="/newproduct">Add Product</Link>
    </div>
  );
};

export default Navbar;
