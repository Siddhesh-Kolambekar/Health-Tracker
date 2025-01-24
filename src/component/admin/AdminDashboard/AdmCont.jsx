import PatientRenewal from "../patientRenewal/PatientRenewal"
import PatientSchedule from "../patientSchedule/PatientSchedule"
import AdmProfile from "../AdminProfile/AdminProfile"
import { Routes,Route } from "react-router-dom"
import { contentStyle } from "../../../styles"
import MarkAsDone from "../MedicationAsDone/MarkAsDone"
const AdmCont=()=>{
    return(
        <div style={contentStyle}>
            <Routes>
                <Route path="/" element={<AdmProfile/>}/>
                <Route path="/patientrenewal" element={<PatientRenewal/>}/>
                <Route path="/patientschedule" element={<PatientSchedule/>}/>
                <Route path="/medicationasdone" element={<MarkAsDone/>}/>
            </Routes>
        </div>
    )
}

export default AdmCont