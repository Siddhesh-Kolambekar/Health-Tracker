import "./App.css";
import Dashboard from "./component/user/Dashboard/Dashboard";
import AdmDash from "./component/admin/adminDashboard/admDash";
function App() {
  const swch=false
  return (
    swch==true?<AdmDash/>:<Dashboard/>
  );
}

export default App;
