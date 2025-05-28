import classes from "./SingleCategory.module.css"
import { useNavigate } from 'react-router-dom'

const SingleCategory = ({category}) => {
    const navigate = useNavigate()
    const shorten_name = (name) => {
        const name_arr = name.split(" ")
        const short_name_arr = name_arr.splice(0,3)
        const short_name = short_name_arr.join(" ")
        return short_name
    }
    const short_name = shorten_name(category.name)

    const handleRedirect = () => {
        navigate("/store",{state:{categoryId: category.id}})
    }
    
    return (
        <>
        <div onClick={handleRedirect} className={classes["single-product_container"]}>
            <div className={classes["single-product"]}>
                <div className={classes.product}>

                <div id="jd" className={classes["img-container_outer"]}>
                    <div  className={classes["eye-icon"]}>
                        <button onClick={handleRedirect} >
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                    <div className={classes.overlay}></div>
                <div className={classes["img-container_inner"]}>
                    <img alt={category.name} src={category.image}></img>
                </div>
                </div>
                <div className={classes["product-info"]}>
                    <div className={classes["product-name"]}>
                        <h5 onClick={handleRedirect}>
                            {short_name}
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
