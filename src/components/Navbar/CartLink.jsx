"use client"
import classes from "./CartLink.module.css"
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa';

const CartLink = () => {
    const number_of_items = 0//useContext(CartContext)
    return (
        <div className={classes["cart-container"]}>
            <div className={classes["cart"]}>
                <Link className={classes["nav-link"]} href="/cart">
                    <FaShoppingBag className="shopping-icon" />
                </Link>
            </div>
            <div className={classes["quantity"]}>
                <Link className={classes["nav-link"]} href="/cart">
                    {number_of_items}
                </Link>
            </div>
        </div>
    )
}

export default CartLink
