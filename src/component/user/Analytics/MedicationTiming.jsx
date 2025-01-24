import axios from 'axios';
import { useEffect, useState } from 'react';

const MedicationTiming = () => {
    const [medicines, setMedicines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMedications = async () => {
            try {
                const response = await axios.get("https://health-tracker-84ea4-default-rtdb.firebaseio.com/medications.json");
                const fetchedMedications = Object.keys(response.data).map(key => ({
                    id: key,
                    ...response.data[key],
                    status: '' 
                }));
                setMedicines(fetchedMedications);
            } catch (error) {
                setError("Error fetching data",error);
            }
        };

        fetchMedications();
    }, []);

    const handleStatus = (id, newStatus) => {
        setMedicines(prevMedicines => prevMedicines.map(med =>
            med.id === id ? { ...med, status: newStatus } : med
        ));
    };

    const renderMedicationCard = (medicine) => (
        <div key={medicine.id} className="medication-card">
            <h3>{medicine.medicine_name}</h3>
            <p><strong>Quantity:</strong> {medicine.quantity}</p>
            <p><strong>Frequency:</strong> {medicine.frequency} times/day</p>
            <div>
                <h4>Time to Take:</h4>
                <ul>
                    {medicine.time_to_take.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
            <div className="buttons">
                <button className="taken-btn" onClick={() => handleStatus(medicine.id, "Taken")}>Taken</button>
                <button className="missed-btn" onClick={() => handleStatus(medicine.id, "Missed")}>Missed</button>
            </div>
            <p><strong>Status:</strong> {medicine.status || "Not Updated"}</p>
        </div>
    );

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container" style={{width:"100%",overflowY:"auto",scrollbarWidth:"none",maxHeight:"600px"}}>
            <h2 style={{fontSize:"50px"}}>Medication Timing</h2>
            <div className="medication-list">
                {medicines.map(renderMedicationCard)}
            </div>
            <style>{`
    .container {
        max-width: 1200px;
        margin: 50px auto;
        padding: 20px;
        font-family: 'Arial', sans-serif;
        background: linear-gradient(135deg, #f0f4f8, #d9e4ea);
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 40px;
        font-size: 48px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .medication-list {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0 20px;
    }

    .medication-card {
        padding: 40px; /* Increased padding */
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        max-width: 1000px; /* Increased max width */
        margin: 0 auto;
    }

    .medication-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
    }

    .medication-card h3 {
        font-size: 28px; /* Increased font size */
        margin-bottom: 15px;
        color: #34495e;
        font-weight: 600;
    }

    .medication-card p {
        margin: 10px 0;
        font-size: 20px; /* Increased font size */
        color: #7f8c8d;
        line-height: 1.6;
    }

    .medication-card h4 {
        font-size: 22px; /* Increased font size */
        margin-top: 20px;
        color: #2c3e50;
        font-weight: bold;
    }

    .medication-card ul {
        list-style-type: disc;
        margin: 10px 0;
        padding-left: 20px;
    }

    .medication-card ul li {
        padding: 8px 0;
        font-size: 18px;
        color: #7f8c8d;
    }

    .buttons button {
        margin-top: 20px;
        padding: 14px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        transition: all 0.3s;
        display: inline-block;
        width: 48%;
    }

    .taken-btn {
        background: linear-gradient(135deg, #2ecc71, #27ae60);
        color: white;
    }

    .taken-btn:hover {
        background: linear-gradient(135deg, #27ae60, #1e8449);
        transform: scale(1.05);
    }

    .missed-btn {
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        color: white;
    }

    .missed-btn:hover {
        background: linear-gradient(135deg, #c0392b, #a93226);
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        .medication-list {
            padding: 0 10px;
        }

        .medication-card {
            padding: 30px; /* Adjusted padding for smaller screens */
            width: 100%;
        }

        .buttons button {
            width: 100%;
            margin-bottom: 10px;
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 36px;
        }

        .buttons button {
            font-size: 16px;
        }
    }
`}</style>
        </div>
    );
};

export default MedicationTiming;
