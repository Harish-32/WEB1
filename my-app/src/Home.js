import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Home() {
  return (
    <div className="container">
            <h1>DOCTORS-APPOINTMENT</h1>
      <img src="img1.jpg" alt="doctor" width={600} height={500} />

      <p>HERE YOU CAN CONTACT WITH DOCTORS</p>
      <div className="doctor-list">
      <div className="doctor-1">
        <h2>Dr. Ayesha</h2>
        <b>Specialization: Cardiology</b>
        <br /><br />
        <Link to="/appointment">
          <button>BOOK APPOINTMENT</button>
        </Link>
      </div>
      <div className="doctor-2">
        <h2>Dr. Bhanu Pramod</h2>
        <b>Specialization: Neurology</b>
        <br /><br />
        <Link to="/appointment">
          <button>BOOK APPOINTMENT</button>
        </Link>
      </div>
      <div className="doctor-3">
        <h2>Dr. Cathrin</h2>
        <b>Specialization: Ophthalmology</b>
        <br /><br />
        <Link to="/appointment">
          <button>BOOK APPOINTMENT</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
export default Home;