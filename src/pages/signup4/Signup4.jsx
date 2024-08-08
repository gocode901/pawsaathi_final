import React from "react";
import "./Signup4.css";
import Location from "../../Components/signup4/Location.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

function Address() {
  return (
    <div className="Map-Banner">
      <Navbar></Navbar>

      <div className="locataion-address">
        <div className="map-img"></div>
        <div className="pet-address">
          <Location></Location>
        </div>
      </div>
    </div>
  );
}

export default Address;
