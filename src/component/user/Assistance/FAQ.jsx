import { useState, useMemo } from "react";

const FAQ = () => {
  const [question, setQuestion] = useState(null);
  const [searchQuery, setQuery] = useState("");

  const FAQ_Question = [
    {
      Question: "What is this chatbot service?",
      Answer:
        "This chatbot provides healthcare assistance by answering medical queries, scheduling appointments, and offering information on various health topics.",
    },
    {
      Question: "How do I schedule an appointment?",
      Answer:
        "You can schedule an appointment by clicking on the 'Appointment Page' link provided in the chatbot.",
    },
    {
      Question: "What should I do in case of a medical emergency?",
      Answer:
        "If you are experiencing a medical emergency, please call the local emergency number immediately.",
    },
    {
      Question: "How can I get information about medications?",
      Answer:
        "For information on medicines, please provide the name of the medication, and the chatbot will assist you with its uses and precautions.",
    },
    {
      Question: "How do I describe my symptoms to get assistance?",
      Answer:
        "To assist you in the best possible way, the chatbot will ask you a series of questions about your symptoms, including the nature of the discomfort, the duration, and any other relevant details that could help diagnose the issue. It’s important to be as specific as possible so the chatbot can provide more accurate information.",
    },
    {
      Question: "Is this service available 24/7?",
      Answer:
        "Yes, our chatbot service is available 24/7 to provide healthcare assistance. Whether it’s answering questions about symptoms, medications, or clinic hours, the chatbot can assist at any time of day.",
    },
    {
      Question: "What are your clinic hours?",
      Answer:
        "Our clinic is open from 9 AM to 7 PM on weekdays and 10 AM to 4 PM on weekends. You can contact us during these hours for appointments or medical advice.",
    },
    {
      Question: "How can I contact a healthcare provider?",
      Answer:
        "You can contact a healthcare provider by scheduling an appointment through the chatbot or calling our clinic's main phone number. For immediate concerns, our chatbot can also provide basic assistance.",
    },
    {
      Question: "Do you accept insurance?",
      Answer:
        "Yes, we accept most major insurance providers. Please provide your insurance details, and we can verify coverage for you.",
    },
    {
      Question: "What should I bring to my appointment?",
      Answer:
        "When you come for your appointment, please bring your ID, insurance information, and any medical records that may be relevant to your visit.",
    },
    {
      Question: "What is the cost of a consultation?",
      Answer:
        "The cost of a consultation varies depending on the type of service and whether you have insurance coverage. For an estimate, please contact us or refer to the 'Fees' section on our website.",
    },
    {
      Question: "Can I reschedule my appointment?",
      Answer:
        "Yes, you can reschedule your appointment by contacting us through the chatbot or calling our clinic. We recommend rescheduling as early as possible to avoid any last-minute issues.",
    },
    {
      Question: "How do I prepare for a telemedicine consultation?",
      Answer:
        "For a telemedicine consultation, ensure that you have a stable internet connection, a device with a camera and microphone, and a quiet, well-lit environment. You'll receive a link to join the virtual appointment once it's confirmed.",
    },
    {
      Question: "What is your cancellation policy?",
      Answer:
        "We ask that you cancel or reschedule your appointment at least 24 hours in advance to avoid a cancellation fee. Please contact us through the chatbot or our clinic's phone number for cancellations.",
    },
    {
      Question: "Do you offer lab tests at your clinic?",
      Answer:
        "Yes, we offer various lab tests at our clinic. You can schedule a lab test appointment through the chatbot or inquire about specific tests through our staff.",
    },
    {
      Question: "Can I get a prescription refill through the chatbot?",
      Answer:
        "For prescription refills, the chatbot will prompt you to provide the medication details. If applicable, we can assist you in reaching out to a healthcare provider for approval and refill instructions.",
    },
    {
      Question: "How do I provide feedback about my experience?",
      Answer:
        "We value your feedback! You can provide feedback about your experience by contacting us through the chatbot, filling out a survey, or emailing our support team.",
    },
  ];

  // Use useMemo for optimized filtered FAQs
  const filteredFaqs = useMemo(
    () =>
      FAQ_Question.filter((faq) =>
        faq.Question.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const toggleQuestion = (index) => {
    setQuestion(question === index ? null : index);
    speak(filteredFaqs[index].Question, filteredFaqs[index].Answer);
  };

  const speak = (questionText, answerText) => {
    const speech = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) =>
        voice.name.includes("Female") ||
        voice.name.includes("Google UK English Female")
    );
    if (femaleVoice) {
      speech.voice = femaleVoice;
    }
    speech.lang = "en-IN";
    speech.text = questionText;
    window.speechSynthesis.speak(speech);
    speech.text = answerText;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Frequently Asked Questions</h1>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchQuery}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.faqContainer}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div
                onClick={() => toggleQuestion(index)}
                style={styles.question}
              >
                {faq.Question}
              </div>
              {question === index && (
                <div style={styles.answer}>{faq.Answer}</div>
              )}
            </div>
          ))
        ) : (
          <div style={styles.noResults}>No results found</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f8ff",
    borderRadius: "8px",
    maxWidth: "800px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    maxHeight: "580px", // Adjust to your desired scrollable height
  },
  header: {
    textAlign: "center",
    color: "#2c3e50",
    fontSize: "24px",
    marginBottom: "20px",
  },
  searchInput: {
    width: "100%",
    padding: "12px",
    marginBottom: "30px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
  },
  faqContainer: {
    marginTop: "20px",
    overflowY: "auto",
    flexGrow: 1, // Makes the container grow to fill remaining space
  },
  faqItem: {
    marginBottom: "20px",
    paddingBottom: "10px",
    borderBottom: "2px solid #ecf0f1",
  },
  question: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#3498db",
    cursor: "pointer",
    transition: "color 0.3s",
    padding: "8px 0",
    textAlign: "left",
  },
  answer: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#34495e",
    paddingLeft: "10px",
    textAlign: "left",
    lineHeight: "1.5",
    backgroundColor: "#ecf0f1",
    padding: "10px",
    borderRadius: "6px",
  },
  noResults: {
    textAlign: "center",
    color: "#e74c3c",
    fontSize: "16px",
    padding: "20px",
  },
};

export default FAQ;
