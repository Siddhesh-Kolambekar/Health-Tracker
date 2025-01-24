import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../common/loading";

const MedicationList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://health-tracker-84ea4-default-rtdb.firebaseio.com/MEDCARD.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMedicines(formattedData);
      } catch (error) {
        console.error("Error fetching medicines:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
      padding: "20px",
      position: "relative",
      zIndex: 1,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      padding: "20px",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.5rem",
      color: "#333333",
      marginBottom: "15px",
      textAlign: "center",
      fontWeight: "bold",
    },
    cardContent: {
      fontSize: "1rem",
      color: "#555555",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
    },
    button: {
      width: "48%",
      height: "45px",
      border: "none",
      borderRadius: "25px",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.2s ease, transform 0.2s ease",
    },
    videoBackground: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      zIndex: -1,
    },
  };

  const handleRenewalClick = () => {
    navigate("/renewal");
  };
  const handleRemarkClick = () => {
    navigate("/renewal");
  };
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "auto" }}>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <video style={styles.videoBackground} autoPlay loop muted playsInline>
            <source src="/homepage-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div style={styles.container}>
            {medicines.length > 0 ? (
              medicines.map((medicine) => (
                <div
                  key={medicine.id}
                  style={styles.card}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h2 style={styles.cardTitle}>{medicine.name}</h2>
                  <div style={styles.cardContent}>
                    <h4>Dosage: {medicine.dosage}</h4>
                    <h3>Frequency: {medicine.frequency}</h3>
                    <h3>End Date: {medicine.endDate || "N/A"}</h3>
                    <h3>Notes: {medicine.notes || "None"}</h3>
                    <h3>Taken: {medicine.taken ? "Yes" : "No"}</h3>
                  </div>
                  <div style={styles.buttonContainer}>
                    <button
                      style={styles.button}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                      onClick={handleRenewalClick}
                    >
                      Request Renewal
                    </button>
                    <button
                      style={styles.button}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                      onClick={handleRemarkClick}
                    >
                      Mark as Done
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
                No medications added yet.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MedicationList;
