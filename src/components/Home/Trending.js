import React,{useEffect,useState} from 'react'
import classes from "./TopSelling.module.css"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
import { apiService } from '../../axios'

const TopSelling = () => {
    const [topSelling,setTopSelling] = useState([])
    useEffect(resp => {
        apiService({
            url:"laptops/?trending=true",
            method:"GET",
        }).then(res => setTopSelling(res.data))
        .catch(error => console.log(error))
    },[]) 

    return (
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="Trending products"  />
            </header>
            <main className={classes.products}>
                {topSelling.map(product => {
                    return (
                        
                        <SingleProduct 
                            product={product}
                        /> 
                    )
                })}
            </main>

        </div>
            
        </div>
    )
}

export default TopSelling
