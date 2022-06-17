import React from 'react'
import classes from "./Navbar.module.css"
import Header  from './Header'
import MobileHeader from './MobileHeader'
const Navbar = () => {
    return (
        <div className={classes["navbar-container"]}>
            <div className={classes["large-screen"]}>
                <Header />
            </div>
            <div className={classes["small-screen"]} >
                <MobileHeader />
            </div>
           
            
        </div>
    )
}

export default Navbar
