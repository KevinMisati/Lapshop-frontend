import React,{useState,useEffect} from 'react'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import sanityClient from "../sanityClient"
import { apiService } from '../axios'


const Store = () => {
    const [products,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
    const [brands,setBrands]  = useState([])
    const [laptops,setLaptops]  = useState([])
    
    const getBrands = () => {
        apiService({
            url:"brands/",
            method:"GET",
        }).then(res => {
            console.log(res)
            setBrands(res.data)
        }).catch(error => console.log(error))
    }

    const getLaptops = () => {
        apiService({
            url:"laptops/",
            method:"GET",
        }).then(res => {
            console.log(res)
            setFilteredProducts(res.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getBrands()
    }, []) 

    useEffect(() => {
        getLaptops()
    }, []) 



    const handleLaptopFiltration = () => {
        setFilteredProducts(products)
    }

    return (
        
        <div className={classes["products-container"]}>
            <div className={classes["price-filter-container"]}>
                <ul className={classes["price-filter"]}>
                <li>
                    <button autoFocus onClick={() => handleLaptopFiltration("all")}>
                        All
                    </button>
                </li>
                    {brands.map(brand => (
                        <li>
                            <button onClick={() => handleLaptopFiltration(brand.id)}>
                                {brand.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.products}>
                <Products products={filteredProducts} />
            </div>
        </div>
    )
}

export default Store
