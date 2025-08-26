"use client"
import dynamic from "next/dynamic"
import classes from "./home.module.css"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
import Loader from '../Loader'
import { useWindowWidth } from '../Utilities/useWindowWidth'
import { getSliderSettings } from '../Utilities/helpers'
const Slider = dynamic(() => import('react-slick'),{ssr:false})

const TrendingClient = ({topSelling}) => {
    const screenWidth = useWindowWidth()
    const settings = getSliderSettings(screenWidth)
    if(!topSelling){
        return <Loader />
    }

    return (
        <div className="top-selling_container">
        <div className="top-selling">
            <header className="top-selling_header">
                <Title title="Trending products"  />
            </header>
            <main className="products" >
                <Slider {...settings}>
                    {topSelling.map(product => {
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

export default TrendingClient
