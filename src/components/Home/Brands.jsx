
import classes from "./home.module.css"
import Title from '../Utilities/Title'
import RedirectBrand from './RedirectBrand'

const Brands = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/brands`,
        {cache:'no-store'}
    )
    if(!res.ok){
        return <div>Failed to load brands.</div>
    }

    const brands = await res.json()
    
    if(brands.length === 0) return ""
    return (
        <div className={classes["brandsOuterContainer"]}>
            <div className={classes["brandsInnerContainer"]}>
                <Title title="Shop by brands" />
                <div className={classes["brands-grid"]}>
                    {
                        brands.filter(brand => (brand.name !== "Others" && brand.name !== "Phones" && brand.name !== "Accessories")).map(brand => (
                            <RedirectBrand 
                                brand={brand}
                                classes={classes}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Brands