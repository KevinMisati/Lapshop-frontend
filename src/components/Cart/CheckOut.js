import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context'
import classes from "./CheckOut.module.css"

const CheckOutButton = () => {
    let {sub_total} = useContext(CartContext)
    sub_total = sub_total.toFixed(2)
    
    return (
        <div className={classes["checkout-container"]}>
            <div className={classes["checkout"]}>
                <div className={classes.subtotal}>
                    <p>Subtotal:</p>
                    <p>{sub_total}</p>
                </div>
                <div className={classes.shipping}>
                    <p>Shipping:</p>
                    <button>add info</button>
                </div>
                <div className={classes.coupon}>
                    <p>Coupon Code:</p>
                    <button>Add Coupon</button>
                </div>
                <div className={classes["grand-total"]}>
                    <p>Grand Total:</p>
                <p>{sub_total}</p>
                </div>

            </div>
            <div className={classes["checkout-btn"]}>
                <Link to="/checkout">checkout</Link>
            </div>
        </div>
    )
}

export default CheckOutButton
