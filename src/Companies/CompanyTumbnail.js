import "./Companies.css"
import { useNavigate } from "react-router-dom";

export default function CompanyTumbnail ({name, handle, description, numEmployees}) {
    const navigate = useNavigate();

    const showCompanyInfo = () => {
        navigate(`/companies/${handle}`)
    }

    return (
        <div className="Company-thumbnail" onClick={showCompanyInfo}>
            <h4 className="Company-thumbnail-title">Name: {name}</h4>
            <p className="Company-thumbnail-sm-font left-aligned"><b>Description: </b></p>
            <p className="Company-thumbnail-sm-font left-aligned">{description}</p>
            <p className="Company-thumbnail-sm-font left-aligned">Number of employees: {numEmployees}</p>
        </div>
    )
}






