import { useState, useEffect } from "react";

const Doctors = () => {
  const [docs, setDocs] = useState([]);
  
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://health-tracker-84ea4-default-rtdb.firebaseio.com/Doctorlist.json');
        const data = await response.json();
        const doctorsArray = Object.values(data);
        setDocs(doctorsArray);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "30px", width: "100%", justifyContent: "center", backgroundImage: "url('./nav1.png')", overflow: "auto" }}>
      {docs.map((user, index) => (
        <div key={index} className="user-card" style={{ width: "50vh", height: "700px", display: "grid", justifyContent: "center", alignContent: "center", rowGap: "20px", backgroundImage: "url('./card3.jpg')", backgroundSize: "cover", borderRadius: "20px" }}>
          <img src={user.image} alt="" style={{ width: "300px", height: "300px", borderRadius: "250px" }} />
          <h1 style={{ fontFamily: "sans-serif" }}>{user.name}</h1>
          <h2 style={{ fontFamily: "sans-serif" }}>Age: {user.age}</h2>
          <h2 style={{ fontFamily: "sans-serif" }}>Specialty: {user.specialty}</h2>
          <h2 style={{ fontFamily: "sans-serif" }}>Available: {user.available === true ? "Yes" : "No"}</h2>
          <h2 style={{ fontFamily: "sans-serif" }}>Slots: {user.slots}</h2>
          <h2 style={{ fontFamily: "sans-serif" }}>Status: {user.status}</h2>
        </div>
      ))}
    </div>
  );
}

export default Doctors;
