import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">Workout Buddy</Link>
        <nav>
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
