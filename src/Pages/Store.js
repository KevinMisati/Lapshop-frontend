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

    const [categoryFilter,setCategoryFilter] = useState(useParams("categoryId"))
    const [categories,setCategories]  = useState(localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [])

    const getCategories = () => {
        apiService({
            url:"categories",
            method:"GET",
        }).then(res => {
            let categories = res.data
            setCategories(categories)
            setIsLoading(false)
            localStorage.setItem("categories",JSON.stringify(res.data))
        })
        .catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    }

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
        if(brandFilter || categoryFilter || searchTerm) url += "?"
        if(brandFilter) url += `brand=${brandFilter}&`
        if(categoryFilter) url += `category=${categoryFilter}&`
        if(searchTerm) url += `search=${searchTerm}`
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
        const {name,value} = e.target
        if(name === "brands") setBrandFilter(value)
        else setCategoryFilter(value)
    }

    useEffect(() => {
        getBrands()
        categories.length === 0 && getCategories()
    }, []) 

    useEffect(() => {
        getLaptops()
    }, [brandFilter,searchTerm,categoryFilter]) 


    return (
        
        <div className={classes["products-container"]}>
            {!isLoading ? <>
                <div className={classes["filter-container"]}>
                    <select 
                        id="laptop" 
                        name="categories"
                        onChange={handleLaptopFiltration}
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option value={category.id}>{category.name}</option>
                        ))}
                    </select>

                    <select 
                        id="laptop" 
                        name="brands"
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
