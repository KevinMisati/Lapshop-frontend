import React,{useState,useContext} from 'react'
import classes from "./CheckOut.module.css"
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context'

const CheckOut = () => {
    const {resetCart} = useContext(CartContext)
    const  navigate = useNavigate()
    const [isAddressDetailsOpen,setIsAddressDetailsOpen] = useState(false)
    const [pickUpStations,setPickUpStations] = useState(false)
    const handleToggleAddressDetails = (e) => {
        setIsAddressDetailsOpen(true)
        setPickUpStations(false)
    }
    const handlePickUpStation = (e) => {
        setPickUpStations(true)
        setIsAddressDetailsOpen(false)
    }
    const handleOrders = (e) => {
        e.preventDefault()
        resetCart()
        navigate("/thankyou")
    }
    return (
        <div className={classes["checkout-container"]}>
         <div className={classes["checkout"]}>

            <form>
                    <h2>delivery method</h2>
                    <h4>How do you want your order delivered?</h4>

                    <div className={` ${classes["input-control"]} ${classes["input-control-delivery"]}`}> 
                    <div className={classes["transport"]}>
                            <input 
                            onClick={handleToggleAddressDetails}  id="transport" name="delivery_method" type="radio" />
                            <span></span>
                            <label name="transport">
                                <i className="fas fa-truck-moving"></i>
                                
                                    Ship
                            </label>
                    </div>
                    <div className={classes["pick-up"]}>
                            <input onClick={handlePickUpStation}id="store_pickup" name="delivery_method" type="radio" />
                            <span></span>
                            <label htmlFor='store_pickup'>
                                <i className="fas fa-store"></i>
                                    Pick up
                            </label>
                        </div>
                    </div>
                    <div className={ !pickUpStations ? classes["pickup-stores-container"] : ""}>
                        <h2>pickup stations</h2>
                        <div className={classes["pickup-stores"]}>
                            <div className={classes["input-control"]}>
                                <input type='radio' name="lapshop_stores" />
                                <label>Lapshop stores, Kisii</label>
                            </div>
                        </div>
                    </div>
                    

                    <div className={ !isAddressDetailsOpen ? classes["address-details-container"] : ""}>
                        <h2>address details</h2>
                <div className={classes["names"]}>
                    <div className={classes["input-control"]}>
                        <label htmlFor="firstname">First Name *</label>
                        <input id="firstname" type="text"></input>
                    </div>

                    <div className={classes["input-control"]}>
                        <label htmlFor="lastname">Last Name *</label>
                        <input id="lastname" type="text" />
                    </div>
                </div>

                <div className={classes["input-control"]}>
                    <label htmlFor="phone">Mobile phone number *</label>
                    <div className={classes["mobile"]}>
                        <div className={classes["country-code"]}>+254</div>
                        <input id="phone" type="phone" />
                    </div>
                </div>

                <div className={classes["input-control"]}>
                    <label htmlFor="address">Delivery Address *</label>
                   <textarea id="address"  ></textarea>
                </div>

                <div className={classes["input-control"]}>
                        <label htmlFor="state">State/Region *</label>
                    <input id="state" type="option" />
                </div>

                <div className={classes["input-control"]}>
                        <label htmlFor="city">City *</label>
                    <input id="city" type="text" />
                </div>
            </div>

            <div>
                <h2>Payment method</h2>
                <h4>How do you want to pay for your order?</h4>

                <div className={classes["input-control"]}>
                    
                    <div className={classes["payment-instructions"]}>
                        <h4>Pay Now</h4>
                        <p>Pay now and receive the products later.</p>
                        <h4>Pay Later</h4>
                        <p>Pay after you receive the products</p>
                    </div>
                </div>
                <div className={classes["input-control"]}>
                    <button onClick={handleOrders}>place order</button>
                </div>
            </div>

            </form>

        </div>
        </div>
    )
}

export default CheckOut
