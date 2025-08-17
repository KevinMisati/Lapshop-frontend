"use client"
import dynamic from "next/dynamic"
import classes from "./home.module.css"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
import Loader from '../Loader'
import { useWindowWidth } from '../Utilities/useWindowWidth'
import { getSliderSettings } from '../Utilities/helpers'
const Slider = dynamic(() => import('react-slick'),{ssr:false})

const MostLovedClient = ({mostLoved}) => {
    console.log(mostLoved,"hello most")
    const screenWidth = useWindowWidth()
    const settings = getSliderSettings(screenWidth)
    if(!mostLoved){
        return <Loader />
    }

    return (
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="Most-loved products"  />
            </header>
            <main className={classes.products} >
                <Slider {...settings}>
                    {mostLoved.map(product => {
                        return (
                            
                            <SingleProduct 
                                product={product}
                            /> 
                        )
                    })}
                </Slider>
            </main>
        </div>
            
        </div>
    )
}

export default MostLovedClient
