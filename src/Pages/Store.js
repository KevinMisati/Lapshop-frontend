import React,{useState,useEffect} from 'react'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import axiosInstance from '../axiosApi'


const Store = () => {
    const [products,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])

    useEffect(() => {
        axiosInstance.get("products/")
        .then(response => {
            setProducts(response.data)
            setFilteredProducts(response.data.filter(product => product.category === "laptops"))
        })
        
        .catch(error => {
            throw error
        })
    },[])

    const handleLaptopFiltration = () => {
        let filtered = products.filter(product => product.category === "laptops")
        setFilteredProducts(filtered)
    }
    const handlePhoneFiltration = () => {
        let filtered = products.filter(product => product.category === "phones")
        setFilteredProducts(filtered)
    }
    const handleAccessoryFiltration = () => {
        let filtered = products.filter(product => product.category === "accessories")
        setFilteredProducts(filtered)
    }
    return (
        
        <div className={classes["products-container"]}>
            <div className={classes["price-filter-container"]}>
                <ul className={classes["price-filter"]}>
                    <li>
                        <button autoFocus onClick={handleLaptopFiltration}>
                            laptops
                        </button>
                    </li>
                    <li>
                        <button onClick={handlePhoneFiltration}>
                            phones
                        </button>
                    </li>
                    <li>
                        <button onClick={handleAccessoryFiltration}>
                            accessories
                        </button>
                    </li>
                </ul>
            </div>
            <div className={classes.products}>
            
                <Products products={filteredProducts} />
            </div>
            
        </div>
    )
}

export default Store
