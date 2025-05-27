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
                            product={product}
                        />
                    )
                })
            }
        </div>
        </div>
    )
}

export default Products
