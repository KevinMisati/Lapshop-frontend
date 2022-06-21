import React,{useState,useEffect} from 'react'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import sanityClient from "../sanityClient"
import ScrollToTop from '../components/Utilities/ScrollToTop'


const Store = () => {
    const [products,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
    const handleScrollToTop = (e) => {
        e.preventDefault()
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }

    useEffect(resp => {
        sanityClient
            .fetch(
                `*[_type == 'product']{                                           
                _id,
                _type,
                title,
                img,
                newPrice,
                oldPrice,
                category
            }
        `
            )
            .then((data) => {
                setFilteredProducts(data)
                setProducts(data)
            })
            .catch(console.error);
    }, []) 


    const handleLaptopFiltration = () => {
         setFilteredProducts(products)
    }
    
    const handlePhoneFiltration = () => {
        let filtered = products.filter(product => product.category === "Dell")
        setFilteredProducts(filtered)
    }
    const handleAccessoryFiltration = () => {
        let filtered = products.filter(product => product.category === "Mac")
        setFilteredProducts(filtered)
    }
    return (
        
        <div className={classes["products-container"]}>
            <div className={classes["price-filter-container"]}>
                <ul className={classes["price-filter"]}>
                    <li>
                        <button autoFocus onClick={handleLaptopFiltration}>
                            All
                        </button>
                    </li>
                    <li>
                        <button onClick={handlePhoneFiltration}>
                            Dell
                        </button>
                    </li>
                    <li>
                        <button onClick={handleAccessoryFiltration}>
                            Mac
                        </button>
                    </li>
                </ul>
            </div>
            <div className={classes.products}>
            
                <Products products={filteredProducts} />
            </div>
            {/* <div className={classes.scroll}>
                <button onClick={handleScrollToTop}>
                    <i class="fas fa-arrow-up"></i>
                </button>
            </div> */}
            
        </div>
    )
}

export default Store
