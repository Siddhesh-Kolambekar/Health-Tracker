import medData from "../../../../public/medicationCard.json";

const PatientRenewal = () => {
  const medicines = medData;

  return (
    <div>
      <table
        style={{
          borderCollapse: "collapse",
          display: "block",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
        className="medicine-table"
        aria-label="Medication Schedule"
      >
        <thead>
          <tr style={{ backgroundColor: "#046DAA", color: "white" }}>
            <th style={{ border: "1px solid black", padding: "30px" }}>
              Medicine
            </th>
            <th style={{ border: "1px solid black", padding: "30px" }}>
              Dosage
            </th>
            <th style={{ border: "1px solid black", padding: "30px" }}>
              Frequency
            </th>
            <th style={{ border: "1px solid black", padding: "30px" }}>
              End Day
            </th>
            <th style={{ border: "1px solid black", padding: "30px" }}>
              Notes
            </th>
            <th style={{ border: "1px solid black", padding: "30px" }}>
              Taken
            </th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            med.request==true&&
            <tr
              key={med.id}
              style={
                med.id % 2 != 0
                  ? { backgroundColor: "#f2f2f2", textAlign: "center" }
                  : { backgroundColor: "white", textAlign: "center" }
              }
            >
              <td style={{ border: "1px solid black", padding: "30px" }}>
                {med.name}
              </td>
              <td style={{ border: "1px solid black", padding: "30px" }}>
                {med.dosage}
              </td>
              <td style={{ border: "1px solid black", padding: "30px" }}>
                {med.frequency}
              </td>
              <td style={{ border: "1px solid black", padding: "30px" }}>
                {med.endDate || "N/A"}
              </td>
              <td style={{ border: "1px solid black", padding: "30px" }}>
                {med.notes || "No notes"}
              </td>
              <td style={{ border: "1px solid black", padding: "30px" }}>
                {med.taken ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRenewal;