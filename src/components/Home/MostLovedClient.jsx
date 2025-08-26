"use client"
import dynamic from "next/dynamic"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
import Loader from '../Loader'
import { useWindowWidth } from '../Utilities/useWindowWidth'
import { getSliderSettings } from '../Utilities/helpers'
const Slider = dynamic(() => import('react-slick'),{ssr:false})

const MostLovedClient = ({mostLoved}) => {
    const screenWidth = useWindowWidth()
    const settings = getSliderSettings(screenWidth)
    if(!mostLoved){
        return <Loader />
    }

    return (
        <div className="top-selling_container">
        <div className="top-selling">
            <header className="top-selling_header">
                <Title title="Most-loved products"  />
            </header>
            <main className="products" >
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
