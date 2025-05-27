import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import { apiService } from '../axios'
import Loader from '../components/Loader'


const Store = () => {
    const [filteredProducts,setFilteredProducts] = useState([])
    const [brands,setBrands]  = useState([])
    const [brandFilter,setBrandFilter] = useState("")
    const [searchTerm,setSearchTerm]  = useState("")
    const [isLoading,setIsLoading] = useState(true)
    const {categoryId} = useParams("categoryId")

    
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
        let url = "products/"
        if(brandFilter) url += `?brand=${brandFilter}`
        if(categoryId) url += `?category=${categoryId}`
        if(searchTerm) url += `?search=${searchTerm}`
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

    const handleLaptopFiltration = (e) => {
        setBrandFilter(e.target.value)
    }

    useEffect(() => {
        getBrands()
    }, []) 

    useEffect(() => {
        getLaptops()
    }, [brandFilter,searchTerm]) 


    return (
        
        <div className={classes["products-container"]}>
            {!isLoading ? <>
                <div className={classes["filter-container"]}>
                    <select 
                        id="laptop" 
                        name="laptop"
                        onChange={handleLaptopFiltration}
                    >
                        <option value="">All Brands</option>
                        {brands.map(brand => (
                            <option value={brand.id}>{brand.name}</option>
                        ))}
                    </select>
                    
                    <div className={classes["search-input"]}>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
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
