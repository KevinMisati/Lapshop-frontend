import React,{useEffect,useState} from 'react'
import classes from "./TopSelling.module.css"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
//import {products} from "../Store/data"
import axiosInstance from '../../axiosApi'


const TopSelling = () => {
    const [topSelling,setTopSelling] = useState([])
    useEffect(resp => {
        axiosInstance.get('products/')
        .then (resp => {
            const topSelling = resp.data.filter(product => product.top_selling === true)
            setTopSelling(topSelling)
        })
    },[])

    return (
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="new products"  />
            </header>
            <main className={classes.products}>
                {topSelling.map(product => {
                    return (
                        
                        <SingleProduct 
                            key={product.id}
                            name={product.title}
                            img={product.img}
                            newPrice={product.newPrice}
                            oldPrice={product.oldPrice}
                            id={product.id}
                        /> 
                    )
                })}
            </main>

        </div>
            
        </div>
    )
}

export default TopSelling
