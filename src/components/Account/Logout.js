import React from 'react'
import classes from "./Logout.module.css"
import axiosInstance from "../../axiosApi"
import { useNavigate } from "react-router-dom"

const Logout = () => {

    const history = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault()
        axiosInstance.post('token/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        }).then(response => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            console.log(response)
            history.push("/")
            return response;
        })
        .catch (error => {
            throw error
        })
        
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
