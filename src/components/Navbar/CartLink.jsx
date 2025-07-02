import React,{useContext} from 'react'
import classes from "./CartLink.module.css"
import { Link } from 'react-router-dom'
import {CartContext} from "../../Context"
import { FaShoppingBag } from 'react-icons/fa';

const CartLink = () => {
    const {number_of_items} = useContext(CartContext)
    
    return (
        <div className={classes["cart-container"]}>
            <div className={classes["cart"]}>
                <Link className={classes["nav-link"]} to="/cart">
                    <FaShoppingBag className="text-white bg-brand-accent hover:bg-emerald-600 p-2 rounded-full text-3xl transition" />
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
