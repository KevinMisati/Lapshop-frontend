"use client"
import classes from "../Utilities/SingleProduct.module.css"
import { useRouter } from "next/navigation";
import { FaEye } from 'react-icons/fa';

const SingleCategory = ({category}) => {
    const router = useRouter()
    const shorten_name = (name) => {
        const name_arr = name.split(" ")
        const short_name_arr = name_arr.splice(0,3)
        const short_name = short_name_arr.join(" ")
        return short_name
    }
    const short_name = shorten_name(category.name)

    const handleRedirect = () => {
        router.push("/store",{state:{categoryId: category.id}})
    }
    
    return (
        <>
        <div onClick={handleRedirect} className={classes["single-product_container"]}>
            <div className={classes["single-product"]}>
                <div className={classes.product}>

                <div id="jd" className={classes["img-container_outer"]}>
                    <div className={classes.overlay}></div>
                <div className={classes["img-container_inner"]}>
                    <img alt={category.name} src={category.image}></img>
                </div>
                </div>
                <div className={classes["product-info"]}>
                    <div className={classes["product-name"]}>
                        <h5>
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
