export const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes("appointment")) {
      return "You can schedule an appointment by clicking here: [Appointment page].";
    } else if (lowerCaseMessage.includes("symptoms")) {
      return "Can you describe your symptoms? I'll try to assist or guide you further.";
    } else if (lowerCaseMessage.includes("emergency")) {
      return "If this is a medical emergency, please call your local emergency number immediately.";
    } else if (
      lowerCaseMessage.includes("medicine") ||
      lowerCaseMessage.includes("medication")
    ) {
      return "For medicine-related queries, please provide the name of the medication for more details.";
    } else if (
      lowerCaseMessage.includes("hours") ||
      lowerCaseMessage.includes("timing")
    ) {
      return "Our clinic operates from 9 AM to 7 PM on weekdays and 10 AM to 4 PM on weekends.";
    } else if (lowerCaseMessage.includes("insurance")) {
      return "We accept most major insurance providers. Share your details, and we'll assist you further.";
    } else if (lowerCaseMessage.includes("thank you")) {
      return "You're welcome! Let me know if there's anything else I can help with.";
    } else if (lowerCaseMessage.includes("contact")) {
      return "You can reach us at (555) 123-4567 or email us at support@healthcare.com.";
    } else if (lowerCaseMessage.includes("location")) {
      return "Our clinic is located at 123 Health Street, Wellness City.";
    } else if (lowerCaseMessage.includes("diet")) {
      return "A balanced diet is key to good health. Would you like tips on a specific type of diet?";
    } else if (lowerCaseMessage.includes("exercise")) {
      return "Regular exercise is important. Aim for at least 30 minutes a day. Need specific recommendations?";
    } else if (
      lowerCaseMessage.includes("vaccination") ||
      lowerCaseMessage.includes("vaccine")
    ) {
      return "Vaccines are essential for preventing diseases. Are you looking for information on a specific vaccine?";
    } else if (lowerCaseMessage.includes("mental health")) {
      return "Mental health matters. Please share your concerns, and I can guide you to appropriate resources or professionals.";
    } else if (lowerCaseMessage.includes("skin care")) {
      return "For skin care, keep your routine simple: cleanse, moisturize, and protect with sunscreen. Need specific advice?";
    } else if (lowerCaseMessage.includes("covid")) {
      return "For COVID-19-related information, follow official health guidelines or consult with a healthcare provider.";
    } else if (lowerCaseMessage.includes("pregnancy")) {
      return "Pregnancy requires special care. Would you like information about prenatal vitamins, diet, or common symptoms?";
    } else if (lowerCaseMessage.includes("headache")) {
      return "Headaches can result from stress, dehydration, or other factors. Stay hydrated and rest. If severe, consult a doctor.";
    } else if (
      lowerCaseMessage.includes("cold") ||
      lowerCaseMessage.includes("flu")
    ) {
      return "For colds and flu, rest and hydration are important. If symptoms persist, consider a medical consultation.";
    } else if (lowerCaseMessage.includes("nutrition")) {
      return "Good nutrition is vital for health. Are you interested in weight management, meal planning, or specific dietary needs?";
    } else if (lowerCaseMessage.includes("heart health")) {
      return "Heart health involves regular exercise, a balanced diet, and avoiding smoking. Do you need tips or medical advice?";
    } else if (lowerCaseMessage.includes("child health")) {
      return "For child health concerns, please provide details. I'll guide you to relevant resources or specialists.";
    } else if (lowerCaseMessage.includes("fatigue")) {
      return "Fatigue can stem from stress, poor sleep, or medical conditions. Would you like tips to manage it?";
    } else if (
      lowerCaseMessage.includes("depression") ||
      lowerCaseMessage.includes("anxiety")
    ) {
      return "Mental health is important. If you're feeling low, consider speaking with a therapist or counselor.";
    } else if (lowerCaseMessage.includes("weight gain")) {
      return "For healthy weight gain, focus on nutrient-rich foods and strength training. Need a detailed plan?";
    } else if (lowerCaseMessage.includes("weight loss")) {
      return "Weight loss requires balanced eating and regular exercise. Would you like tips or a sample diet plan?";
    } else if (lowerCaseMessage.includes("arthritis")) {
      return "Arthritis can be managed with medication, exercise, and diet. Would you like to explore treatment options?";
    } else if (lowerCaseMessage.includes("asthma")) {
      return "Asthma management includes avoiding triggers and using prescribed inhalers. Need help with symptoms or medication?";
    } else if (lowerCaseMessage.includes("sleep")) {
      return "Good sleep hygiene is essential. Maintain a consistent schedule and avoid screens before bed. Need more tips?";
    } else if (lowerCaseMessage.includes("vaccination card")) {
      return "Vaccination cards are issued post-vaccine. If lost, contact your vaccine provider for a replacement.";
    } else if (lowerCaseMessage.includes("travel health")) {
      return "Traveling? Ensure vaccines are up-to-date and pack essential medications. Need country-specific advice?";
    }
  
    return "I'm here to assist with your healthcare questions. Could you provide more details?";
  };
  