import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import classes from "./SingleProduct.module.css"
import { increase_quantity, increase_sub_total,decrease_sub_total,remove_product_from_cart } from '../../redux/cartSlice'

const SingleProduct = ({product}) => {
    const dispatch = useDispatch()
    let localCartState = localStorage.getItem('cartState')
    localCartState = JSON.parse(localCartState)
    const defaultQuantity = product.quantity
    const defaultPrice = product.quantity * product.price 

    const [quantityOfSpecificItem, setQuantityOfSpecificItem] = useState(defaultQuantity)
    const [totalPriceOfSpecificItem, settotalPriceOfSpecificItem] = useState(Number(defaultPrice))
    

    const handleItemIncrement = (id,price) => {
        dispatch(increase_sub_total(price))
        settotalPriceOfSpecificItem(prevPrice => prevPrice + Number(price))
        setQuantityOfSpecificItem(prev => prev + 1)
    }

    const handleItemdecrement = (id,price,quantity) => {
        if (quantityOfSpecificItem > 1){
            dispatch(decrease_sub_total(price))
            settotalPriceOfSpecificItem(prevPrice => prevPrice - Number(price))
            setQuantityOfSpecificItem(prev => prev - 1)
        }
        else if(quantityOfSpecificItem === 1){
            dispatch(remove_product_from_cart(id,price,1))
        }
    }

    useEffect(() => {
        dispatch(increase_quantity(quantityOfSpecificItem,product.id))
    },[quantityOfSpecificItem,product.id]) 
    
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

                    <button onClick={() => handleItemIncrement(product.id,product.price)} className={classes["add-btn"]}>+</button>

                </div>
                <div className={classes["price"]}>
                    {product.price /* totalPriceOfSpecificItem.toFixed(2) */}
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
