import React from 'react'
import classes from "./Banner.module.css"
import Button from "../Utilities/Button"
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div className={classes.banner}>
            <div className={classes["banner-info"]}>
                <h1>
                    We have all your favourite laptops
                </h1>
                <div className={classes["action-button"]}>
                    <Link to="/store">
                        <button>
                            Shop Now
                        </button>
                    </Link>
                    
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Banner
