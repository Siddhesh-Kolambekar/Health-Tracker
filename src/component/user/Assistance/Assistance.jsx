import { useState } from "react";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";

const Assistance = () => {
  const [view, setView] = useState("chatbot"); // Manage view state (either "chatbot" or "faq")

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Healthcare Assistance Platform</h1>
        <div style={styles.navButtons}>
          <button
            style={{
              ...styles.button,
              backgroundColor: view === "chatbot" ? "#007bff" : "#d1d1d1",
            }}
            onClick={() => setView("chatbot")}
          >
            Chatbot
          </button>
          <button
            style={{
              ...styles.button,
              backgroundColor: view === "faq" ? "#007bff" : "#d1d1d1",
            }}
            onClick={() => setView("faq")}
          >
            FAQ
          </button>
        </div>
      </header>
      <main style={styles.main}>
        {view === "chatbot" ? <Chatbot /> : <FAQ />}
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    width:"80%" ,
    display:"block",
    justifySelf:"center",
    overflowY:"auto",
    scrollbarWidth:"none",
    maxHeight:"600px",
    padding:"10px",
    margin:"10px"
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "20px 0",
    marginBottom: "20px",

  },
  navButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  main: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
};

export default Assistance;
