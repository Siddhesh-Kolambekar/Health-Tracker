import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Renewal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    prescription: "",
    disease: "",
    time: "",
  });

  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    setStatus("Pending...");
    setTimeout(() => {
      setStatus("Approved");
      setShowForm(true);
      setIsOpen(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate("/toggle");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://health-tracker-84ea4-default-rtdb.firebaseio.com/Renewal.json",
        formData
      );
      alert("The request has been submitted.");
      navigate("/toggle");
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Failed to submit the request. Please try again.");
    }
  };

  return (
    <div className="renewal-container">
      <button
        className="new-request-btn"
        onClick={handleClick}
      >
        Request New Prescription
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-text">
              Are you sure you want to request a new prescription?
            </h2>
            <div className="modal-buttons">
              <button className="btn-yes" onClick={handleConfirm}>
                YES
              </button>
              <button className="btn-no" onClick={handleClose}>
                NO
              </button>
            </div>
          </div>
        </div>
      )}

      {status && <div className="status">{`Status: ${status}`}</div>}

      {showForm && (
        <div className="form-container">
          <h2 className="form-title">Patient Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            
            <input
              type="text"
              name="disease"
              placeholder="Disease"
              value={formData.disease}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .renewal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
          font-family: Arial, sans-serif;
        }

        .new-request-btn {
          padding: 15px 30px;
          font-size: 18px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .new-request-btn:hover {
          background-color: #45a049;
          transform: scale(1.05);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 450px;
          max-width: 90%;
        }

        .modal-text {
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: bold;
        }

        .modal-buttons {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .btn-yes,
        .btn-no {
          padding: 12px 25px;
          font-size: 16px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          color: white;
          transition: background-color 0.3s, transform 0.2s;
        }

        .btn-yes {
          background-color: #28a745;
        }

        .btn-no {
          background-color: #dc3545;
        }

        .btn-yes:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        .btn-no:hover {
          background-color: #c82333;
          transform: scale(1.05);
        }

        .status {
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          max-width: 500px;
        }

        .form-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .form-input {
          margin-bottom: 20px;
          padding: 12px 20px;
          font-size: 16px;
          width: 100%;
          border-radius: 8px;
          border: 1px solid #ddd;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }

        .form-input:focus {
          box-shadow: 0 3px 10px rgba(0, 123, 255, 0.3);
        }

        .form-button {
          padding: 15px 30px;
          font-size: 18px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .form-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Renewal;
