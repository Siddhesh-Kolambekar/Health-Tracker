import { useState, useEffect } from "react";
import { getBotResponse } from "./getBotResponse";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = () => {
    if (userInput.trim()) {
      const userMessage = { sender: "👲 User: ", text: userInput };
      const botMessage = {
        sender: "🤖 Bot: ",
        text: getBotResponse(userInput),
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);
      setUserInput("");
      speak(botMessage.text);
    }
  };

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const selectedVoice =
      voices.find(
        (voice) =>
          voice.lang === "en-IN" && voice.name.toLowerCase().includes("female")
      ) ||
      voices.find(
        (voice) =>
          voice.name.includes("Female") ||
          voice.name.includes("Google UK English Female")
      );

    if (selectedVoice) {
      speech.voice = selectedVoice;
    }

    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <div style={styles.chatHeader}>HealthCare Assistance</div>
        <div style={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: msg.sender.includes("User")
                  ? "flex-end"
                  : "flex-start",
                backgroundColor: msg.sender.includes("User")
                  ? "#f8d7da"
                  : "#d4edda",
              }}
            >
              <strong>{msg.sender}</strong>
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            onChange={(e) => setUserInput(e.target.value)}
            style={styles.input}
          />
          <button onClick={sendMessage} style={styles.button}>
            Send 🩺
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage:"url('https://www.shutterstock.com/image-photo/beautiful-young-female-medical-doctor-260nw-582891865.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: 0,
  },
  chatContainer: {
    width: "350px",
    height: "80vh",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },
  chatHeader: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    textAlign: "center",
    borderRadius: "8px 8px 0 0",
  },
  chatMessages: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  chatInput: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    marginLeft: "5px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    padding: "8px",
    borderRadius: "6px",
    maxWidth: "80%",
    wordWrap: "break-word",
  },
};

export default Chatbot;
