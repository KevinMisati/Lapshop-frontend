import React,{useState,useEffect,useContext} from 'react'
import classes from "./ProductInfo.module.css"
import {useParams} from "react-router-dom"
import axiosInstance from '../axiosApi'
import AddToCartButton from '../components/Utilities/AddToCartButton'
import { CartContext } from '../Context'

const ProductInfo = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams("id")

    const {add_to_cart} = useContext(CartContext)
    const handleItemIncrement = (id) => {
        add_to_cart(id)
    }

    useEffect(() => {
        axiosInstance.get(`products/${id}`)
        .then(resp => {
            setProduct(resp.data)
        })
        .catch(error => {
            throw error
        })
    },[id])

    
    
    const {title,img,info} = product
    return (
        <div className={classes["product-info-container"]}>
        <div className={classes["product-info"]}>
            <div className={classes["img-container"]}>
                <img alt={title} src={img} />
            </div>
            <div className={classes["product-desc"]}>
                <h2>{title}</h2>
                <p>{info}</p>
                <div className={classes["add-btn"]} onClick={() => handleItemIncrement(id)}>
                    <AddToCartButton
                        color="#555"
                        font="1.05rem"
                        text="add to cart" />
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default ProductInfo
