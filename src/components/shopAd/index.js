import React from 'react'
import { useNavigate } from 'react-router-dom'
import shopAd from "../../../src/images/shop.gif"
import sale from "../../../src/images/sale.gif"
import classes from "./shopAd.module.css"

const Index = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/store")} className={classes.shopAdContainer}>
            <div>
                <img src={shopAd} alt='Shopping Ad' />
                <img src={sale} alt='Shopping Ad' />
            </div>
        </div>
    )
}

export default Index