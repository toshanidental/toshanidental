import React from "react";
import { Outlet } from 'react-router-dom';
import Headercallus from "./Headercallus";
import Navbarlogo from "./Navbarlogo";

export default function Headernav() {


  return (
    <>
      <div className="w-100 fixed-top bg-white">
        <div className="container">
          <Headercallus />
          <Navbarlogo />
        </div>
      </div>
      <Outlet />
    </>
  );
}
