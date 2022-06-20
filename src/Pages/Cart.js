import React,{useContext,useEffect} from 'react'
import classes from "./Cart.module.css"
import SingleProduct from '../components/Cart/SingleProduct'
import CheckOutButton from '../components/Cart/CheckOut'
import { CartContext } from '../Context'
import { Link } from 'react-router-dom'
import Button from '../components/Utilities/Button'

const Cart = () => {
    const { products_in_cart,number_of_items} = useContext(CartContext)
    useEffect(() => {
        console.log(products_in_cart)
    },[])
    return (
        <div className={classes["cart-container"]}>
            
            <div className={classes["cart"]}>
                <h1>Shopping Cart</h1>
                {number_of_items === 0 ? 
                    <div className={classes["empty-cart"]}>
                        <h1>Your cart is empty</h1> 
                        <Link to="/store">
                        <Button 
                        color="#000"
                        font= "1.15rem"
                        text="Shop now"
                        background="transparent"
                    />
                    {/* #3C43A4 */}
                    </Link>
                    </div>
                    : 
                <div>
                <div className={classes["products"]}>
                {
                    products_in_cart.map (({_id,img,title,new_price,quantity}) => {
                        return (
                            <SingleProduct
                                    key={_id}
                                    img={img}
                                    title={title}
                                    price={new_price}
                                    id={_id}
                                    quantity={quantity}
                            />
                        )
                    })
                }  
                    
                </div>
                
                <CheckOutButton />
            </div>
            }    
        </div>
    </div>
    )
}

export default Cart
