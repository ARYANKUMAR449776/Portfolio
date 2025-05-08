import React, { useState } from "react";
import "./Navbar.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </div>

      <div className={`fullscreen-menu ${open ? "show" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Models</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
