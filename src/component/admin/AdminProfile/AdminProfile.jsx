import { ProCont, ProImg, ProDtls, ProCom, ProEml} from "../../../styles"

const AdmProfile=()=>{
    return(
        <div style={ProCont}>
            <img src="./admin1.png" alt="" style={ProImg}/>
            <div style={ProDtls}>
                <h2><div style={ProCom}>Name: </div>Mark Johnson</h2>
                <h2><div style={ProCom}>Age: </div>30</h2>
                <h2><div style={ProCom}>Profession: </div>Senior Surgeon</h2>
                <h2><div style={ProCom}>Admin: </div>True</h2>
                <h2><div style={ProCom}>Email: </div><div style={ProEml}>markjohnson30@gmail.com</div></h2>
            </div>
        </div>
    )
}

export default AdmProfile