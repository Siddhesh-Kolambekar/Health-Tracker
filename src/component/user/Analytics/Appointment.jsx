import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");
  const [appointmentFixed, setAppointmentFixed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://health-tracker-84ea4-default-rtdb.firebaseio.com/Appointment.json"
      )
      .then((response) => {
        const fetchedDoctors = response.data;
        const doctorArray = Object.keys(fetchedDoctors).map((id) => ({
          id,
          name: fetchedDoctors[id].name,
          specialty: fetchedDoctors[id].specialty,
          available: fetchedDoctors[id].available,
          reason: fetchedDoctors[id].reason,
          slots: fetchedDoctors[id].slots,
        }));
        setDoctors(doctorArray);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setStatus(
          "There was an error fetching doctor information. Please try again later."
        );
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(`Appointment successfully booked.`);
    setAppointmentFixed(true);
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>

      {!appointmentFixed ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="doctor">Select Doctor:</label>
            <select
              id="doctor"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            >
              <option value="">--Select Doctor--</option>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.name}>
                  {doc.name} ({doc.specialty})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Appointment Date:</label>
            <input
              type="date"
              id="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Appointment:</label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Appointment Time:</label>
            <select
              id="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            >
              <option value="">--Select Time--</option>
              {doctorName &&
                doctors
                  .find((doc) => doc.name === doctorName)
                  ?.slots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
            </select>
          </div>

          <button type="submit">Book Appointment</button>
        </form>
      ) : (
        <div className="appointment-card">
          <h3>Appointment Confirmed</h3>
          <p>
            <strong>Doctor:</strong> {doctorName}
          </p>
          <p>
            <strong>Date:</strong> {appointmentDate}
          </p>
          <p>
            <strong>Time:</strong> {appointmentTime}
          </p>
          <p>
            <strong>Reason:</strong> {reason}
          </p>
          <button onClick={() => navigate("/")}>Go to Dashboard</button>
        </div>
      )}

      {status && <p className="status-message">{status}</p>}

      <style>{`
        .appointment-container {
          padding: 20px;
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 30px auto;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2, h3 {
          text-align: center;
          color: #333;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          font-weight: bold;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        button {
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        .status-message {
          margin-top: 20px;
          font-size: 16px;
          color: #2e7d32;
          text-align: center;
        }

        .appointment-card {
          text-align: center;
          padding: 20px;
          background-color: #e8f5e9;
          border: 1px solid #4CAF50;
          border-radius: 8px;
        }

        .appointment-card p {
          font-size: 16px;
          margin: 10px 0;
        }

        .appointment-card button {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Appointment;
