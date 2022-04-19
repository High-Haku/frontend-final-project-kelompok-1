import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS //
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Layout from "./components/Layout";
import NotFound from "./pages/404/NotFound";
import Upgrade from "./pages/upgrade/Upgrade";
import Browse from "./pages/browse/Browse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
