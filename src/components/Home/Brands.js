import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./home.module.css"
import Title from '../Utilities/Title'
import { apiService } from '../../axios'

const Brands = () => {
    const navigate = useNavigate()
    const [brands,setBrands]  = useState([])
    const getBrands = () => {
        apiService({
            url:"brands/",
            method:"GET",
        }).then(res => {
            setBrands(res.data)
        }).catch(error => console.log(error))
    }
    useEffect(() => {
        getBrands()
    }, []) 

    const handleRedirect = (brand) => {
        navigate("/store",{
            state:{
                brandId:brand.id
            }
        })
    }

    if(brands.length === 0) return ""
    return (
        <div className={classes["brandsOuterContainer"]}>
            <div className={classes["brandsInnerContainer"]}>
                <Title title="Shop by brands" />
                <div className={classes["brands-grid"]}>
                    {
                        brands.filter(brand => (brand.name !== "Others" && brand.name !== "Accessories")).map(brand => (
                            <div onClick={() => handleRedirect(brand)} className={classes["brand-card"]}>
                                <img alt={brand.name} src={brand.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Brands