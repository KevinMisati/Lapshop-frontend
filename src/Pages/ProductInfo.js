import React,{useState,useEffect,useContext} from 'react'
import classes from "./ProductInfo.module.css"
import {useParams} from "react-router-dom"
import AddToCartButton from '../components/Utilities/AddToCartButton'
import { CartContext } from '../Context'
import { apiService } from '../axios'
import Loader from '../components/Loader'

const ProductInfo = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams("id")

    const [isLoading,setIsLoading] = useState(true)

    const {add_to_cart} = useContext(CartContext)
    const handleItemIncrement = (id) => {
        add_to_cart(product)
    }

    useEffect(() => {
        apiService({
            url:`laptops/${id}`,
            method:"GET"
        }).then(res => {
            setProduct(res.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
            setIsLoading(false)
        }) 
    }, [id]) 

    
    
    const {title,image,info} = product
    return (
        
            <div className={classes["product-info-container"]}>
                {!isLoading ?
                    <div className={classes["product-info"]}>
                        <div className={classes["img-container"]}>
                            <img alt={product.model_name} src={product.image} />
                        </div>
                        <div className={classes["product-desc"]}>
                            <h2>{product.model_name}</h2>
                            <p className={classes.info}>{product.description}</p>
                            <p className={classes.info}>$ {product.price}</p>
                            <div className={classes["add-btn"]} onClick={handleItemIncrement}>
                                <AddToCartButton
                                    color="#555"
                                    font="1.05rem"
                                    text="add to cart" />
                            </div>
                            
                        </div>
                    </div> :
                
                <Loader />
                }
            </div> 
        
    )
}

export default ProductInfo
