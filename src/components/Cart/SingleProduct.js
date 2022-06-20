import React,{useState,useContext,useEffect} from 'react'
import classes from "./SingleProduct.module.css"
import { CartContext } from '../../Context'



const SingleProduct = ({ id, img, title, price,info,quantity}) => {

    const {
        increase_sub_total,
        decrease_sub_total,
        remove_product_from_cart,
        increase_quantity
    } = useContext(CartContext)

    
    let localCartState = localStorage.getItem('cartState')
    localCartState = JSON.parse(localCartState)
    let product = localCartState.products_in_cart.filter(prod => prod.id === id)
    product = product[0]
    const defaultQuantity = product.quantity
    const defaultPrice = product.quantity * price

    const [quantityOfSpecificItem, setQuantityOfSpecificItem] = useState(defaultQuantity)
    const [totalPriceOfSpecificItem, settotalPriceOfSpecificItem] = useState(Number(defaultPrice))
    

    const handleItemIncrement = () => {

        
        settotalPriceOfSpecificItem(prevPrice => prevPrice + Number(price))
        increase_sub_total(price)
        setQuantityOfSpecificItem(prev => prev + 1)
        increase_quantity(quantityOfSpecificItem,id)
    }
    useEffect(() => {
        increase_quantity(quantityOfSpecificItem,id)
    },[quantityOfSpecificItem,id])
    


    const handleItemdecrement = (id,price,quantity) => {
        if (quantityOfSpecificItem > 1){
            decrease_sub_total(price)
            settotalPriceOfSpecificItem(prevPrice => prevPrice - Number(price))
            setQuantityOfSpecificItem(prev => prev - 1)
        }
        else if (quantityOfSpecificItem === 1){
            remove_product_from_cart(id,price,1)
        }
    }
    const handleProductRemoval = (id,price,quantity) => {
        remove_product_from_cart(id,price,quantity)
    }
    return (
        <div className={classes["single-product-container"]}>
            <div className={classes["single-product"]}>
                <div className={classes["img-container"]}>
                    <img alt={title} src={img}></img>
                </div>
                <div className={classes["product-info-container"]}>
                <div className={classes["product-info"]}>
                    <h3>{title}</h3>
                    <p>{info}</p>
                </div>
                <div className={classes["change-amount"]}>

                    <button onClick={() => handleItemdecrement(id,price)} className={classes["remove-btn"]}>-</button>

            <span className={classes["quantity"]}>{quantityOfSpecificItem }</span>

                    <button onClick={handleItemIncrement} className={classes["add-btn"]}>+</button>

                </div>
                <div className={classes["price"]}>
                    {totalPriceOfSpecificItem.toFixed(2)}
                </div>
                <div className={classes["remove-product"]}>
                    <button onClick={() => handleProductRemoval(id,price,quantityOfSpecificItem)}>Remove</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
