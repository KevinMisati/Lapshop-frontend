import React,{useContext,useState} from 'react'
import classes from "./SingleProduct.module.css"
import Button from './Button'
import { Link} from 'react-router-dom'
import { CartContext } from "../../Context"


const SingleProduct = ({id,name,img,newPrice,oldPrice}) => {

    const {add_to_cart} = useContext(CartContext)
    const handleItemIncrement = (id) => {
        add_to_cart(id)
    }
    

    const shorten_name = (name) => {
        const name_arr = name.split(" ")
        const short_name_arr = name_arr.splice(0,3)
        const short_name = short_name_arr.join(" ")
        return short_name
    }
    const short_name = shorten_name(name)
    
    return (
        <>
        <div className={classes["single-product_container"]}>
            <div className={classes["single-product"]}>
                <div className={classes.product}>

                <div id="jd" className={classes["img-container_outer"]}>
                    <div  className={classes["eye-icon"]}>
                        <Link to={"/store/product/" + id}>
                        <i className="fas fa-eye"></i>
                        </Link>
                    </div>
                    <div className={classes.overlay}></div>
                <div className={classes["img-container_inner"]}>
                    <img alt={name} src={img}></img>
                </div>
                </div>
                <div className={classes["product-info"]}>
                    <div className={classes["product-name"]}>
                        <h5>
                            <Link to={"/store/product/" + id}>
                                {short_name}
                            </Link>
                            
                        </h5>
                    </div>
                    
                    <div onClick={() => handleItemIncrement(id)} className={classes["add-to-cart"]}>
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
