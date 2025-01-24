import { useEffect, useState } from "react";
import axios from "axios";

const Toggle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://health-tracker-4649d-default-rtdb.firebaseio.com/Renewal.json"
        );
        const fetchedData = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="toggle-container">
      <h1 className="title">Submitted Requests</h1>
      <div className="data-list">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <h3>Patient Name: {item.patientName}</h3>
            <p>Age: {item.age}</p>
            <p>Prescription: {item.prescription}</p>
            <p>Disease: {item.disease}</p>
            <p>Time: {item.time}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .toggle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #007bff;
        }

        .data-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 80%;
          max-width: 600px;
        }

        .data-item {
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
        }

        .data-item h3 {
          margin-bottom: 10px;
          color: #4caf50;
        }

        .data-item p {
          margin: 5px 0;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Toggle;
