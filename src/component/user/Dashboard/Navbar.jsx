import { Link } from "react-router-dom";
import { navCont, navCom } from "../../../styles";

const Navbar = () => {
  return (
    <div style={navCont}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "20%",
        }}
      >
        <Link
          to="/"
          style={{
            textDecorationLine: "none",
            fontFamily: "sans-serif",
            color: "blue",
            backgroundImage: "url(./logo3.png)",
            backgroundSize: "cover",
            mixBlendMode: "multiply",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "14vh",
            height: "14vh",
          }}
        ></Link>
        <Link
          to="/profile"
          style={{
            textDecorationLine: "none",
            fontFamily: "sans-serif",
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize:"25px"
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
        <Link to="/subscription" style={navCom}>Subscription</Link>
        <Link to="/schedule" style={navCom}>
          Schedule
        </Link>
        <Link to="/renewal" style={navCom}>
          Renewal
        </Link>
        <Link to="/analytics" style={navCom}>
          Analytics
        </Link>
        <Link to="/assistance" style={navCom}>
          Assistance
        </Link>
        <Link to="/history" style={navCom}>
          History
        </Link>
        <Link to="/doctors" style={navCom}>Doctors</Link>
      </div>
    </div>
  );
};

export default Navbar;