/* eslint-disable react/no-unknown-property */

import medData from "../../../../public/medicationCard.json";

const Schedule = () => {
  const medicines = medData;

  return (
    <div className="schedule-container">
      <div style={{width:"80%",display:"block",justifySelf:"center",overflowY:"auto",scrollbarWidth:"none",maxHeight:"580px",padding:"10px",margin:"10px"}}>
        <table className="medicine-table">
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>End Day</th>
              <th>Notes</th>
              <th>Taken</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med) => (
              med.taken==false&&
              <tr key={med.id}>
                <td>{med.name}</td>
                <td>{med.dosage}</td>
                <td>{med.frequency}</td>
                <td>{med.endDate || "N/A"}</td>
                <td>{med.notes || "No notes"}</td>
                <td>{med.taken ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`

        .medicine-table {
          width: 100%;
          min-width: 600px; /* Ensures the table stretches horizontally and allows scrolling */
          border-collapse: separate;
          border-spacing: 0;
          margin-bottom: 20px;
        }

        .medicine-table thead tr {
          background-color: #f39c12;
          color: #fff;
        }

        .medicine-table th,
        .medicine-table td {
          padding: 15px;
          text-align: center;
        }

        .medicine-table th {
          font-weight: bold;
        }

        .medicine-table tbody tr:nth-child(odd) {
          background-color: #ffecd2;
        }

        .medicine-table tbody tr:nth-child(even) {
          background-color: #ffe0b2;
        }

        .medicine-table tbody tr:hover {
          background-color: #f8c471;
          color: #000;
          cursor: pointer;
        }

        .medicine-table td {
          font-size: 14px;
          color: #333;
        }

        @media (max-width: 768px) {
          .medicine-table {
            font-size: 12px;
          }

          .medicine-table th,
          .medicine-table td {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Schedule;
