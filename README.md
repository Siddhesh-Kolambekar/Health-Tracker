# Health Tracker

## Introduction
Health Tracker is a web application designed to help users monitor their health by tracking key metrics such as daily activities, calorie intake, and medical records. The application aims to provide users with insightful analytics and assist in maintaining a healthy lifestyle through smart AI assistance and doctor consultations.

## Project Type
Fullstack

## Deployed App
- **Live link:** [https://incredible-llama-01f40f.netlify.app/](https://incredible-llama-01f40f.netlify.app/)

## Directory Structure
```
my-app/
│   .gitignore
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   structure.txt
│   vite.config.js
│
├── .github/
│   ├── workflows/
│   │   └── main.yml
│
├── backend/
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── Controllers/
│   │   └── AuthController.js
│   ├── Middlewares/
│   │   └── AuthValidation.js
│   ├── Models/
│   │   ├── db.js
│   │   ├── User.js
│   ├── Routes/
│   │   ├── AuthRouter.js
│
├── src/
│   ├── components/
│   ├── auth/
│   ├── assets/
│   ├── styles.jsx
│
└── node_modules/
```

## Video Walkthrough of the Project
https://drive.google.com/file/d/1g9h-ie0i4OYpquMUZBW8z6jLkA4VNl73/view

## Features
- User-friendly dashboard to track health metrics
- AI-based health insights and recommendations
- Doctor consultation feature for medical guidance
- Secure user authentication and data storage
- Interactive charts and analytics for progress tracking

## Design Decisions or Assumptions
- The application prioritizes user privacy and data security
- A clean and intuitive UI for a seamless user experience
- Responsive design for accessibility on all devices
- Integration with third-party health APIs for accurate insights

## Installation & Getting Started
Clone the repository and install dependencies:
```bash
npm clone https://github.com/Siddhesh-Kolambekar/Health-Tracker.git
cd Health-Tracker
npm install
npm run dev
```

## Usage
To use the Health Tracker application:
1. Sign up or log in to your account
2. Enter your health data (disease, dosage intake, etc.)
3. View analytics and AI-generated insights
4. Consult with a doctor through the platform

## APIs Used
- **Firebase realtime database** (For storing data)

## Technology Stack
- **Frontend:** React, Tailwind CSS, Firebase
- **Backend:** Express.js
- **Other Libraries:** FetchAPI (for API calls)

---
This **README** provides a comprehensive overview of the Health Tracker project. Make sure to update the placeholders and include relevant links, credentials, and API details before publishing it on GitHub.

