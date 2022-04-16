import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asset/melodico.png";
import "./login.css";
import { userLogin } from "../../redux/actions/register&login.action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  useEffect(() => {
    const regex = /(?<=token=).*$/g;
    const loginToken = regex.exec(document.cookie);

    // check if user is login
    if (loginToken) navigate("/");
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-5 col-kiri" style={{ height: "90vh" }}>
            <img
              className="content-img rounded-3"
              src="https://images.unsplash.com/photo-1516057747705-0609711c1b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2lrJTIwYmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="col-lg-6 offset-lg-1 col-xs-12 offset-xs-0">
            <div>
              <img className="logo-login rounded-3" src={logo} alt="" />
              <p className="title-login text-center">
                Login gratis untuk mulai mendengarkan
              </p>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="content-login">
                <label className="d-block mt-3">Email :</label>
                <input
                  type="email"
                  className="w-100 rounded-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="d-block mt-3">Password :</label>
                <input
                  type="password"
                  className="w-100 rounded-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="mt-2">
                  <button type="submit" className="btn-login rounded-3">
                    Login
                  </button>
                  <p className="d-inline ms-2">
                    Tidak punya akun?{" "}
                    <Link to="/register">
                      <b>Register</b>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
