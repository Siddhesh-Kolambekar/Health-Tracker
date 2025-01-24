import React from "react";
import Calendar from "./Calendar";
import CurrentSchedule from "./CurrentSchedule";
import MedicineSchedule from "./MedicineSchedule";
import NextAppointment from "./NextAppointment";
import ProgressBar from "./ProgressBar";
import PatientSchedule from "./PatientSchedule";

const AnalyticsPage = () => {
  const [nextAppointment, setNextAppointment] = React.useState("");
  const [progress, setProgress] = React.useState(50);

  const currentSchedule = [
    { time: "8:00 AM", activity: "Breakfast" },
    { time: "9:00 AM", activity: "Morning Walk" },
    { time: "10:00 AM", activity: "Doctor's Checkup" },
  ];

  const medicineTimings = [
    { time: "8:30 AM", medicine: "Medicine A", status: "Taken" },
    { time: "12:30 PM", medicine: "Medicine B", status: "Pending" },
  ];

  const handleDateSelect = (date) => {
    setNextAppointment(date);
  };

  return (
    <div>
      <h1>Analytics Page</h1>
      <div className="analytics-container">
        <div className="calendar-container">
          <Calendar onDateSelect={handleDateSelect} />
        </div>
        <div className="schedule-container">
          <NextAppointment nextAppointment={nextAppointment} />
          <CurrentSchedule schedule={currentSchedule} />
          <MedicineSchedule medicineTimings={medicineTimings} />
        </div>
        <div className="progress-bar-container">
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
