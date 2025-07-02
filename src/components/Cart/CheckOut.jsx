import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context'
import { AccountContext } from '../../AccountContext'
import classes from "./CheckOut.module.css"

const CheckOutButton = () => {
    const navigate = useNavigate()
    let {sub_total} = useContext(CartContext)
    let { userDetails } = useContext(AccountContext)
    sub_total = sub_total.toFixed(2)

    const handleCheckingOut = (e) => {
        e.preventDefault()
        if(userDetails.user_id){
            navigate("/checkout")
        }
        else{
            navigate("/account/login",{state:{nextPage:"checkout"}})
        }
    }
    
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
                <button onClick={handleCheckingOut} >checkout</button>
            </div>
        </div>
    )
}

export default CheckOutButton
