import React from "react";
import logo from "../../asset/melodico.png";
import "./login.css";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-5 col-kiri" style={{height:"90vh"}}>
            <img className="content-img rounded-3" src="https://images.unsplash.com/photo-1516057747705-0609711c1b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2lrJTIwYmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="col-lg-6 offset-lg-1 col-xs-12 offset-xs-0">
            <div>
              <img className="logo-login rounded-3" src={logo} alt="" />
              <p className="title-login text-center">
                Login gratis unutk mulai mendengarkan
              </p>
            </div>

            <div className="content-login">
              <label className="d-block mt-3">Email :</label>
              <input type="email" className="w-100 rounded-3" />
              <label className="d-block mt-3">Password :</label>
              <input type="password" className="w-100 rounded-3" />
              <div className="mt-2">
                <button className="btn-login rounded-3">Register</button>
                <p className="d-inline ms-2">
                  Tidak punya akun? <b>Register</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
