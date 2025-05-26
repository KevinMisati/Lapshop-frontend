import React,{useContext,useState} from 'react'
import classes from "./SingleCategory.module.css"
import Button from '../Utilities/Button'
import { Link} from 'react-router-dom'
import { CartContext } from "../../Context"


const SingleCategory = ({product}) => {

    const {add_to_cart} = useContext(CartContext)
    const handleItemIncrement = () => {
        add_to_cart(product)
    }
    

    const shorten_name = (name) => {
        const name_arr = name.split(" ")
        const short_name_arr = name_arr.splice(0,3)
        const short_name = short_name_arr.join(" ")
        return short_name
    }
    const short_name = shorten_name(product.model_name)
    
    return (
        <>
        <div className={classes["single-product_container"]}>
            <div className={classes["single-product"]}>
                <div className={classes.product}>

                <div id="jd" className={classes["img-container_outer"]}>
                    <div  className={classes["eye-icon"]}>
                        <Link to={"/store/product/" + product.id}>
                        <i className="fas fa-eye"></i>
                        </Link>
                    </div>
                    <div className={classes.overlay}></div>
                <div className={classes["img-container_inner"]}>
                    <img alt={product.name} src={product.image}></img>
                </div>
                </div>
                <div className={classes["product-info"]}>
                    <div className={classes["product-name"]}>
                        <h5>
                            <Link to={"/store/product/" + product.id}>
                                {short_name}
                            </Link>
                            
                        </h5>
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

export default SingleCategory
