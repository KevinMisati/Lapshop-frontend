import React from 'react'
import classes from "./Account.module.css"
import {Outlet } from 'react-router-dom'
const Account = () => {
    return (
        <div className={classes["account-container"]}>
            <Outlet />
        </div>
    )
}

export default Account
