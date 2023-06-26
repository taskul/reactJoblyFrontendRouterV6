import "./Jobs.css"
import "../MainCss/Forms.css"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../Context/AuthContext"

export default function Job ({id, title, salary, equity}) {
    const { applyForJob, hasApplied } = useContext(AuthContext)
    const [applicationState, setApplicationState] = useState(false)

    useEffect(() => {
        setApplicationState(hasApplied(id))
    }, [id, applyForJob]);

    async function handleApplication() {
        if (hasApplied(id)) return;
        applyForJob(id)
        setApplicationState(true)
    }
    
    const buttonClass = applicationState ? 'Active-btn' : 'Action-btn';
    const buttonText = applicationState ? 'Applied' : 'Apply'

    return (
        <div className="Job-thumbnail">
            <p className="Job-thumbnail-text">Title: {title}</p>
            <p className="Job-thumbnail-text">Salary: {salary}</p>
            <p className="Job-thumbnail-text">Equity: {equity}</p>
            <button 
                onClick={handleApplication}
                className={buttonClass}
            >
            {buttonText}
            </button>
        </div>
    )
}