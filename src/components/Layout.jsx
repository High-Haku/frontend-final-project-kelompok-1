import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column w-100">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
