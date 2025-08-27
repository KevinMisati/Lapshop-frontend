import {useState,useEffect} from 'react'
import Products from '../Store/Products'
import { apiService } from '../../axios'
import Loader from '../Loader'
import Title from '../Utilities/Title'

const SimilarProducts = ({product}) => {
    const [filteredProducts,setFilteredProducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const categoryFilter = product.category
    const brandFilter = product.brand


    const getLaptops = () => {
        let url = "products/"
        if(brandFilter || categoryFilter) url += "?"
        if(brandFilter) url += `brand=${brandFilter}&`
        if(categoryFilter) url += `category=${categoryFilter}&`
        apiService({
            url,
            method:"GET",
        }).then(res => {
            let products = res.data
            setFilteredProducts(products.filter(prod => prod.id !== product.id))
            setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getLaptops()
    }, [brandFilter,categoryFilter]) 


    return (
        
        <>
            <Title title="Similar products"/>
            {!isLoading ? 
                <Products products={filteredProducts.slice(0,4)} />
                :
                <Loader height="calc(100vh - 70px)" /> 
            }
        </>
    )
}

export default SimilarProducts
