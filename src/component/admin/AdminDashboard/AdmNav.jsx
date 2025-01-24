import { Link } from "react-router-dom";
import { navCont, navCom } from "../../../styles";

const AdmNav = () => {
  return (
    <div style={navCont}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "20%",
        }}
      >
        <img src="./logo3.png" alt="Logo" style={{textDecorationLine: "none",fontFamily: "sans-serif",color: "blue",backgroundImage: "url(./logo3.png)",backgroundSize: "cover",mixBlendMode: "multiply",backgroundPosition: "center",backgroundRepeat: "no-repeat",width: "14vh",height: "14vh",}} />
        <Link
          to="/"
          style={{
            textDecorationLine: "none",
            fontFamily: "sans-serif",
            color: "white",
            fontSize:"25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Profile
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
        }}
      >
        <Link to="/patientschedule" style={navCom}>
          Schedule
        </Link>
        <Link to="/medicationasdone" style={navCom}>Medication Done</Link>
        <Link to="/patientrenewal" style={navCom}>
          Renewal
        </Link>
      </div>
    </div>
  );
};

export default AdmNav;