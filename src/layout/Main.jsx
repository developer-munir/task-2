import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";

const Main = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
