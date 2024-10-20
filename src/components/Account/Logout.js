import React,{useContext,useState,useEffect} from 'react'
import classes from "./Logout.module.css"
import { useNavigate } from "react-router-dom"
import {AccountContext} from "../../AccountContext"
import { apiService } from '../../axios'

const Logout = () => {

    const{userDetails,logoutUser} = useContext(AccountContext)
    const navigate = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault()
        apiService({
            url:"logout/",
            method:"POST",
            data:{refresh:userDetails.refresh}
        }).then(() => {
            logoutUser()
            navigate("/")
        }).catch(error => {
            console.log(error)
            logoutUser()
            navigate("/")
        })
    }   

    const handleLogIn = () => {
        navigate("/account/login")
    }
    
    return (
        <div className={classes['logout-container']}>
            <div className={classes["logout"]}>
                <h1>My Account</h1>
                <div>
                    <h3>account details</h3>
                    <div>
                        <p>Email: {userDetails.email}</p>
                    </div>
                </div>
                <div className={classes["logout-btn"]}>
                    {userDetails.user_id ? 
                        <button onClick={handleLogOut}>Log out</button> :
                        <button onClick={handleLogIn}>Log in</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Logout
