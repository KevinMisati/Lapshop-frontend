import classes from "./home.module.css"
import {Link,useNavigate} from "react-router-dom"

const Banner = () => {
    const navigate = useNavigate()
    return (
        <section className={classes["hero-section"]}>
            <div className={classes["hero-bg"]}></div>
            <div className={classes["hero-content"]}>
                <h1>
                    Power Up Your Tech Life with 
                <span className={classes["accent-text"]}>Top Electronics</span>
                </h1>
                <p>
                Discover high-performance laptops, accessories, and gear — all handpicked for quality and value.
                </p>
                <div className={classes["hero-buttons"]}>
                <button onClick={() => navigate("/store")} className={classes["shop-button"]}>Shop Deals</button>
                </div>
            </div>
            <div className={classes["overlay-tint"]}></div>
        </section>

    )
}

export default Banner
