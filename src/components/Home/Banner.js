import React from 'react'
import classes from "./Banner.module.css"
import Button from "../Utilities/Button"
import {Link} from "react-router-dom"

const Banner = () => {
    
    return (
        <div className={classes["banner-container"]}>
            <div className={classes.banner}>
            <div className={classes["banner-info"]}>
                <h2>All Your favourite electronics at one place </h2>
                <div className={classes["acttion-button"]}>
                    <Link to="/store">
                        <Button 
                        color="white"
                        font= "1.15rem"
                        text="Shop now"
                    />
                    </Link>
                    
                </div>
                </div>
                
               
                {/* <a href='https://www.freepik.com/photos/computer'>Computer photo created by mego-studio - www.freepik.com</a> */}
            </div>
            
        </div>
    )
}

export default Banner
