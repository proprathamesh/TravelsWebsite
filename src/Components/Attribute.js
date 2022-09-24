import React, { useState } from "react";
import car from "./car-front2.svg";
import house from "./house2.svg";
import person from "./person-check2.svg";
import carfill from "./car-front-fill2.svg";
import housefill from "./house-fill2.svg";
import personfill from "./person-check-fill2.svg";
import "./Attribute.css";

export default function Attribute() {
  const [check, setcheck] = useState({
    carpic: car,
    personpic: person,
    housepic: house,
  });
  const inside1 = () => {
    setcheck({
      personpic: personfill,
      carpic: car,
      housepic: house,
    });
  };
  const outside1 = () => {
    setcheck({
      personpic: person,
      carpic: car,
      housepic: house,
    });
  };

  const inside2 = () => {
    setcheck({
      carpic: carfill,
      personpic: person,
      housepic: house,
    });
  };
  const outside2 = () => {
    setcheck({
      carpic: car,
      personpic: person,
      housepic: house,
    });
  };

  const inside3 = () => {
    setcheck({
      housepic: housefill,
      carpic: car,
      personpic: person,
    });
  };
  const outside3 = () => {
    setcheck({
      housepic: house,
      carpic: car,
      personpic: person,
    });
  };
  return (
    <div>
      <div className="heading font-monospace">Why Choose Us?</div>
      <div className="attributes">
        <div className="at t1" onMouseOver={inside1} onMouseOut={outside1}>
          <img className="at1" src={check.personpic} alt="" />
          <h3 className="at2">Verified Drivers</h3>
          <hr className="at3" />
          <hr className="at4" />
          <p className="at5">
            Hire verified, professional drivers for hassle-free commutes,
            running errands and safe after-party drops on hourly basis
          </p>
        </div>
        <div className="at t2" onMouseOver={inside2} onMouseOut={outside2}>
          <img src={check.carpic} className="at1" alt="" />
          <h3 className="at2">Well Maintained Cars</h3>
          <hr className="at3" />
          <hr className="at4" />
          <p className="at5">
            Regular service & maintenance; Inspected before each trip; vehicle
            at your doorstep
          </p>
        </div>
        <div className="at t3" onMouseOver={inside3} onMouseOut={outside3}>
          <img src={check.housepic} className="at1" alt="" />
          <h3 className="at2">Doorstep Pickup & Drop</h3>
          <hr className="at3" />
          <hr className="at4" />
          <p className="at5">
            On-time doorstep service, at your preferred location and time
          </p>
        </div>
      </div>
    </div>
  );
}
