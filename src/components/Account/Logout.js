import React from 'react'
import classes from "./Logout.module.css"
import { useNavigate } from "react-router-dom"

const Logout = () => {

    const history = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault()
        
        
    }
    
    return (
        <div className={classes['logout-container']}>
            <div className={classes["logout"]}>
                <h1>My Account</h1>
                <div className={classes["logout-btn"]}>
                    <button onClick={handleLogOut}>log out</button>
                </div>
                <div>
                    <h3>account details</h3>

                </div>
            </div>
        </div>
    )
}

export default Logout
