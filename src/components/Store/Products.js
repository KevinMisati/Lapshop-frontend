import React from 'react'
import classes from "./Products.module.css"
import SingleProduct from "../Utilities/SingleProduct"

const Products = ({products}) => {
    
    return (
        <div className={classes["products-container"]}>
        <div className={classes["products"]}>
            {
                products.map(product => {
                    return (
                        <SingleProduct
                            image={product.image}
                            name={product.model_name}
                            newPrice={product.new_price}
                            oldPrice={product.old_price}
                            key={product.id}
                            id={product.id}
                        />
                    )
                })
            }
        </div>
        </div>
    )
}

export default Products
