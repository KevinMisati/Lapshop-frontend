import React from 'react'
import classes from "./ThankYou.module.css"

const ThankYou = () => {
    return (
        <div className={classes["thankyou-container"]}>
            <div className={classes["thankyou"]}>
                <h2>Your order has been received, kindly wait for a confirmation message.</h2>
            </div>
        </div>
    )
}

export default ThankYou
