import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  async function logout() {
    await axios
      .delete("https://melodico.herokuapp.com/logout")
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <nav className="w-80" style={{ height: "50px", backgroundColor: "1F1B24" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="rounded-3 mt-2"
              style={{
                width: "50%",
                outline: "none",
                height: "35px",
                border: "none",
              }}
            />
            <div style={{ width: "250px", display: "inline", float: "right" }}>
              <Link
                to="/upgrade"
                className="bg-dark me-2 rounded-3"
                style={{ border: "none", height: "35px", color: "white" }}
              >
                Upgrade Account
              </Link>

              <Dropdown
                style={{
                  width: "40px",
                  heigth: "40px",
                  borderRadius: "50%",
                  display: "inline",
                }}
              >
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  style={{ heigth: "40px", border: "none", outline: "none" }}
                >
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      boxSizing: "border-box",
                    }}
                    src="https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Akun</Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Keluar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
