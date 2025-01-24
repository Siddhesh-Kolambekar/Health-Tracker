import Cards from "./Cards"
import Profile from "../Profile/Profile"
import Schedule from "../Schedule/Schedule"
import Renewal from "../Renewal/Renewal"
import Analytics from "../Analytics/Analytics"
import Assistance from "../Assistance/Assistance"
import History from "../History/History"
import { Routes,Route } from "react-router-dom"
import { contentStyle } from "../../../styles"
import Appointment from "../Analytics/Appointment"
import FAQ from "../Assistance/FAQ"
import Chatbot from "../Assistance/Chatbot"
import MedicationTiming from "../Analytics/MedicationTiming"
// import ProgressReport from "../Analytics/progressReport"
import SubscriptionPage from "../subscription/subscription"
import PaymentPage from "../subscription/payment"
import Doctors from "../Doctors/Doctors"
import Toggle from "../Renewal/toggle"

const Content=()=>{
    return(
        
        <div style={contentStyle}>
            <Routes>
            <Route path="/toggle" element={<Toggle/>}/>

                <Route path="/" element={<Cards/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/renewal" element={<Renewal/>}/>
                <Route path="/analytics" element={<Analytics/>}/>
                <Route path= "/FAQ" element={<FAQ/>}/>
                <Route path= "/ChatBot" element={<Chatbot/>}/>
                <Route path= "/Appointment" element={<Appointment/>}/>
                <Route path= "/medicine" element={<MedicationTiming/>}/>
                <Route path="/assistance" element={<Assistance/>}/>
                <Route path="/history" element={<History/>}/>
                {/* <Route path="/progress" element={<ProgressReport/>}/> */}
                <Route path="/transaction" element={<PaymentPage/>}/>
                <Route path="/subscription" element={<SubscriptionPage/>}/>
                <Route path="/doctors" element={<Doctors/>}/>
                
            </Routes>
        </div>
    )
}

export default Content