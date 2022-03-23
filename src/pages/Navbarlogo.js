import React from "react";
import dentallogo from "../../src/logo.png";
import { Link } from "react-router-dom";

export default function Navbarlogo() {
  return (
    <div className="pt-4 pb-4 d-flex align-items-center justify-content-between">
      <Link to="/home" className="logo d-block">
        <img className="w-100" src={dentallogo} alt="dentalLogo" />
      </Link>
      <div className="ps-5 w-100">
        <nav>
          <ul className="p-0 d-flex justify-content-end">
            <li className="pe-5 d-flex align-items-center">
              <Link to="/home">Home</Link>
            </li>
            <li className="pe-5 d-flex align-items-center">
              <Link to="/about">About Us</Link>
            </li>
            <li className="pe-5 d-flex align-items-center">
              <Link to="/services">Services</Link>
            </li>
            <li className="pe-5 d-flex align-items-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="d-flex align-items-center">
              <Link to="/bookappoint" className="ps-4 pe-4 pt-3 pb-3 appoint_shadow rounded-pill">Book Appointment</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
