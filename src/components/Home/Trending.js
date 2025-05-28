import {useEffect,useState} from 'react'
import classes from "./TopSelling.module.css"
import Title from '../Utilities/Title'
import SingleProduct from '../Utilities/SingleProduct'
import { apiService } from '../../axios'
import Loader from '../Loader'
import Slider from "react-slick";
import { useWindowWidth } from '../Utilities/useWindowWidth'
import { getSliderSettings } from '../Utilities/helpers'


const TopSelling = () => {
    const [topSelling,setTopSelling] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(resp => {
        apiService({
            url:"products/?trending=true",
            method:"GET",
        }).then(res => {
            setTopSelling(res.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    },[]) 
    const screenWidth = useWindowWidth()
    const settings = getSliderSettings(screenWidth)

    return (
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="Trending products"  />
            </header>
            {!isLoading ? <main className={classes.products} >
                <Slider {...settings}>
                    {topSelling.map(product => {
                        return (
                            
                            <SingleProduct 
                                product={product}
                            /> 
                        )
                    })}
                </Slider>
            </main> : 
                <Loader height="100%" />
            }

        </div>
            
        </div>
    )
}

export default TopSelling
