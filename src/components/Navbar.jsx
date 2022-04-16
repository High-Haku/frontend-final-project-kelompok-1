import React from "react";

function Navbar() {
  return (
    <nav
      className="bg-warning"
      style={{
        height: "50px",
        position: "fixed",
        right: 0,
        left: "200px",
        zIndex: 10,
      }}
    >
      This is Navbar
    </nav>
  );
}

export default Navbar;
