import React from 'react'
import { useNavigate } from 'react-router-dom'
import shopAd from "../../../src/images/shop.gif"
import sale from "../../../src/images/sale.gif"
import bigSale from "../../../src/images/big-sale-3979_256.gif"
import classes from "./shopAd.module.css"
import { useWindowWidth } from '../Utilities/useWindowWidth'

const Index = () => {
    let width = useWindowWidth()
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/store")} className={classes.shopAdContainer}>
            <div>
                {width > 600 ? <img src={shopAd} alt='Shopping Ad' /> : ""}
                <img src={sale} alt='Shopping Ad' />
                <img src={bigSale} alt='Shopping Ad' />
            </div>
        </div>
    )
}

export default Index