import {useEffect,useState} from 'react'
import classes from "./home.module.css"
import Title from '../Utilities/Title'
import { apiService } from '../../axios'
import Loader from '../Loader'
import SingleCategory from './SingleCategory'
import Slider from 'react-slick'
import { useWindowWidth } from '../Utilities/useWindowWidth'
import { getSliderSettings } from '../Utilities/helpers'

const Categories = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [categories,setCategories]  = useState([])

    const screenWidth = useWindowWidth()
    const settings = getSliderSettings(screenWidth)

    useEffect(resp => {
        apiService({
            url:"categories",
            method:"GET",
        }).then(res => {
            setCategories(res.data)
            setIsLoading(false)
            localStorage.setItem("categories",JSON.stringify(res.data))
        })
        .catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    },[]) 

    return (
        <div className={classes["top-selling_container"]}>
        <div className={classes["top-selling"]}>
            <header className={classes["top-selling_header"]}>
                <Title title="Categories"  />
            </header>
            {!isLoading ? <main className={classes.products}>
                <Slider {...settings}>
                    {categories.map(category => {
                        return (
                            
                            <SingleCategory
                                category={category}
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

export default Categories
