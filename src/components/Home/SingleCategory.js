import classes from "./SingleCategory.module.css"
import { Link} from 'react-router-dom'


const SingleCategory = ({category}) => {
    const shorten_name = (name) => {
        const name_arr = name.split(" ")
        const short_name_arr = name_arr.splice(0,3)
        const short_name = short_name_arr.join(" ")
        return short_name
    }
    const short_name = shorten_name(category.name)
    
    return (
        <>
        <div className={classes["single-product_container"]}>
            <div className={classes["single-product"]}>
                <div className={classes.product}>

                <div id="jd" className={classes["img-container_outer"]}>
                    <div  className={classes["eye-icon"]}>
                        <Link to={"/store/product/" + category.id}>
                        <i className="fas fa-eye"></i>
                        </Link>
                    </div>
                    <div className={classes.overlay}></div>
                <div className={classes["img-container_inner"]}>
                    <img alt={category.name} src={category.image}></img>
                </div>
                </div>
                <div className={classes["product-info"]}>
                    <div className={classes["product-name"]}>
                        <h5>
                            <Link to={"/store/product/" + category.id}>
                                {short_name}
                            </Link>
                            
                        </h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingleCategory
