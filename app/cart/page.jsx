"use client"
import { useRouter } from 'next/navigation'
import classes from "./Cart.module.css"
import SingleProduct from '@/components/Cart/SingleProduct'
import CheckOutButton from '@/components/Cart/CheckOut'
import Button from '@/components/Utilities/Button'
import { useSelector } from 'react-redux'

const Cart = () => {
    const { products_in_cart,number_of_items} = useSelector((state) => state.cart)
    const router = useRouter()
    return (
        <div className={classes["cart-container"]}>
            
            <div className={classes["cart"]}>
                <h3>Shopping Cart</h3>
                {number_of_items === 0 ? 
                    <div className={classes["empty-cart"]}>
                        <h3>Your cart is empty</h3> 
                        <Button onClick={() => router.push('/store')} text="Shop now"/>
                    </div>
                    : 
                <div>
                <div className={classes["products"]}>
                {
                    products_in_cart.map (product => {
                        return (
                            <SingleProduct
                                key={product.id}
                                product={product}
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
