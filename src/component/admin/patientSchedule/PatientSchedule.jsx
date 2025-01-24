import { useState } from "react";

const PatientSchedule = ({ onMedicineAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    endDate: "",
    notes: "",
    taken: false,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://health-tracker-4649d-default-rtdb.firebaseio.com/MEDCARD.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), 
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add medication");
      }

      const data = await response.json();
      onMedicineAdded(formData); 
      setFormData({
        name: "",
        dosage: "",
        frequency: "",
        endDate: "",
        notes: "",
        taken: false,
      }); 
    } catch (error) {
      console.error("Error adding medication:", error);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        backgroundPosition: "center",
        backgroundImage: "url(./schback2.jpg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        alignContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          width: "35%",
          fontSize: "25px", 
          height: "90%", 
          padding: "2%",
          borderRadius: "5%",
          rowGap: "1%",
          fontFamily: "monospace",
          justifySelf: "center",
          alignSelf: "center",
          backgroundColor: "rgba(0, 0, 255, 0.1)", 
        }}
      >
        <label htmlFor="name">Name: </label>
        <textarea
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ fontSize: "25px", height: "30px" }} 
        />
        <label htmlFor="dosage">Dosage: </label>
        <textarea
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          style={{ fontSize: "25px", height: "30px" }}
        />
        <label htmlFor="frequency">Frequency: </label>
        <textarea
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          style={{ fontSize: "25px", height: "30px" }}
        />
        <label htmlFor="endDate">End Date: </label>
        <textarea
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          style={{ fontSize: "25px", height: "30px" }}
        />
        <label htmlFor="notes">Notes: </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          style={{ fontSize: "20px", height: "30px" }}
        />
        <label htmlFor="taken">Taken: </label>
        <textarea
          name="taken"
          value={formData.taken}
          onChange={handleChange}
          style={{ fontSize: "20px", height: "30px" }}
        />
        <input
          type="submit"
          value="Submit"
          style={{
            height: "50px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "15px",
            fontSize: "100%",
            marginTop: "10px", 
          }}
        />
      </form>
    </div>
  );
};

export default PatientSchedule;
