import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Components ///
import Navbar from "./Navbar";
import Player from "./Player";
import Sidebar from "./Sidebar";

// Style //
import "./layout.css";

function Layout() {
  const [userLogin, setUserLogin] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const regex = /(?<=token=).*$/g;
    const loginToken = regex.exec(document.cookie);

    // check if user is login
    if (loginToken) {
      setUserLogin(jwtDecode(loginToken[0]));
    } else {
      navigate("/login");
    }
  }, []);

  //////////////////////////////////////
  return (
    <>
      <div className="d-flex" style={{ position: "relative" }}>
        <Sidebar />
        <div className="w-100">
          <Navbar />
          <div
            className="px-5 py-4"
            style={{
              margin: "50px 0 50px 200px",
              position: "relative",
            }}
          >
            <Outlet />
          </div>
        </div>
        <Player />
      </div>
    </>
  );
}

export default Layout;
