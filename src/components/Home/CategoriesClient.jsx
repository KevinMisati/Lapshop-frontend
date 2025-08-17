"use client"
import dynamic from "next/dynamic"
import classes from "./home.module.css"
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
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="Categories"  />
            </header>
            <main className={classes.products}>
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
