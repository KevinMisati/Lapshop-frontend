'use client'
import {useState,useEffect} from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import classes from "./store.module.css"
import Products from '@/components/Store/Products'
import { apiService } from '@/axios'
import Loader from '@/components/Loader'

const Store = () => {
    const searchParams = useSearchParams()
    const [filteredProducts,setFilteredProducts] = useState([])
    const [brands,setBrands]  = useState([])
    const [brandFilter,setBrandFilter] = useState(searchParams.get("brandId") || "")
    const [searchTerm,setSearchTerm]  = useState("")
    const [isLoading,setIsLoading] = useState(true)

    const [categoryFilter,setCategoryFilter] = useState(searchParams.get("categoryId") || "")
    const [categories,setCategories]  = useState(localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [])

    const getCategories = () => {
        apiService({
            url:"categories/",
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
        {!isLoading ? 
        <div>
            <div className={classes["filter-container"]}>
                <select 
                    id="laptop" 
                    name="categories"
                    onChange={handleLaptopFiltration}
                    value={categoryFilter}
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
                    value={brandFilter}
                >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                        <option value={brand.id}>{brand.name}</option>
                    ))}
                </select>
                
                <div className={classes["search-input"]}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            {
                filteredProducts.length > 0 ?  
                    <div className={classes.products}>
                        <Products products={filteredProducts} />
                    </div> : 
                    <div className={classes["nodata-container"]}>
                        <div className={classes["nodata-container-img"]} >
                            <Image 
                                alt='No data found' 
                                src='/images/nodata.png' 
                                width={400}
                                height={400}
                            />
                        </div> 
                        <div className={classes["nodata-container-text"]}>
                            <h2 className="text-xl font-semibold mb-2">
                                Hmm... looks like we don’t have that yet.
                            </h2>
                            <p className="text-gray-600">
                                Need help? Contact us and we’ll be glad to assist you.
                            </p>
                        </div>
                    </div> 

            }
        </div> 
        :
        <Loader height="calc(100vh - 70px)" /> }
        </div>
    )
}

export default Store
