import React,{useEffect,useState} from 'react'
import classes from "./TopSelling.module.css"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
import sanityClient from "../../sanityClient"

const TopSelling = () => {
    const [topSelling,setTopSelling] = useState([])
    useEffect(resp => {
        sanityClient
			.fetch(
				`*[_type == 'product' && topSelling == true]{                                           
                _id,
                _type,
                title,
                img,
                newPrice,
                oldPrice,
                topSelling
            }
        `
			)
			.then((data) => {
                console.log(data)
                setTopSelling(data)
            })
			.catch(console.error);
    },[]) 

    return (
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="Latest products"  />
            </header>
            <main className={classes.products}>
                {topSelling.map(product => {
                    return (
                        
                        <SingleProduct 
                            key={product._id}
                            name={product.title}
                            img={product.img}
                            newPrice={product.newPrice}
                            oldPrice={product.oldPrice}
                            id={product._id}
                        /> 
                    )
                })}
            </main>

        </div>
            
        </div>
    )
}

export default TopSelling
