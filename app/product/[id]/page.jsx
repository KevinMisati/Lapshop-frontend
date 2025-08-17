"use client"
import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'next/navigation'
import classes from "./ProductInfo.module.css"
import AddToCartButton from '@/components/Utilities/AddToCartButton'
import { apiService } from '@/axios/index'
import Loader from '@/components/Loader'
import SimilarProducts from '@/components/ProductInfo/SimilarProducts'
import { add_to_cart } from '@/redux/cartSlice'

const ProductInfo = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const [product,setProduct] = useState({})
    const id = param.id

    const [isLoading,setIsLoading] = useState(true)
    const handleItemIncrement = (id) => {
        dispatch(add_to_cart(product))
    }

    useEffect(() => {
        apiService({
            url:`products/${id}`,
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
                    <><div className={classes["product-info"]}>
                        <div className={classes["img-container"]}>
                            <img alt={product.model_name} src={product.image} />
                        </div>
                        <div className={classes["product-desc"]}>
                            <h2>{product.model_name}</h2>
                            <p className={classes.info}>{product.description}</p>
                            <p className={classes.info}>KSH {product.price}</p>
                            <div className={classes["add-btn"]} onClick={handleItemIncrement}>
                                <AddToCartButton
                                    color="#555"
                                    font="1.05rem"
                                    text="add to cart" />
                            </div>
                            
                        </div>
                        
                    </div> <SimilarProducts product={product} />
                    </>:
                
                <Loader />
                }
            </div> 
        
    )
}

export default ProductInfo
