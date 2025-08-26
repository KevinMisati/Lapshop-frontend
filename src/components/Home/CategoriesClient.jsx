"use client"
import dynamic from "next/dynamic"
import Title from '../Utilities/Title'
import Loader from '../Loader'
import SingleCategory from './SingleCategory'
import { useWindowWidth } from '../Utilities/useWindowWidth'
import { getSliderSettings } from '../Utilities/helpers'
const Slider = dynamic(() => import('react-slick'),{ssr:false})

const CategoriesClient = ({categories}) => {
    const screenWidth = useWindowWidth()
    const settings = getSliderSettings(screenWidth)

    if(!categories){
        return <Loader />
    }

    return (
        <div className="top-selling_container">
        <div className="top-selling">
            <header className="top-selling_header">
                <Title title="Categories"  />
            </header>
            <main className="products">
                <Slider {...settings}>
                    {categories.map(category => {
                        return (
                            <SingleCategory
                                category={category}
                            /> 
                        )
                    })}
                </Slider>
            </main> 
        </div>
            
        </div>
    )
}

export default CategoriesClient
