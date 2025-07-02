import React,{useContext} from 'react'
import classes from "./CartLink.module.css"
import { Link } from 'react-router-dom'
import {CartContext} from "../../Context"

const CartLink = () => {
    const {number_of_items} = useContext(CartContext)
    
    return (
        <div className={classes["cart-container"]}>
            <div className={classes["cart"]}>
                <Link className={classes["nav-link"]} to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                </Link>
            </div>
            <div className={classes["quantity"]}>
                <Link className={classes["nav-link"]} to="/cart">
                    {number_of_items}
                </Link>
            </div>
        </div>
    )
}

export default CartLink
