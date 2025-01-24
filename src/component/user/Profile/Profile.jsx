import { ProCont, ProImg, ProDtls, ProCom, ProEml} from "../../../styles"

const Profile=()=>{
    return(
        <div style={ProCont}>
            <img src="./patient.png" alt="" style={ProImg}/>
            <div style={ProDtls}>
                <h2><div style={ProCom}>Name: </div>Ken Harvard</h2>
                <h2><div style={ProCom}>Age: </div>25</h2>
                <h2><div style={ProCom}>Disease: </div>Pneumonia</h2>
                <h2><div style={ProCom}>Admin: </div>False</h2>
                <h2><div style={ProCom}>Email: </div><div style={ProEml}>kenharvard25@gmail.com</div></h2>
            </div>
        </div>
    )
}

export default Profile