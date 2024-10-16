import React,{useState,useEffect} from 'react'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import { apiService } from '../axios'


const Store = () => {
    const [filteredProducts,setFilteredProducts] = useState([])
    const [brands,setBrands]  = useState([])
    const [brandFilter,setBrandFilter] = useState("")
    
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
            console.log(res)
            setFilteredProducts(res.data)
        }).catch(error => console.log(error))
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
        </div>
    )
}

export default Store
