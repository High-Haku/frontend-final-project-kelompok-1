import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../redux/actions/spotifyAccess.action";

// Components ///
import Navbar from "./Navbar";
import Player from "./Player";
import Sidebar from "./Sidebar";
import loading from "../asset/loading.svg";

// Style //
import "./layout.css";

// Get Spotify Code //
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ba70ac6a4a564aa980ecfbbe38450255&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const code = new URLSearchParams(window.location.search).get("code");

function Layout() {
  const [userLogin, setUserLogin] = useState({});
  const navigate = useNavigate();

  // Get Spotify Access Token //
  const dispatch = useDispatch();
  const token = useSelector((state) => state.spotifyAccessReducer);

  // console.log(token);

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

  // check if have access to spotify api
  useEffect(() => {
    if (token.accessToken === "" && !code)
      return (window.location.href = AUTH_URL);
    else if (token.accessToken == "") dispatch(getToken(code));
  }, [code]);

  //////////////////////////////////////
  return (
    <>
      
        <div className="d-flex" style={{ position: "relative" }}>
          <Sidebar />
          <div
            className="d-flex flex-column w-100"
            style={{
              position: "absolute",
              zIndex: 10,
              backgroundColor: "#1f2127",
            }}
          >
            <Navbar />
            <div
              className="px-5 py-4"
              style={{
                margin: "50px 0 50px 200px",
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
