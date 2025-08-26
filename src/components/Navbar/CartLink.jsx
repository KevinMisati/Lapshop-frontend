"use client"
import classes from "./CartLink.module.css"
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector} from "react-redux"

const CartLink = () => {
    const number_of_items = useSelector((state) => state.cart.number_of_items)
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
