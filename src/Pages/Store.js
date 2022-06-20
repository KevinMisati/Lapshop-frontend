import React,{useState,useEffect} from 'react'
import classes from "./Store.module.css"
import Products from '../components/Store/Products'
import sanityClient from "../sanityClient"


const Store = () => {
    const [products,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])

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
                console.log(data)
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
            
        </div>
    )
}

export default Store
