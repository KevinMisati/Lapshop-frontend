import React,{useState,useEffect} from 'react'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import { apiService } from '../axios'
import Loader from '../components/Loader'


const Store = () => {
    const [filteredProducts,setFilteredProducts] = useState([])
    const [brands,setBrands]  = useState([])
    const [brandFilter,setBrandFilter] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    
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
        let url = "laptops/"
        if(brandFilter) url = `laptops/?brand=${brandFilter}`
        apiService({
            url,
            method:"GET",
        }).then(res => {
            setFilteredProducts(res.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getBrands()
    }, []) 

    useEffect(() => {
        getLaptops()
    }, [brandFilter]) 

    const handleLaptopFiltration = (e) => {
        setBrandFilter(e.target.value)
    }

    return (
        
        <div className={classes["products-container"]}>
            {!isLoading ? <>
                <div className={classes["price-filter-container"]}>
                    <label for="laptop">Brands:</label>
                    <select 
                        id="laptop" 
                        name="laptop"
                        onChange={handleLaptopFiltration}
                    >
                        <option value="">All</option>
                        {brands.map(brand => (
                            <option value={brand.id}>{brand.name}</option>
                        ))}
                    </select>
                </div>
                <div className={classes.products}>
                    <Products products={filteredProducts} />
                </div>
            </> : 
            <Loader height="calc(100vh - 70px)" /> }
        </div>
    )
}

export default Store
