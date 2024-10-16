import React,{useState,useContext,useEffect} from 'react'
import classes from "./SingleProduct.module.css"
import { CartContext } from '../../Context'



const SingleProduct = ({product}) => {

    const {
        increase_sub_total,
        decrease_sub_total,
        remove_product_from_cart,
        increase_quantity
    } = useContext(CartContext)

    
    let localCartState = localStorage.getItem('cartState')
    localCartState = JSON.parse(localCartState)
    //let product = localCartState.products_in_cart.filter(prod => prod._id === id)
    //product = product[0]
    const defaultQuantity = product.quantity
    const defaultPrice = product.quantity * product.price 

    const [quantityOfSpecificItem, setQuantityOfSpecificItem] = useState(defaultQuantity)
    const [totalPriceOfSpecificItem, settotalPriceOfSpecificItem] = useState(Number(defaultPrice))
    

    const handleItemIncrement = () => {

        
        settotalPriceOfSpecificItem(prevPrice => prevPrice + Number(product.price))
        increase_sub_total(product.price)
        setQuantityOfSpecificItem(prev => prev + 1)
        increase_quantity(quantityOfSpecificItem,product.id)
    }
    useEffect(() => {
        increase_quantity(quantityOfSpecificItem,product.id)
    },[quantityOfSpecificItem,product.id]) 
    


  const handleItemdecrement = (id,price,quantity) => {
        if (quantityOfSpecificItem > 1){
            decrease_sub_total(price)
            settotalPriceOfSpecificItem(prevPrice => prevPrice - Number(price))
            setQuantityOfSpecificItem(prev => prev - 1)
        }
        else if(quantityOfSpecificItem === 1){
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
                    <img alt={product.model_name} src={product.image}></img>
                </div>
                <div className={classes["product-info-container"]}>
                <div className={classes["product-info"]}>
                    <h3>{product.model_name}</h3>
                </div>
                <div className={classes["change-amount"]}>

                    <button onClick={() => handleItemdecrement(product.id,product.price)} className={classes["remove-btn"]}>-</button>

            <span className={classes["quantity"]}>{quantityOfSpecificItem }</span>

                    <button onClick={handleItemIncrement} className={classes["add-btn"]}>+</button>

                </div>
                <div className={classes["price"]}>
                    {totalPriceOfSpecificItem.toFixed(2)}
                </div>
                <div className={classes["remove-product"]}>
                    <button onClick={() => handleProductRemoval(product.id,product.price,quantityOfSpecificItem)}>Remove</button>
                </div>
                </div>
            </div> 
        </div>
    )
}

export default SingleProduct
