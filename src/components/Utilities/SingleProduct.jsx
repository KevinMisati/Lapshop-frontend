import {useContext} from 'react'
import classes from "./SingleProduct.module.css"
import Button from './Button'
import { Link} from 'react-router-dom'
import { CartContext } from "../../Context"
import { useWindowWidth } from './useWindowWidth'
import { FaEye } from 'react-icons/fa';


const SingleProduct = ({product}) => {

    const {add_to_cart} = useContext(CartContext)
    const handleItemIncrement = () => {
        add_to_cart(product)
    }
    
    const screenWidth = useWindowWidth()
    const shorten_name = (name) => {
        const name_arr = name.split(" ")
        if(name_arr.length > 2){
            let short_name_arr 
            if(screenWidth < 400) short_name_arr = name_arr.splice(0,2)
            else if(screenWidth < 500) short_name_arr = name_arr.splice(0,2)
            else short_name_arr = name_arr.splice(0,3)
            const short_name = short_name_arr.join(" ") + "..."
            return short_name
        }
        return name_arr
        
    }
    const short_name = shorten_name(product.model_name)
    const discount = Math.floor(((product.old_price - product.price) / product.old_price) * 100)
    
    return (
        <>
        <div className={classes["single-product_container"]}>
            <div className={classes["single-product"]}>
                <div className={classes.product}>
                    {discount > 5 ? 
                        <div className={classes["discount"]}>
                            <p>-{discount}%</p>
                        </div> : ""
                    }
                    <div id="jd" className={classes["img-container_outer"]}>
                        <div  className={classes["eye-icon"]}>
                            <Link to={"/store/product/" + product.id}>
                            <FaEye className="text-xl text-gray-600 hover:text-brand-primary" />
                            </Link>
                        </div>
                        <div className={classes.overlay}></div>
                    <div className={classes["img-container_inner"]}>
                        <img alt={product.name} src={product.image}></img>
                    </div>
                    </div>
                    <div className={classes["product-info"]}>
                        <div className={classes["product-name"]}>
                            <p>
                                <Link to={"/store/product/" + product.id}>
                                    {short_name}
                                </Link>
                                
                            </p>
                        </div>

                        < div className={classes["product-price"]}>
                            {screenWidth > 500 && product.price < product.old_price ?
                                <p className={classes["product-price-old"]}>KSH {product.old_price}</p> 
                                : ""
                            } 
                                <p className={classes["product-price-new"]}>KSH {product.price}</p>
                                
                            
                        </div>
                        
                        <div onClick={handleItemIncrement} className={classes["add-to-cart"]}>
                            <Button  text="add to cart" />
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default SingleProduct
