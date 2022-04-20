import React from "react";
import logo from "../../asset/melodico.png";
import "./profile.css";
import { useParams } from "react-router-dom"


function Profile() {

  
   return (
    <div className="container">
      <div className="infoBox">
        <img src="asset/icon/melodico-logo.png"></img>
      <h1>Profile</h1>
      <h2>Nama</h2>
      
      <h2>Email</h2>

      <h2>Role</h2>

      <h2>Password</h2>

      

      </div>
    </div>
  ); 
}

export default Profile;
