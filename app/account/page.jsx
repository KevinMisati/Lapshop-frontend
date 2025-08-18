"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '@/redux/accountSlice'
import classes from "./Logout.module.css"
import { useRouter } from 'next/navigation'
import { apiService } from '@/axios'

const Logout = () => {
    const router  = useRouter()
    const userDetails = useSelector((state) => state.account)
    const dispatch = useDispatch()

    const handleLogOut = (e) => {
        e.preventDefault()
        apiService({
            url:"logout/",
            method:"POST",
            data:{refresh:userDetails.refresh}
        }).then(() => {
            dispatch(logoutUser)
            router.push("/")
        }).catch(error => {
            console.log(error)
            dispatch(logoutUser)
            router.push("/")
        })
    }   

    const handleLogIn = () => {
        router.push("/account/login")
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
