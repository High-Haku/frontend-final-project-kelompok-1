import React from "react";
import logo from "../../asset/melodico.png";
import './register.css'

function Register() {
  return (
    <div>
      <div className="container">
        <div className="mt-4">
          <img className="logo-register rounded-3" src={logo} alt="" />
          <p className="title-register text-center">Daftar gratis unutk mulai mendengarkan</p>
        </div>

        <div className="content-form mb-5">
          <form>
            <label className="d-block">Name :</label>
            <input type="text" className="w-100 rounded-3" />
            <label className="d-block mt-3">Date of birth :</label>
            <input type="date" className="w-100 rounded-3" />
            <label className="d-block mt-3">Gender :</label>
            <select className="w-100 rounded-3">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label className="d-block mt-3">Email :</label>
            <input type="email" className="w-100 rounded-3" />
            <label className="d-block mt-3">Password :</label>
            <input type="password" className="w-100 rounded-3" />

            <div className="mt-2">
            <button className="btn-register rounded-3">Register</button>
            <p className="d-inline ms-2">Sudah punya akun? <b>Login</b></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
