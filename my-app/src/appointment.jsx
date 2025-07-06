import React, { useState } from "react";
function Appointment() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="appointment-container">
      <h1>Book Your Appointment</h1>
      {submitted ? (
        <div>
          <h2>Appointment Confirmed!</h2>
          <p>Name: {form.name}</p>
          <p>Date: {form.date}</p>
          <p>Time: {form.time}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <br /><br />
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>
          <br /><br />
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </label>
          <br /><br />
          <button type="submit">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
}
export default Appointment;