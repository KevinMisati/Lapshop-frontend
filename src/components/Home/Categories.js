import {useEffect,useState} from 'react'
import classes from "./TopSelling.module.css"
import Title from '../Utilities/Title'
import { apiService } from '../../axios'
import Loader from '../Loader'
import SingleCategory from './SingleCategory'

const Categories = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [categories,setCategories]  = useState([])

    useEffect(resp => {
        apiService({
            url:"categories",
            method:"GET",
        }).then(res => {
            setCategories(res.data)
            setIsLoading(false)
            console.log(res.data,"hello res.data")
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
                {categories.map(category => {
                    return (
                        
                        <SingleCategory
                            category={category}
                        /> 
                    )
                })}
            </main> : 
                <Loader height="100%" />
            }

        </div>
            
        </div>
    )
}

export default Categories
